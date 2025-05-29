export const projectsData = {
  // Siegebound Project
  Siegebound: {
    date: "2023 - present",
    bannerImage: "/projects/Siegebound/siegeboundBanner.png",
    previewImage: "/projects/Siegebound/siegebound.png",
    title: "Siegebound",
    shortDescription: `Siegebound is a solo-developed roguelike strategy game built in Unity 6, combining mechanics from tower defense, real-time strategy, and roguelike games.`,
    description: `SiegeBound is a solo-developed roguelike strategy game built in Unity 6 that blends mechanics from tower defense, real-time strategy, and roguelike genres. I've been developing the game for over two years, handling all aspects of production—from game design and programming to 3D modeling, animation, sound design, and music composition. In addition to development, I manage the marketing and business side of the project, including building the website and maintaining a social media presence. The game's assets are created using Blender for modeling and animation, and Substance Painter for high-quality texturing.`,
    features: [
      {
        imageSrc: "/projects/Siegebound/siegebound.png",
        title: "Procedural Generation",
        text: "Siegebound features a procedural generation for it's world and ressources divided into chunks for better performance.",
      },
      {
        imageSrc: "/projects/Siegebound/siegeboundEditorTools.gif",
        title: "Editor Tools",
        text: "Several Editor Tools have been developed, including a 3D Tilemap Editor as well as custom Inspectors and Attribute Drawers.",
      }, 
   
      {
        imageSrc: "/projects/Siegebound/siegeboundStats.png",
        title: "Stat and Ability System",
        text: "Implementation of a Stat and Ability System that allows for each Stat to be upgraded and modified through randomly drawn cards.",
      },
         {
        imageSrc: "/projects/Siegebound/siegeboundCombat1.gif",
        title: "Behavior Trees and Pathfinding",
        text: "Siegebound utilizes Behavior Trees and A* Pathfinding to create intelligent and responsive AI for enemies and allies",
      },
      {
        imageSrc: "/projects/Siegebound/siegeboundSO.png",
        title: "Scriptable Objects",
        text: "The game makes extensive use of Scriptable Objects to define and manage game data, including units, abilities, and traits.",
      },

       {
        imageSrc: "/projects/Siegebound/siegeboundFmod.png",
        title: "FMOD Integration",
        text: "Uses FMOD for audio management, allowing for dynamic sound effects and music that adapt to the gameplay.",
      },
    ],

    videoLink: "https://www.youtube.com/embed/I-lm-4tHOjY",

    links: {
      steamLink: "https://store.steampowered.com/app/3580260?utm_source=matzPortfolio",
      customLink: "https://www.peasant-games.com",
      customImage: "/custom/pgLogo.png",
    },
    technologiesUsed: ["CSharp", "UnityEngine", "Blender", "VisualStudio", "Git"],
  },

  // CodeVanguard Project
  CodeVanguard: {
    date: "2024 - April 2025",
    id: "CodeVanguard",
    bannerImage: "/projects/CodeVanguard/CodingInterface.png",
    bannerAdjustY: "50%",
    previewImage: "/projects/CodeVanguard/CodingInterface.png",
    title: "Master's Thesis - CodeVanguard",
    shortDescription: `CodeVanguard is a project that integrates Roslyn C# runtime compilation, an in-game code editor, and feedback generation using syntax trees.`,
    description: `As the demand for skilled software developers continues to rise, innovative approaches to programming education have become increasingly important. This page presents the serious game Code Vanguard, which is designed to teach the C# programming language in a unique immersive and interactive manner. The game integrates a programming environment that supports editing of real C# code to create a learning experience that closely mirrors real-world programming scenarios. Players are tasked to write code that solves programming challenges presented in the 3D game world through an in-game coding interface. Code Vanguard aims to help engage both beginner and intermediate programmers in a learning experience that involves higher-order cognitive processes described in Bloom’s taxonomy. It features a runtime C# compilation system, line-by-line execution of user written code as well as a feedback system that evaluates code based on several code quality metrics. A user study was conducted to evaluate the game's effectiveness in conveying the covered programming topics of the serious game and the effectiveness of the integrated educational tools.`,
    features: [
      {
        imageSrc: "/projects/CodeVanguard/CodeVanguardCrane.png",
        title: "Rosyln C# Runtime Compilation",
        text: "Making use of Roslyn C# runtime compilation, the game allows for real-time compilation and execution of user written code.",
      },
      {
        imageSrc: "/projects/CodeVanguard/CodingInterface.png",
        title: "In-Game Code Editor",
        text: "The game features an in-game code editor that allows players to write and edit C# code directly within the game environment.",
      },
      {
        imageSrc: "/projects/CodeVanguard/CodeVanguardLineByLine.png",
        imageScale: 2,
        title: "Line by Line Execution",
        text: "Allows for Line-by-Line execution of code by transforming user-written methods into Unity Coroutines through Syntax Parsing.",
      },
      {
        imageSrc: "/projects/CodeVanguard/Feedback.png",
        title: "Feedback Generation using Syntax Trees",
        text: "Utilizing the Syntax Tree representation of code, the game provides feedback on code quality and correctness.",
      },
    ],

    videoLink: "https://www.youtube.com/embed/rRSH8lgRgcM",
    links: {
      itchIoLink: "https://peasant-games.itch.io/code-vanguard",
      githubLink: "https://github.com/Matzgo/CodeVanguard",
    },
    technologiesUsed: ["CSharp", "UnityEngine", "Blender", "VisualStudio", "Git"],
  },

  // CodeVanguard Project
  ReactWebsites: {
    date: "2024 - 2025",
    id: "ReactWebsites",
    bannerImage: "/projects/ReactWebsites/reactWebsites.png",
    previewImage: "/projects/ReactWebsites/reactWebsites.png",
    title: "React Websites - Portfolio and Business",
    shortDescription: `Modern, responsive websites built with React and Material UI – including my personal portfolio and a landing page for my business.`,
    description: `I have developed two modern, responsive websites using React and Material UI: one for showcasing my portfolio, and another for my indie game development brand, Peasant Games. Both sites are built with reusable components, responsive design principles  and tailored layouts for both mobile and desktop devices.`,
    features: [
      
    ],
    links: {
      githubLink: "https://github.com/Matzgo/matzgo-portfolio-mui"
    },
    technologiesUsed: ["React", "JavaScript", "CSS", "HTML" ,"VSCode", "Git"],
  },

  /* DeepLearning: {
    date: "2024",
    id: "DeepLearning",
    bannerImage: "/projects/DeepLearning/deeplearning.jpg",
    bannerAdjustY: "50%",
    previewImage: "/projects/DeepLearning/deeplearning.jpg",
    title: "Deep Learning - Point Cloud Feature Completion",
    shortDescription: `CodeVanguard is a project that integrates Roslyn C# runtime compilation, an in-game code editor, and feedback generation using syntax trees.`,
    description: `CodeVanguard is a project that integrates Roslyn C# runtime compilation, an in-game code editor, and feedback generation using syntax trees.`,
    features: [
      
    ],
    links: {
      itchIoLink: "https://peasant-games.itch.io/code-vanguard",
    },
    technologiesUsed: ["Python", "VSCode", "Git"],
  }, */


  /* ARMagnet: {
    date: "2023",
    id: "ARMagnet",
    bannerImage: "/projects/ReactWebsites/reactWebsites.png",
    previewImage: "/projects/ReactWebsites/reactWebsites.png",
    title: "AR Magnet Visualization",
    shortDescription: `CodeVanguard is a project that integrates Roslyn C# runtime compilation, an in-game code editor, and feedback generation using syntax trees.`,
    description: `CodeVanguard is a project that integrates Roslyn C# runtime compilation, an in-game code editor, and feedback generation using syntax trees.`,
    features: [
     
    ],
    links: {
      itchIoLink: "https://peasant-games.itch.io/code-vanguard",
    },
    technologiesUsed: ["CSharp", "UnityEngine",  "VisualStudio", "Git"],
  },
 */
 /*  PeerToPeer: {
    date: "2023",
    id: "PeerToPeer",
    bannerImage: "/projects/ReactWebsites/reactWebsites.png",
    previewImage: "/projects/ReactWebsites/reactWebsites.png",
    title: "Peer to Peer - Cyber Security",
    shortDescription: `CodeVanguard is a project that integrates Roslyn C# runtime compilation, an in-game code editor, and feedback generation using syntax trees.`,
    description: `CodeVanguard is a project that integrates Roslyn C# runtime compilation, an in-game code editor, and feedback generation using syntax trees.`,
    features: [
     
    ],
    links: {
      itchIoLink: "https://peasant-games.itch.io/code-vanguard",
    },
    technologiesUsed: ["Go", "VSCode", "Git"],
  }, */


  /* ARTennis: {
    date: "2023",
    id: "ARTennis",
    bannerImage: "/projects/ReactWebsites/reactWebsites.png",
    previewImage: "/projects/ReactWebsites/reactWebsites.png",
    title: "Bachelor's Thesis - AR Tennis",
    shortDescription: `CodeVanguard is a project that integrates Roslyn C# runtime compilation, an in-game code editor, and feedback generation using syntax trees.`,
    description: `CodeVanguard is a project that integrates Roslyn C# runtime compilation, an in-game code editor, and feedback generation using syntax trees.`,
    features: [
      
    ],
    links: {
      itchIoLink: "https://peasant-games.itch.io/code-vanguard",
    },
    technologiesUsed: ["CSharp", "UnityEngine",  "VisualStudio", "Git"],
  }, */

  /* Geolocation: {
    date: "2023",
    id: "Geolocation",
    bannerImage: "/projects/ReactWebsites/reactWebsites.png",
    previewImage: "/projects/ReactWebsites/reactWebsites.png",
    title: "Geolocation Game",
    shortDescription: `CodeVanguard is a project that integrates Roslyn C# runtime compilation, an in-game code editor, and feedback generation using syntax trees.`,
    description: `CodeVanguard is a project that integrates Roslyn C# runtime compilation, an in-game code editor, and feedback generation using syntax trees.`,
    features: [
      
    ],
    links: {
      itchIoLink: "https://peasant-games.itch.io/code-vanguard",
    },
    technologiesUsed: ["Java", "AndroidStudio",  "Git"],
  }, */


  OtherGames: {
    date: "2023",
    id: "OtherGames",
    bannerImage: "/projects/Siegebound/siegeboundSoldier.png",
    bannerAdjustY: "15%",
    previewImage: "/projects/Siegebound/siegeboundSoldier.png",
    title: "Other Games and Projects",
    shortDescription: `A collection of small prototype games I developed in Unity, along with explorations in Unreal Engine and C++ programming.`,

description: `Since the beginning of my bachelor's degree, I have developed several small prototype games using Unity, gaining a deep familiarity with the engine and its workflow. Additionally, I explored Unreal Engine and C++, as well as other engines and languages through a few small prototype projects to broaden my understanding of game development software and tools.`,


    features: [
      
    ],
    links: {
      
    },
    technologiesUsed: ["CSharp", "Cplusplus", "UnityEngine", "UnrealEngine"],
  },
};