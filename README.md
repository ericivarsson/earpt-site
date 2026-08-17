# EarPT website

Static marketing + support site for App Store: support, privacy, terms.

No form. Support is `support@earpt.com` (point that address at your shared M365 mailbox).

## GitHub Pages + earpt.com

GitHub Free can only serve Pages from a **public** repo. Keep the iOS app in a **private** repo. Publish this folder as its own public repo (for example `earpt-site`).

1. Create a public repo whose **root** is the contents of `web/` (`index.html` at the root, not `web/index.html`).
2. Settings → Pages → Deploy from branch `main` / `/ (root)`.
3. Custom domain: `earpt.com`.
4. At your DNS host:

   Apex `earpt.com` — A records:

   - `185.199.108.153`
   - `185.199.109.153`
   - `185.199.110.153`
   - `185.199.111.153`

   `www` — CNAME to `YOURUSER.github.io`

5. Wait for DNS, then enable **Enforce HTTPS**.

The `CNAME` file in this folder must stay `earpt.com`.

## App Store URLs

- Support: `https://earpt.com/support.html` (or `/support` if you add a rewrite later)
- Privacy: `https://earpt.com/privacy.html`
- Terms: Apple Standard EULA  
  `https://www.apple.com/legal/internet-services/itunes/dev/stdeula/`  
  and/or `https://earpt.com/terms.html`

## Legal

Privacy describes on-device app data, Apple payments, and mail you send to support. Terms point at Apple’s Standard EULA. Not a substitute for a lawyer if the product grows a backend.
