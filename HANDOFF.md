# Petalwood Gardens — Website Handoff

This document is everything you need to own, host, and update your website.

---

## 1. What you're receiving

**Two ZIP files.** This is a *static* website — plain HTML, CSS, and JavaScript
with **no build step** — so nothing needs to be compiled or generated. The files
you unzip are exactly what runs in the browser. You're receiving two packages of
those files, for two different purposes:

### `source.zip` — the master backup · 45 ZIP entries / 42 actual files
The complete, editable project. Keep this as your safe archive, and hand it to
any developer who needs to change the site later. It contains everything in
`deploy.zip` **plus** the documentation (this file) and the original design
assets that the current live site no longer uses — earlier logo images and a
couple of spare app icons. Think of it as the full project backup.

### `deploy.zip` — the upload-ready live site · 40 ZIP entries / 37 actual files
Only the files the website actually needs to run — no notes, no drafts, no unused
assets. **This is the package you put on hosting.**

> The two ZIPs are **not** identical. `source.zip` is the full archive;
> `deploy.zip` is the trimmed, live-ready subset. Always deploy from
> `deploy.zip`, and keep `source.zip` somewhere safe as your backup.
>
> (The "ZIP entries" number is a little higher than "actual files" because a ZIP
> also lists the folders themselves — `assets/`, `assets/fonts/`,
> `assets/images/` — as entries. The file counts above are what matter.)

The live site (`deploy.zip`) is organized like this:

```
index.html          ← Home page
services.html       ← Services page
about.html          ← About page
contact.html        ← Contact page
styles.css          ← All styling for the whole site
main.js             ← Menu, scroll effects, small interactions
favicon.ico         ← Browser-tab icon
apple-touch-icon.png
robots.txt          ← Search-engine instructions
sitemap.xml         ← Page list for search engines
.nojekyll           ← Tells GitHub Pages to serve files as-is
assets/
├── fonts/          ← The two brand fonts (self-hosted)
└── images/         ← Every photo and icon used by the live site
```

## 2. How to preview it on your computer

Unzip `deploy.zip` and double-click `index.html` — it opens in your web browser.
The whole site works locally with no internet connection and no software to
install. That's the benefit of a static site.

## 3. How to put it online (hosting)

Unzip `deploy.zip` first, then upload its contents. Because it's just files,
**any** static host works. Easiest options, cheapest first:

| Option | Cost | How |
|---|---|---|
| **Netlify** (recommended) | Free | Go to app.netlify.com → "Add new site" → "Deploy manually" → drag the unzipped `deploy` folder onto the page. Live in ~30 seconds. |
| **Cloudflare Pages** | Free | Similar drag-and-drop upload of the unzipped folder. |
| **GitHub Pages** | Free | Push the files to a GitHub repo, enable Pages in Settings. (This is where the preview link currently lives.) |
| **Any traditional web host** | Varies | Upload the files via the host's file manager or FTP into the public web folder. |

To update the site later, make your edits in the `source.zip` project (your
master copy), re-export a clean set of live files, and re-upload/re-drag them. On
Netlify you can also connect it to a GitHub repo so it redeploys automatically
when you change a file.

## 4. Connecting your domain (petalwoodgardens.com)

The site is currently at a temporary preview URL. To use your real domain:

1. Buy/keep `petalwoodgardens.com` at a registrar (GoDaddy, Namecheap, Google
   Domains, etc.). **Make sure the domain is registered in *your* name/account.**
2. In your host (e.g., Netlify → Domain settings → "Add custom domain"), add
   `petalwoodgardens.com`.
3. The host gives you DNS records to enter at your registrar. Add them. HTTPS
   (the padlock) is set up automatically and free on Netlify/Cloudflare.

The site's code already references `petalwoodgardens.com` in its SEO tags, so no
code change is needed once the domain points at the host.

## 5. How to make common edits

Everything is plain text you can edit in any code editor (free:
[VS Code](https://code.visualstudio.com/)) or even Notepad/TextEdit.

- **Change phone/email/hours** → search the `.html` files for the current value
  and replace it. The phone number appears as both `(650) 787-2569` (display) and
  `+16507872569` (the click-to-call link) — update both.
- **Change wording** → open the relevant `.html` file and edit the text between
  the tags.
- **Swap a photo** → drop the new image into `assets/images/` and either give it
  the same filename as the one it replaces, or update the filename in the HTML.
  Keep photos **landscape / horizontal** for the best fit.
- **Colors & fonts** → all defined at the top of `styles.css` under
  `:root { --green: … }` etc.

## 6. Business/license details currently on the site

- Phone: **(650) 787-2569**
- Email: **info@petalwoodgardens.com**
- Hours: **Mon–Fri, 7:30 AM – 4:00 PM**
- License **#1143848**, Bonded, Insured, ISA Certified Arborist
- Owner: **Juan Ruiz**
- Service area: San Francisco · Peninsula · North Bay

## 7. Ownership checklist (important for a full handoff)

To fully own the site with no dependency on anyone else, make sure these are in
**your** accounts:

- [ ] **`source.zip`** (your master backup) — **saved somewhere safe**
- [ ] **`deploy.zip`** (the live-site files) — used for hosting
- [ ] The domain name, registered in your account
- [ ] The hosting account (Netlify/Cloudflare/etc.) under your email
- [ ] The email inbox for `info@petalwoodgardens.com`

Keep a backup copy of `source.zip`. If a host ever disappears, you can redeploy
the live files anywhere in minutes.
