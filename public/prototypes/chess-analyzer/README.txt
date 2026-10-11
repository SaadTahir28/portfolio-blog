PGN Replay Board – website version
==================================

Upload the whole folder and keep this structure:

  index.html
  chess.js
  engine/stockfish.js        (fast WebAssembly engine)
  engine/stockfish.wasm
  engine/stockfish.asm.js    (fallback for old browsers)

Everything else (sounds, styles, code) is inside index.html.

It has to be served by a web server (any host). Double-clicking
index.html on your computer will replay games, but Game Review won't start
because browsers block the engine on local files.

Hosting options
- Netlify Drop (app.netlify.com/drop): drag the folder in, get a public link.
- Vercel / GitHub Pages / cPanel: upload the folder as a static site.
- Next.js: copy the folder into /public/chess/ and open /chess/index.html.
- Lovable, Bolt, v0 and similar: put the files in the project's public folder.

If the server sends .wasm with the wrong type the page falls back to the
slower engine automatically; to fix, serve .wasm as application/wasm.

Licenses
- Stockfish.js: GPLv3 – https://github.com/nmrugg/stockfish.js
- chess.js: BSD-2 – https://github.com/jhlywa/chess.js
- Sound files: supplied by the site owner. Check you have the rights to
  use them publicly.
