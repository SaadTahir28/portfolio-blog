// Builds public/prototypes/chess-analyzer/book.json, the opening book behind the chess analyzer's
// "Book" moves. Run by hand (node ./scripts/build-opening-book.js) and commit the output; it is not
// part of npm run build. Source: lichess-org/chess-openings, public domain (CC0).
//
// Every position reached by a named opening line is stored as a hash of the first four FEN fields
// (placement, side to move, castling, en passant), using the same chess.js as the page so the en
// passant field matches. The page hashes its positions with the identical cyrb53 function.
const fs = require('fs')
const path = require('path')
const { Chess } = require('../public/prototypes/chess-analyzer/chess.js')

const SOURCE = 'https://raw.githubusercontent.com/lichess-org/chess-openings/master/'
const FILES = ['a.tsv', 'b.tsv', 'c.tsv', 'd.tsv', 'e.tsv']
const OUT = path.join(__dirname, '../public/prototypes/chess-analyzer/book.json')

// cyrb53 by bryc (public domain); keep in sync with bookKey() in chess-analyzer/index.html
function cyrb53(str) {
  let h1 = 0xdeadbeef
  let h2 = 0x41c6ce57
  for (let i = 0; i < str.length; i++) {
    const ch = str.charCodeAt(i)
    h1 = Math.imul(h1 ^ ch, 2654435761)
    h2 = Math.imul(h2 ^ ch, 1597334677)
  }
  h1 = Math.imul(h1 ^ (h1 >>> 16), 2246822507) ^ Math.imul(h2 ^ (h2 >>> 13), 3266489909)
  h2 = Math.imul(h2 ^ (h2 >>> 16), 2246822507) ^ Math.imul(h1 ^ (h1 >>> 13), 3266489909)
  return (4294967296 * (2097151 & h2) + (h1 >>> 0)).toString(36)
}
const key = (fen) => cyrb53(fen.split(' ').slice(0, 4).join(' '))

;(async () => {
  const positions = new Set()
  const names = {}
  let lines = 0
  for (const file of FILES) {
    const res = await fetch(SOURCE + file)
    if (!res.ok) throw new Error(`${file}: HTTP ${res.status}`)
    const rows = (await res.text()).split('\n').slice(1)
    for (const row of rows) {
      if (!row.trim()) continue
      const [eco, name, pgn] = row.split('\t')
      const game = new Chess()
      for (const san of pgn
        .replace(/\d+\.(\.\.)?/g, ' ')
        .trim()
        .split(/\s+/)) {
        if (!game.move(san, { sloppy: true })) throw new Error(`illegal move ${san} in ${name}`)
        positions.add(key(game.fen()))
      }
      // name the position the line ends on; if two lines end on it, the later one in the files wins
      names[key(game.fen())] = `${eco} ${name}`
      lines++
    }
  }
  const book = { source: 'lichess-org/chess-openings (CC0)', positions: [...positions], names }
  fs.writeFileSync(OUT, JSON.stringify(book))
  console.log(
    `${lines} openings, ${positions.size} positions -> ${path.relative(
      process.cwd(),
      OUT
    )} (${Math.round(fs.statSync(OUT).size / 1024)} KB)`
  )
})()
