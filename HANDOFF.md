# Petalwood Gardens — Website Handoff

This document is everything you need to own, host, and update your website.

---

## 1. What you're receiving

The complete website — **44 files, ~4 MB total**. This is a *static* website
(plain HTML, CSS, and JavaScript with no build step), which means these files
are both the "source code" and the "live code." There is nothing else to
compile or generate. What's in this folder is exactly what runs in the browser.

```
petalwood-gardens-website/
├── index.html          ← Home page
├── services.html       ← Services page
├── about.html          ← About page
├── contact.html        ← Contact page
├── styles.css          ← All styling for the whole site
├── main.js             ← Menu, scroll effects, small interactions
├── favicon.ico         ← Browser-tab icon
├── apple-touch-icon.png
├── robots.txt          ← Search-engine instructions
├── sitemap.xml         ← Page list for search engines
├── .nojekyll           ← Tells GitHub Pages to serve files as-is
└── assets/
    ├── fonts/          ← The two brand fonts (self-hosted)
    └── images/         ← Every photo, logo, and icon on the site
```

## 2. How to preview it on your computer

Double-click `index.html` — it opens in your web browser. The whole site works
locally with no internet connection and no software to install. That's the
benefit of a static site.

## 3. How to put it online (hosting)

Because it's just files, **any** static host works. Easiest options, cheapest
first:

| Option | Cost | How |
|---|---|---|
| **Netlify** (recommended) | Free | Go to app.netlify.com → "Add new site" → "Deploy manually" → drag the whole folder onto the page. Live in ~30 seconds. |
| **Cloudflare Pages** | Free | Similar drag-and-drop upload. |
| **GitHub Pages** | Free | Push the files to a GitHub repo, enable Pages in Settings. (This is where the preview link currently lives.) |
| **Any traditional web host** | Varies | Upload the files via the host's file manager or FTP into the public web folder. |

To update the site later, edit the files and re-upload/re-drag the folder. On
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

- [ ] The website files (this folder / ZIP) — **saved somewhere safe**
- [ ] The domain name, registered in your account
- [ ] The hosting account (Netlify/Cloudflare/etc.) under your email
- [ ] The email inbox for `info@petalwoodgardens.com`

Keep a backup copy of this folder. If a host ever disappears, you can redeploy
these same files anywhere in minutes.
