# GRPS School Intelligence

An iPad-first visit record for schools: one record per school, seen three ways (Building, CSA, Executive), with Apple Pencil or typed notes.

**Live site:** https://melatkins2-ops.github.io/grps-school-intelligence/

## What's here

- `index.html`: the tool (School Home, Building, CSA, Executive views, and New School Visit)
- `manifest.webmanifest`: lets it be added to an iPad home screen
- `README.txt`: earlier prototype notes
- `index(20260906-174203).html`: an older saved version

## Good to know

- **Visits save in the app and to your Visit Notes sheet.** *+ Start Visit* opens the visit screen inside School Intelligence. *Save Visit* keeps the visit on the device and, in the background, sends it to the private sheet *GRPS School Intelligence — Visit Notes* (through the *GRPS School Visit* Google Form, which you never have to open). Offline visits are queued and sent when the device is back online. *Past visits* opens the sheet, which holds visits from every device.
- The form accepts responses from anyone with its address so the background send works in iPhone and iPad Safari; the sheet itself stays private to you.
- **School notes live in Google Docs.** Each school has a private doc, *<School> — school notes*, in the Drive folder *School Intelligence — School Notes* on the @students account. The School Home, CSA and Executive views open it with **Open school notes**. Docs save on every device, work offline in the Google Docs app, and support Apple Pencil Scribble. Notes typed into the older in-app fields stay visible under *Notes saved earlier on this device* so they can be copied over.
- Support-team names (FSS and KSSN) follow the **FSS + KSSN Support Tracker**, the source of truth for those assignments. Other building staff come from the 2026–27 building roster and CSA staff assignments.

## Updating the site

Edit the files on a branch and open a pull request. GitHub Pages publishes `main` automatically, usually within a minute or two of a merge.

## Automated site check

Every pull request and every push to `main` runs **Site check** (`.github/workflows/site-check.yml`). It opens the site in a headless browser at desktop (1366px) and phone (390px) widths and fails if the page throws a JavaScript error, a local file or image is missing, or the page scrolls sideways. See the Actions tab for results.

Maintained by GRPS Community & Student Affairs.
