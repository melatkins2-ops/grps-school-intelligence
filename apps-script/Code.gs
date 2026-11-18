/**
 * GRPS School Intelligence: saves visit notes to the "GRPS School Intelligence — Visit Notes" Google Sheet.
 *
 * Setup (one time, on a computer):
 *   1. Open the Visit Notes sheet > Extensions > Apps Script.
 *   2. Replace everything in Code.gs with this file and click Save.
 *   3. Deploy > New deployment > type: Web app.
 *      Execute as: Me.  Who has access: Only myself.
 *   4. Approve the permissions, then open the Web app URL. Add it to the
 *      Home Screen on your iPad and iPhone (Share > Add to Home Screen).
 *
 * The page itself is loaded from GitHub Pages, so site updates appear here
 * automatically. Only notes travel to and from this sheet.
 */
var PAGE_URL = 'https://melatkins2-ops.github.io/grps-school-intelligence/';
var VISITS = 'Visits';
var NOTES = 'School notes';
var VISIT_KEYS = ['id','school','date','purpose','thread','voice','notes','takeaway','bright','follow','owner','due',
                  'csaSignals','csaTakeaway','routeBuilding','routeCSA','routeExec','extra','updated'];
var NOTE_KEYS = ['school','watch','reconnect','context','storyClear','storyUnresolved','storyChanged',
                 'csaStrength','csaNeed','csaMove','execStatus','execNote','execAction','execOwner','execResolution','extra','updated'];
var BOOL_KEYS = {routeBuilding:1, routeCSA:1, routeExec:1};

function doGet() {
  var html = UrlFetchApp.fetch(PAGE_URL + 'index.html?v=' + Date.now()).getContentText();
  html = html.replace(/<head>/i, '<head><base href="' + PAGE_URL + '" target="_top">');
  return HtmlService.createHtmlOutput(html)
    .setTitle('GRPS School Intelligence')
    .addMetaTag('viewport', 'width=device-width, initial-scale=1')
    .addMetaTag('apple-mobile-web-app-capable', 'yes');
}

function sheet_(name, keys) {
  var ss = SpreadsheetApp.getActive(), sh = ss.getSheetByName(name);
  if (!sh) sh = ss.insertSheet(name);
  if (sh.getLastRow() === 0) {
    sh.getRange(1, 1, 1, keys.length).setValues([keys]).setFontWeight('bold');
    sh.setFrozenRows(1);
    sh.getRange(2, 1, sh.getMaxRows() - 1, keys.length).setNumberFormat('@'); // keep everything as plain text
  }
  return sh;
}
function rows_(sh, n) {
  return sh.getLastRow() < 2 ? [] : sh.getRange(2, 1, sh.getLastRow() - 1, n).getValues();
}
function txt_(v) {
  if (v instanceof Date) return Utilities.formatDate(v, Session.getScriptTimeZone(), 'yyyy-MM-dd');
  return v === null || v === undefined ? '' : String(v);
}
function safe_(v) { // never let a note be read as a formula
  v = String(v === null || v === undefined ? '' : v).slice(0, 45000);
  return /^[=+\-@]/.test(v) ? "'" + v : v;
}
function now_() { return Utilities.formatDate(new Date(), Session.getScriptTimeZone(), 'yyyy-MM-dd HH:mm'); }

function toRow_(obj, keys) {
  var extra = {};
  Object.keys(obj).forEach(function (k) { if (keys.indexOf(k) < 0) extra[k] = obj[k]; });
  return keys.map(function (k) {
    if (k === 'extra') return Object.keys(extra).length ? JSON.stringify(extra) : '';
    if (k === 'updated') return now_();
    if (k === 'csaSignals') return (obj.csaSignals || []).join(' • ');
    if (BOOL_KEYS[k]) return obj[k] ? 'Yes' : '';
    return safe_(obj[k]);
  });
}
function fromRow_(r, keys) {
  var o = {};
  keys.forEach(function (k, i) {
    var v = txt_(r[i]).replace(/^'/, '');
    if (k === 'updated') return;
    if (k === 'extra') { if (v) { try { var e = JSON.parse(v); Object.keys(e).forEach(function (x) { o[x] = e[x]; }); } catch (err) {} } return; }
    if (k === 'csaSignals') { o[k] = v ? v.split(' • ') : []; return; }
    if (BOOL_KEYS[k]) { o[k] = v === 'Yes'; return; }
    if (v !== '' || k === 'id') o[k] = v;
  });
  return o;
}

function getState() {
  var visits = {}, notes = {};
  rows_(sheet_(VISITS, VISIT_KEYS), VISIT_KEYS.length).forEach(function (r) {
    if (!r[0]) return;
    var v = fromRow_(r, VISIT_KEYS), school = v.school; delete v.school;
    v.id = isNaN(Number(v.id)) ? v.id : Number(v.id);
    (visits[school] = visits[school] || []).push(v);
  });
  Object.keys(visits).forEach(function (k) { visits[k].sort(function (a, b) { return String(a.date).localeCompare(String(b.date)); }); });
  rows_(sheet_(NOTES, NOTE_KEYS), NOTE_KEYS.length).forEach(function (r) {
    if (!r[0]) return;
    var n = fromRow_(r, NOTE_KEYS), school = n.school; delete n.school;
    notes[school] = n;
  });
  return {visits: visits, schoolNotes: notes};
}

function saveChanges(ups) {
  var lock = LockService.getScriptLock(); lock.waitLock(20000);
  try {
    var vs = sheet_(VISITS, VISIT_KEYS), ids = rows_(vs, 1).map(function (r) { return String(r[0]); });
    (ups.visits || []).forEach(function (v) {
      var row = toRow_(v, VISIT_KEYS), at = ids.indexOf(String(v.id));
      if (at >= 0) vs.getRange(at + 2, 1, 1, row.length).setValues([row]);
      else { vs.appendRow(row); ids.push(String(v.id)); }
    });
    var ns = sheet_(NOTES, NOTE_KEYS), schools = rows_(ns, 1).map(function (r) { return String(r[0]); });
    (ups.notes || []).forEach(function (n) {
      var obj = Object.assign({school: n.school}, n.note), row = toRow_(obj, NOTE_KEYS), at = schools.indexOf(String(n.school));
      if (at >= 0) ns.getRange(at + 2, 1, 1, row.length).setValues([row]);
      else { ns.appendRow(row); schools.push(String(n.school)); }
    });
    return {ok: true, saved: (ups.visits || []).length + (ups.notes || []).length};
  } finally { lock.releaseLock(); }
}
