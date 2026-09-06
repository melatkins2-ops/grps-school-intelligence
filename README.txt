GRPS School Intelligence — iPad-first prototype

Core behavior:
- One visit record per school
- Apple Pencil/finger handwriting canvas
- Same record routes to Building, CSA, and Executive views
- 42 schools preloaded from GRPS Master Building Roster 2026-27 v7
- Browser-local persistence for prototype testing

Important prototype limitation:
Data is stored in the browser on the device. For district production use, replace localStorage with an authenticated shared data layer so records sync across iPad/computer and meet GRPS privacy/security requirements.

GitHub Pages:
Upload index.html and manifest.webmanifest to a repository root and enable GitHub Pages.
