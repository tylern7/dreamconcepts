# Dream Concepts Landscaping & Construction – one-page site

## Current host
dreamconceptslandscaping.ca runs **WordPress (7.1.3, Divi theme)** on a PHP/LiteSpeed host behind **Cloudflare**. It's a self-hosted site, so a static upload works.

## Upload steps
1. Back up the existing WordPress site (files + database) from the hosting control panel.
2. Option A (simplest, reversible): in File Manager, create a folder (e.g. `/public_html/new/`), upload the contents of this zip, test at `/new/`, then move the files to the web root. Rename WordPress's `index.php` to `index.php.bak` so `index.html` loads. Leave the rest of WordPress in place until you're happy.
3. Option B: point the domain at any static host (Netlify, Cloudflare Pages, GitHub Pages) and keep WordPress as a backup.
4. Purge the Cloudflare cache and the LiteSpeed cache after uploading.
5. Optional redirects: see `htaccess-redirects.txt`. Merge those lines into the EXISTING `.htaccess`; don't overwrite it (WordPress keeps rules there).

## Form
The old site uses Contact Form 7 + reCAPTCHA (fields: first name*, last name*, email*, phone*, approximate budget*, comments). The new form has the same fields.
- Create a free form at https://formspree.io, then replace `YOUR_FORM_ID` in `index.html` with the form's ID.
- Until that's done, submitting opens the visitor's email app addressed to dreamconcepts@me.com with their details filled in.

## Link check (2026-10-15)
- tel:+19059617383, mailto:dreamconcepts@me.com: OK
- Facebook page https://www.facebook.com/dreamconceptsgroupinc/: reachable
- All in-page anchors and the images in /img: OK (no 404s at 390px or 1440px)
- Note: on the old site, the Basements, Bathrooms, Decks, Driveways, Gardens, Kitchens and Ponds & Waterfalls menu links all lead to "No Results Found" pages.

## To confirm with the client
- Years in business: the old homepage says both "Over 20 years in business" and "eight years". The new site uses 20+.
- The email shown is dreamconcepts@me.com (the old site's address is hidden by Cloudflare).
- The photos and Google reviews (4.5★, 13 reviews) come from the current site.
