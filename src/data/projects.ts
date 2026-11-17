import type { Project } from "../types/Project";

const projects: Project[] = [
  {
    id: 1,
    slug: "ChurchWebsite",
    title: "Russian ASD Church Website",
    image: "russian-asd-church-website.png",
    description: "A bilingual website for the Tacoma Russian ASD Church that helps members and visitors stay connected through live event streaming, synced calendar, and accessible bible study resources.",
    details: [
      "Built responsive, bilingual interfaces creating accessible and localized experience across devices.",
      "Developed API routes and server-side authentication, integrating external services to retrieve and process dynamic calendar and livestream data.",
      "Deployed and maintained the production application on Vercel, configuring security headers and SEO metadata to strengthen browser-side protections and improve the discoverability of church resources.",
    ],
    link: ["https://sdatacoma.com/"],
    linkName: ["View Live"],
    github: ["https://github.com/glavavlada/TacomaASDWebsite"],
    languages: ["Typescript", "HTML", "CSS"],
    frameworks: ["Next.js", "Tailwind CSS"],
    tools: ["Vercel"],
  },
  {
    id: 2,
    slug: "CollectionManager",
    title: "Collection Management System",
    image: "collection-management-system.png",
    description: "A web-based collection management system for organizing and maintaining structured data through a responsive interface, real-time updates, and scalable database-backed storage.",
    details: [
      "Developed a containerized development environment using Docker Compose and automated portable production builds and releases using GitHub Actions.",
      "Engineered a RESTful API supporting CRUD operations, providing structured and scalable access to collection data through URI-based endpoints.",
      "Designed a relational database schema in SQL, improving query efficiency and scalable data organization."
    ],
    link: ["https://github.com/jayneen/collection-management-system/releases"],
    linkName: ["View Release"],
    github: ["https://github.com/jayneen/collection-management-system"],
    languages: ["MySQL", "Javascript", "HTML", "CSS"],
    frameworks: ["Node.js", "Express.js", "jQuery", "Bootstrap"],
    tools: ["Docker", "GitHub Actions"],
  },
  {
    id: 3,
    slug: "ChaosGame",
    title: "Chaos Game Visualizer",
    image: "chaos-game-visualizer.png",
    description: "An interactive web exhibit that generates real-time fractal patterns using the chaos game algorithm, designed to make mathematical concepts more visual, hands-on, and engaging for museum visitors.",
    details: [
      "Developed an interactive visualization for the Seattle Universal Math Museum to support hands-on demonstrations of fractal behaviors.",
      "Implemented real-time rendering of chaos game patterns, allowing users to explore how different inputs affect the resulting visualizations over time.",
      "Created feature documentation and installation guides to support deployment and future maintenance."
    ],
    github: ["https://github.com/jayneen/chaos-game-visualizer"],
    languages: ["Typescript", "HTML", "CSS"],
    tools: ["Electron"],
  },
  {
    id: 4,
    slug: "CryptographicAlgorithms",
    title: "Cryptographic Algorithms Suite",
    image: "cryptographic-algorithms-suite.png",
    description: "A secure encryption application built around custom cryptographic implementations, combining symmetric and asymmetric encryption techniques in compliance with the official standards.",
    details: [
      "Implemented SHA-3 and SHAKE cryptographic hash and extendable-output functions from scratch, following official NIST specifications.",
      "Integrated ECIES encryption and Schnorr digital signatures using custom libraries to support secure key exchange and authentication.",
      "Developed and tested cryptographic functionality against relevant specification requirements."
    ],
    link: ["https://nvlpubs.nist.gov/nistpubs/FIPS/NIST.FIPS.202.pdf"],
    linkName: ["View Specifications"],
    github: ["https://github.com/jayneen/cryptographic-algorithms-suite"],
    languages: ["Java"],
  },
  {
    id: 5,
    slug: "UserProfiling",
    title: "Text-based User Profiling",
    image: "",
    description: "A machine learning project focused on analyzing various mode user data to identify demographic and personality patterns through natural language processing and predictive modeling techniques.",
    details: [
      "Developed a model to process text-based status updates and analyze their semantic linguistic features.",
      "Trained models on user demographics and personality traits using Naive Bayes and Linear Regression.",
      "Coordinated model ensembling and documentation, delivering organized reports and final implementation."
    ],
    github: ["https://github.com/jayneen/multi-modal-user-profiling"],
    languages: ["Python"],
  },
  {
    id: 6,
    slug: "DungeonCrawler",
    title: "Dungeon Crawler",
    image: "",
    description: "A dungeon crawler featuring procedurally generated levels, persistent save systems, and multi-floor exploration. Built as a collaborative project focused on replayability and classic RPG-style gameplay.",
    details: [
      "Collaborated in a team of 4 to design a procedurally generated multi-floor adventure role-playing game.",
      "Ensured iterative progress through Agile methodology focusing on sprint deliverables and user stories.",
      "Managed version control using Git and Github to maintain consistency and collaboration.",
      "Implemented serialization for game state persistence using Python's Pickling module.",
      "Validated quality through comprehensive functionality tests with the Pytest framework."
    ],
    github: ["https://github.com/leadbraw/DungeonAdventure"],
    languages: ["Python"],
    frameworks: ["Pygame"],
  }
];

export default projects;