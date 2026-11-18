# GRPS School Intelligence

An iPad-first visit record for schools: one record per school, seen three ways (Building, CSA, Executive), with Apple Pencil or typed notes.

**Live site:** https://melatkins2-ops.github.io/grps-school-intelligence/

## What's here

- `index.html`: the tool (School Home, Building, CSA, Executive views, and New School Visit)
- `manifest.webmanifest`: lets it be added to an iPad home screen
- `README.txt`: earlier prototype notes
- `index(20260906-174203).html`: an older saved version

## Good to know

- **Everything syncs through your Google account.** Tap **Sign in with Google** (your @students.grps.org account) and School Intelligence reads and writes the private sheet *GRPS School Intelligence — Visit Notes*: visits go to the **App visits** tab and school notes (watching, story, CSA, executive) to **App school notes**. Sign in on each device and they all show the same notes. A bar under the header shows *Synced*, *Saved on this device*, or *Sign in*. Anything entered while signed out or offline stays on the device and syncs at the next sign-in. Sign-in lasts about an hour; after that, tap Sign in again.
- Sign-in uses the *School Intelligence* Google Cloud project (OAuth client, Internal to grps.org) with the Google Sheets scope. No server is involved; the page talks to Google directly.
- Each school also has a Google Doc (*School Intelligence — School Notes* folder) for long-form or handwritten notes, linked from School Home.
- Support-team names (FSS and KSSN) follow the **FSS + KSSN Support Tracker**, the source of truth for those assignments. Other building staff come from the 2026–27 building roster and CSA staff assignments.

## Updating the site

Edit the files on a branch and open a pull request. GitHub Pages publishes `main` automatically, usually within a minute or two of a merge.

## Automated site check

Every pull request and every push to `main` runs **Site check** (`.github/workflows/site-check.yml`). It opens the site in a headless browser at desktop (1366px) and phone (390px) widths and fails if the page throws a JavaScript error, a local file or image is missing, or the page scrolls sideways. See the Actions tab for results.

Maintained by GRPS Community & Student Affairs.
