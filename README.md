# MAHA Mental Health Hub

A six-page static site based on the MAHA Mental Health Hub draft. The design draws on MAHA Center's cream, charcoal, and copper language, then uses forest green, plum, a typographic mark, and an editorial layout to give this hub its own identity.

## Pages

- `index.html` — vision and routes through the hub
- `evidence.html` — informed decisions, drug information, withdrawal, and other approaches
- `support.html` — peer and community support
- `organizations.html` — searchable, filterable directory
- `policy.html` — issue areas and primary public sources
- `giving.html` — the clearly identified ICI donation route

`styles.css`, `app.js`, and `favicon.svg` are shared assets. `build.py` contains the page copy and layout; run `python build.py` after editing it to regenerate the HTML. The site works on GitHub Pages without running Python at deployment.

## Publish updates to GitHub Pages

Upload **all six HTML files, `styles.css`, `app.js`, and `favicon.svg`** to the root of the `MAHAMH` repository and commit. GitHub Pages is already configured to deploy from `main / (root)`. Do not upload the ZIP alone or put the files in a nested folder. `build.py` and this README are optional in the repository, but useful for later edits.

## Donation arrangement

The header and primary donation buttons link directly to ICI's dedicated MAHA Mental Health Givebutter campaign at `https://givebutter.com/maha-mental-health-gvp1bu`. ICI receives, manages, and receipts donations. Confirm institutional attribution and donation language with ICI and MAHA before promoting the site as an official joint initiative.

There are no bank account details in this repository. Bank payout information belongs in ICI's authenticated Givebutter/Stripe Connect account, never in GitHub source code. An authorized ICI finance administrator can review the existing payout method in Givebutter's **Finance/Payouts → Settings**. The dedicated campaign URL is defined in `build.py` and used throughout the generated pages. If it changes, update `DONATE_URL` and the other page links, regenerate, and upload the HTML files.

## Editorial maintenance

The 17 directory entries in `app.js` follow the organizations and programs named for review in the supplied ICI–MAHA hub draft. Each card explains the group’s work and its relevance to the hub. The directory does not represent a formal partner list. Verify each link, description, and current program with ICI before an official launch. Policy status belongs at primary sources linked on `policy.html`. Delilah is linked as an optional bill tracker; Regulations.gov is the source for agency rulemaking. The page does not claim to operate its own live tracker. Review the public pages regularly and maintain a correction/removal process. Directory inclusion is not a claim of partnership or endorsement.
