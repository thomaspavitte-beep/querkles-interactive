// Artworks shown in the "Artworks" switcher, plus the book card at completion.
//
// To add a new artwork:
//   1. Export two SVGs from Illustrator into art/<id>/ :
//        circles.svg — the circle outlines, each circle in its own layer/group
//        colours.svg — the flat tone segments, one top-level group per tone
//      (Artboards don't need to match — registration is auto-detected by
//      matching <circle> elements between the two files. Tone order is
//      auto-detected too, by sorting the groups light -> dark.)
//   2. Add an entry below (order here = order in the switcher).
//   3. Drop the book cover image into covers/ — `cover` is optional; a lettered
//      tile is shown while the image file is missing. `buy` (optional) adds a
//      "Get the book" link to the completion card.
//
// Optional per-artwork overrides:
//   offset: [dx, dy]  — colours->circles registration, if auto-detect can't
//                       find matching circles in both files.
//   credit: "..."     — HUD credit line (defaults to "Querkles · by Thomas Pavitte").
window.QUERKLES_MANIFEST = [
  {
    id: "frida",
    title: "Frida",
    book: "Querkles",
    cover: "covers/querkles.jpg",
    buy: ""
  }
];
