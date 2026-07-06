# Querkles — Interactive

Scroll to reveal a Querkles artwork, then colour it in yourself.

**▶ Live demo: https://thomaspavitte-beep.github.io/querkles-interactive/**

A single-page, no-build web toy that recreates the Querkles activity in the
browser. As you scroll, hundreds of circle outlines grow into place and five
tone layers fade in from lightest to darkest. Pick a preset palette or set
your own five colours — one per tone.

## Features

- **Scroll to colour** — the whole artwork completes itself as you scroll;
  scrolling backwards rewinds it.
- **Your own colours** — five colour wells, one per tone (1 darkest → 5
  lightest, like the books), plus ready-made duotone palettes.
- **Hide circles** — drop the outlines to admire the pure flat-colour version.
- **Multiple artworks** — switch between pieces, each tagged with the book it
  comes from, with a cover card at the finish.
- No frameworks, no build step, no dependencies.

## Add a new artwork

1. Export two SVGs into `art/<id>/`:
   - `circles.svg` — the circle outlines, each circle in its own layer/group.
   - `colours.svg` — the flat tone segments, one top-level group per tone.

   The two artboards don't need to match — registration and tone order are
   auto-detected at runtime.
2. Add an entry to [`art/manifest.js`](art/manifest.js) (order = switcher order):
   ```js
   { id: "frida", title: "Frida", book: "Querkles",
     cover: "covers/querkles.jpg", buy: "" }
   ```
3. Drop the book cover image into [`covers/`](covers/). Until it exists, a
   lettered tile is shown automatically, so a missing cover never breaks the page.

Open a specific artwork directly with `?art=<id>`.

## Run locally

Any static file server works, e.g.:

```sh
python3 -m http.server 4620
# then open http://localhost:4620
```

## Project structure

```
index.html          the entire app (inline CSS + JS)
art/manifest.js     list of artworks + their books
art/<id>/           circles.svg + colours.svg per artwork
covers/             book cover images
```

## Credits

Artwork and concept © Thomas Pavitte. Built as an interactive companion to the
*Querkles* books.
