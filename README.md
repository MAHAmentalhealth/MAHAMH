# Mental Health Hub — concept prototype

A responsive, static proof of concept based on the MAHA Mental Health Hub and Capacity Fund draft. It is a proposed initiative, not an official MAHA Center website. The page links back to [MAHA Center](https://www.mahacenter.org/).

## What works

- Landing page navigation, including a mobile menu.
- Searchable and filterable sample resource library.
- Links to source organizations, peer support, ICI withdrawal information, FDA drug information, and MedWatch.
- Proposed policy, featured work, Capacity Fund, and email flows shown with their current status. The header's Donate button jumps to the Capacity Fund section; the final payment button is disabled until a dedicated donation destination is approved.

The sample listings and public language need editorial and institutional approval. Donation and signup forms are deliberately inactive until their owners, data handling, and processes are established.

## Preview locally

Open `index.html` in a browser, or run `python -m http.server 8000` in this folder and visit `http://localhost:8000`.

## Publish on GitHub Pages

1. Create a new GitHub repository, for example `mental-health-hub`.
2. Upload `index.html`, `styles.css`, and `app.js` into the repository root. Keep the files at the root, not inside an extra folder.
3. In the repository, open **Settings → Pages**. Under **Build and deployment**, choose **Deploy from a branch**, then `main` and `/ (root)`. Save.
4. GitHub will display the public `github.io` URL on the Pages settings screen. For a project repository it has the form `https://USERNAME.github.io/mental-health-hub/`.

No build step, package manager, API keys, or backend is needed. The site uses relative asset paths so it also works under a GitHub project path.

## Connect a domain

After the GitHub Pages address works, enter the domain in **Settings → Pages → Custom domain**. For a `www` or other subdomain, create a DNS `CNAME` record pointing to `USERNAME.github.io` (replace `USERNAME`; omit the repository name). For an apex/root domain, use the current GitHub Pages `A`/`AAAA` values from [GitHub's domain guide](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site). Let DNS and the certificate provision, then enable **Enforce HTTPS** in Pages. GitHub may create a `CNAME` file automatically when publishing from a branch; preserve it in future uploads.

If this will ultimately live under `mahacenter.org`, the MAHA Center domain administrator must create the DNS record or route. A separate domain can be used for the demonstration without changing MAHA's existing site.

## Edit content

- Page copy and sections: `index.html`
- Visual design and mobile layouts: `styles.css`
- Resource entries and filter behavior: `app.js`

Before an official launch, confirm MAHA Center's approval, resource review and correction process, institutional roles, fund governance, newsletter provider and privacy terms, and the final domain. Replace the concept notice only after that approval.
