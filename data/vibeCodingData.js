// Playable prototypes. Each `play` path points at a self-contained HTML file (or a
// folder's index.html) in public/prototypes. Array order is the display order on /vibe-coding.
const vibeCodingData = [
  {
    title: 'PGN Replay Board | Playable Prototype',
    description:
      'A browser chess replay board built with HTML5 and JavaScript. Paste or upload a PGN to replay games with animated moves and sound, then run a Stockfish game review that flags best moves, inaccuracies, mistakes and blunders with an eval bar and arrows. Hit the play button to run it right in your browser.',
    imgSrc: '/static/images/projectCards/chess_analyzer.png',
    play: '/prototypes/chess-analyzer/index.html',
    tools: ['HTML5', 'JavaScript', 'Stockfish', 'WebAssembly', 'Chess', 'Prototype', 'Web'],
  },
  {
    title: 'Idle Developers 3D | Playable Prototype',
    description:
      'An isometric 3D idle office prototype built with three.js and WebGL in a single HTML file. Drag to pan and pinch to zoom around the studio, click a busy computer to speed up earnings, call developers back to empty desks, chat with your team, then spend the cash on office upgrades and new hires before payday comes around. Hit the play button to run it right in your browser.',
    imgSrc: '/static/images/projectCards/idle_developers_3d.png',
    play: '/prototypes/idle-developers-3d.html',
    tools: ['HTML5', 'three.js', 'WebGL', 'JavaScript', '3D', 'Prototype', 'Web', 'Idle'],
  },
  {
    title: 'Idle Dev Empire | Playable Prototype',
    description:
      'A browser-based idle tycoon prototype built with pure HTML5 and JavaScript. Build your own software empire: hire and train developers, ship client projects, cover payroll, keep morale up, take funding rounds and buy upgrades before your team walks out and you run out of cash. Hit the play button to run it right in your browser.',
    imgSrc: '/static/images/projectCards/idle_dev_empire.png',
    play: '/prototypes/idle-dev-empire.html',
    tools: ['HTML5', 'JavaScript', 'Prototype', 'Web', 'Idle', 'Tycoon'],
  },
  {
    title: 'Gravity Color Switch | Playable Prototype',
    description:
      'A playable browser prototype built with pure HTML5 Canvas and JavaScript. You climb endlessly, and your color matches the wall you are stuck to. Tap to flip sideways and match the color of each bar ahead. Hit the play button to run it right in your browser.',
    imgSrc: '/static/images/projectCards/gravity-color-switch.png',
    play: '/prototypes/gravity-color-switch.html',
    tools: ['HTML5', 'Canvas', 'JavaScript', 'Prototype', 'Web', 'Hyper Casual'],
  },
]

export default vibeCodingData
