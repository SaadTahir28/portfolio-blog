import { description, title, youtube } from "./siteMetadata"

const projectsData = [
  {
    title: 'Super Jump - Flip Jump Master',
    description:
      'Get ready for a super adventure in Super Jump Star, the thrilling trampoline jumping game that will test your skills and push you to new heights! I worked on Game Core Mechanics, Jump Mechanics, Level Design, UI/UX, Level Progression and Sound.',
    imgSrc: '/static/images/projectCards/super_jump.png',
    deployed: 'https://play.google.com/store/apps/details?id=com.mlabs.superjumpstar',
    tools: ['C#', 'Unity', '3D', 'Hyper Casual', 'UI/UX', 'Android', 'iOS'],
  },
  {
    title: 'Gamerize | Unity',
    description:
      'An English vocabulary app [Gamerize Dictionary] where you can acquire all four language skills: listening, reading, speaking, and writing. it allows learning from simple children\'s English to the level of Eiken Grade 2. I worked on UI/UX design, Unity Game Development, Text-to-Speech and Speech to text recognition.',
    imgSrc: '/static/images/projectCards/gamerize.png',
    deployed: 'https://play.google.com/store/apps/details?id=app.gamerize.gamerize&hl=en_US',
    youtube: 'https://youtu.be/aGZ2D_c3Pfc?si=RS4vxrxA6bYdP2NS',
    tools: ['C#', 'Unity', '2D', 'Education', 'UI/UX', 'Android', 'iOS'],
  },
  {
    title: 'Fill Hole | Dance of Planets',
    description:
      "Fill the black hole with planets and run the simulation using them. A calm and soothing experience. I worked on Game Design, Development, Project Management, Store Uploading, Music, Art, UI/UX",
    imgSrc: '/static/images/projectCards/fillhole.jpg',
    youtube: 'https://youtu.be/y4o7OqyDloM',
    deployed: 'https://play.google.com/store/apps/details?id=com.velocityengine7.FillHoleDanceofPlanets',
    tools: ['C#', 'Unity', '3D', 'Hyper Casual', 'Game Design', 'Sound Design', 'UI/UX', 'Android'],
  },
  {
    title: 'NeuroSync Health | AR/VR',
    description:
      "An AR/VR solution for detecting concussions and injuries. Utilizes eye tracking sensors from the headsets to track the eyes and perform different assessments.",
    imgSrc: '/static/images/projectCards/neurosync.jpg',
    youtube: 'https://vimeo.com/804085818',
    deployed: 'https://www.neurosync.health/product/',
    tools: ['C#', 'Unity', 'AR', 'VR', 'Pico Neo 2', 'Pico Neo 3', 'Magic Leap 2', 'Hololens 2', 'Apple Vision OS', 'Health', 'Android', 'Pico Store'],
  },
  {
    title: 'ALEX Go | Blockchain',
    description: 'ALEX is a DeFi protocol built for Bitcoin and BRC-20 tokens. It is built via Stacks Blockchain and its smart contract language Clarity.',
    imgSrc: '/static/images/projectCards/alexgo.jpg',
    href: 'https://github.com/alexgo-io',
    deployed: 'https://alexgo.io/',
    tools: ['Blockchain', 'Stacks', 'Ethereum', 'Bitcoin', 'ReactJS', 'Clarity Language', 'Solidity', 'Smart Contract', 'Unit Tests', 'Integration Tests', 'Maths']
  },
  {
    title: 'Stack Jump | Unity',
    description: 'You have to tap to jump the rope otherwise it will smack you to the ground. Tap and hold to break a streak of platforms. Single tap to jump high. Different speeds and variations of rope will try to confuse you. Ragdoll, different environments, 100 levels, level transition and game over transition are implemented.',
    imgSrc: '/static/images/projectCards/stackjump.png',
    youtube: 'https://www.youtube.com/shorts/n56ycfhjpfo?feature=share',
    tools: ['C#', 'Unity', '3D', 'Hyper Casual', 'UI/UX', 'Android', 'iOS'],
  },
  {
    title: 'Car Rush | Unity',
    description: 'Car Rush is a legacy car rushing game where you avoid the traffic and complete a level. The game contains 4 different environments, 100 levels, 5 different types of cars including cop cars that chase behind you. The game is made in Unity. Spawning system, level generation, probability of special cars to arrive, bonus level on completing the level, boss levels and near misses are developed in this game.',
    imgSrc: '/static/images/projectCards/carrush.png',
    youtube: 'https://www.youtube.com/shorts/DdY18YS7MYk?feature=share',
    tools: ['C#', 'Unity', '3D', 'Hyper Casual', 'UI/UX', 'Android', 'iOS'],
  },
  {
    title: 'Unstoppabull | Unity',
    description: 'The game is based on the spanish festival of bull running. The people that are NPC run away from the bull. You are the bull and you have to hit all the people, leaving behind anyone will result in level lost. Drag left right to control the bull. You have to save the bulls in the path to increase your hitting range. Hit the metador to gain extra boost. NPCs, level spawner, 100 levels, effects, ragdolls and different environments are implemented.',
    imgSrc: '/static/images/projectCards/unstoppabull.png',
    youtube: 'https://youtu.be/--KmrVIuspE',
    tools: ['C#', 'Unity', '3D', 'Hyper Casual', 'UI/UX', 'Android', 'iOS'],
  },
  {
    title: 'Conzultation Hair Dressing | iOS | AR',
    description: ' An iOS native app built with Swift where the customer can view his/her hair dyed to different colors in a real-time video experience using Augmented Reality. The user can book appointments, try-on hair colors from a catalogue of 150 shades, do a quiz for his hair and much more.',
    imgSrc: '/static/images/projectCards/conzultation.png',
    youtube: 'https://www.youtube.com/shorts/MNmSq1PZmNA',
    tools: ['iOS', 'Swift', 'AR', 'Mobile', 'UI/UX', 'App Store'],
  },
]

export default projectsData
