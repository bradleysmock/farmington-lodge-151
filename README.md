# Farmington Lodge No. 151: site with Pages CMS

| File | Purpose |
|---|---|
| `content/site.json` | All editable text. This is what Pages CMS reads and writes. |
| `media/` | Uploaded photos. |
| `.pages.yml` | Tells Pages CMS which fields editors see. |
| `template.html` | Layout and styling. Developer-only. |
| `build.mjs` | Fills the template from `site.json` into `dist/index.html`. |
| `.github/workflows/deploy.yml` | Builds and publishes to GitHub Pages on every push to `main`. |

## Local preview
    node build.mjs && open dist/index.html

## One-time setup
1. Push this folder to a GitHub repo. In Settings → Pages, set Source to "GitHub Actions".
2. Sign in at https://app.pagescms.org with GitHub and open the repo.
3. Invite each editor as a collaborator (Settings → Collaborators). They need a free GitHub account.
4. Contact form: get an access key at web3forms.com (sign up with the lodge's email) and paste it into "Contact form → Web3Forms access key".
