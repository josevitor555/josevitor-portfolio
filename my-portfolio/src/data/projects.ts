// Project data with internationalization support
export interface Project {
  id: string;
  title: {
    pt: string;
    en: string;
  };
  description: {
    pt: string;
    en: string;
  };
  image: string;
  github: string;
  liveDemo: string;
  technologies: string[];
  featured: boolean;
  paidSource?: boolean;
  pricing?: number;
}

export const projectsData: Project[] = [
  {
    id: "1",
    title: {
      pt: "Sistema de Gerenciamento de Tarefas",
      en: "Task Manager System"
    },
    description: {
      pt: "Um sistema completo de gerenciamento de tarefas desenvolvido com React, TypeScript e Tailwind CSS. Inclui internacionalização e design responsivo.",
      en: "A complete task management system built with React, TypeScript and Tailwind CSS. Features internationalization and responsive design."
    },
    image: 'https://img-wrapper.vercel.app/image?url=https://placehold.co/400x250/1a1a1a/8b5cf6?text=Task+Manager',
    github: "https://github.com/josevitor555/black_thunder.git",
    liveDemo: "#",
    technologies: ["React", "TypeScript", "JavaScript", "MongoDB for Manager Task", "MySQL for Register", "JWT for Auth", "Framer Motion"],
    featured: true,
    // paidSource: true,
    pricing: 150.00
  },
  {
    id: "2",
    title: {
      pt: "Miranda - Sua Assistente Pessoal",
      en: "Miranda - Your Personal Assistant"
    },
    description: {
      pt: "Sistema de assistente virtual especializado no ensino de programação, desenvolvido para apoiar estudantes em seu processo de aprendizagem. Projeto em fase de desenvolvimento com foco em metodologias pedagógicas inovadoras.",
      en: "Miranda is a virtual assistant specialized in teaching programming, developed to support students in their learning process. Project in development with a focus on innovative pedagogical methods."
    },
    image: 'https://img-wrapper.vercel.app/image?url=https://placehold.co/400x250/1a1a1a/10b981?text=Miranda+AI',
    github: "https://github.com/josevitor555/TheMiranda.git",
    liveDemo: "#",
    technologies: ["React", "Node.js", "MySQL for Register", "JWT for Auth", "JavaScript", "Tailwind CSS", "Gemini Models"],
    featured: false,
    // paidSource: true,
    pricing: 250.00
  },
  {
    id: "3",
    title: {
      pt: "VibeFy - Clonando SpotiFy",
      en: "VibeFy - Cloning Spotify "
    },
    description: {
      pt: "Uma aplicação em React e TypeScript sobre o músicas, playlists e artistas. O objetivo seria demostrar as habilidades de desenvolvedor Web por meio de projeto prático, utilizando MongoDb como banco de dados.",
      en: "A React and TypeScript application about music, playlists, and artists. The goal would be to demonstrate web developer skills through a practical project using MongoDb as a database."
    },
    image: 'https://img-wrapper.vercel.app/image?url=https://placehold.co/400x250/1a1a1a/f59e0b?text=VibeFy',
    github: "https://github.com/josevitor555/vibefyProject.git",
    liveDemo: "#", // Ex: https://taskmanager-demo.com
    technologies: ["React", "Express.js", "Node.js", "TypeScript", "JavaScript", "MongoDB"],
    featured: false,
    // paidSource: true
  },
  {
    id: "4",
    title: {
      pt: "Meu Portfólio 2.0 com Assistente de IA",
      en: "My Portfolio 2.0 with AI Assistant"
    },
    description: {
      pt: "Essa é uma versão antiga do meu portfólio que não foi ao ar. Esse portfólio foi desenvolvido em JavaScript puro, HTML e CSS. Utilizando a API do Gemini.",
      en: "This is an old version of my portfolio that was not online. This portfolio was developed in JavaScript, HTML and CSS. Using the Gemini API."
    },
    image: 'https://img-wrapper.vercel.app/image?url=https://placehold.co/400x250/1a1a1a/8b5cf6?text=Shiny+Adventure',
    github: "https://github.com/josevitor555/shiny-adventure.git",
    liveDemo: "#",
    technologies: ["JavaScript", "CSS", "HTML", "Gemini API"],
    featured: true,
    // paidSource: true,
    pricing: 75.00
  },
  {
    id: "5",
    title: {
      pt: "Mathematicando - Plataforma Educacional Gamificada",
      en: "Mathematicando - Gamified Educational Platform"
    },
    description: {
      pt: "Aplicação educacional voltada ao ensino de matemática através de metodologias gamificadas. Desenvolvida em resposta à demanda de um educador, visa estimular o aprendizado por meio de jogos interativos e engajamento digital.",
      en: "Educational application focused on teaching mathematics. Developed in response to the demand of a teacher, it aims to stimulate learning through interactive games and digital engagement."
    },
    image: 'https://img-wrapper.vercel.app/image?url=https://placehold.co/400x250/1a1a1a/3b82f6?text=Mathematicando',
    github: "https://github.com/josevitor555/mathematicando.git",
    liveDemo: "#",
    technologies: ["React", "MongoDB for Register", "JWT for Auth", "Node.js", "Express.js", "TailwindCSS", "Vite", "TypeScript", "JavaScript"],
    featured: false,
    // paidSource: true
  },
  {
    id: "6",
    title: {
      pt: "Sistema de Autenticação com Json Web Tokens (JWT)",
      en: "Authentication System with Json Web Tokens (JWT)"
    },
    description: {
      pt: "Sistema de Login JWT com integração a banco de dados não relacional MongoDB para registro de usuário.",
      en: "JWT Login System with integration to MongoDB non-relational database for user registration.."
    },
    image: 'https://img-wrapper.vercel.app/image?url=https://placehold.co/400x250/1a1a1a/ef4444?text=Login+JWT',
    github: "https://github.com/josevitor555/register-jwt.git",
    liveDemo: "#",
    technologies: ["MongoDB for Register", "JavaScript", "TailwindCSS", "ReactJS", "NodeJS", "ExpressJS", "Mongoose", "JWT for Auth"],
    featured: false,
    // paidSource: true
  },
  {
    id: "7",
    title: {
      pt: "Sistema de gerenciamento de produtos",
      en: "Product Management System"
    },
    description: {
      pt: "Segue com a versão 2.0 do sistema de gerenciamento de produtos, seu backend foi desenvolvido em Django com Área administrativa.",
      en: "It continues with version 2.0 of the product management system, its backend was developed in Django with an administrative area."
    },
    image: 'https://img-wrapper.vercel.app/image?url=https://placehold.co/400x250/1a1a1a/ef4444?text=Product+Management+2.0',
    github: "https://github.com/josevitor555/sistema-de-gerenciamento.git",
    liveDemo: "#",
    technologies: ["JavaScript", "TypeScript", "TailwindCSS", "ReactJS", "PostgreSQL", "Django", "Python"],
    featured: true,
    // paidSource: true,
    pricing: 200.00
  },
  {
    id: "8",
    title: {
      pt: "Jogo da Cobrinha desenvolvido em Vanilla JS",
      en: "GameSnake developed in Vanilla JS"
    },
    description: {
      pt: "Jogo da cobrinha desenvolvido em HTML e CSS, contendo mapa randômico para randomização de entidades como maçã. O javaScript foi utilizado para colisão eentre entidades.",
      en: "Snake game developed in HTML and CSS, containing a random map for randomizing entities such as apples. JavaScript was used for collisions between entities."
    },
    image: 'https://img-wrapper.vercel.app/image?url=https://placehold.co/400x250/1a1a1a/3b82f6?text=Game+Snake',
    github: "https://github.com/josevitor555/gameSnake.git",
    liveDemo: "#",
    technologies: ["JavaScript", "Nodejs", "Express", "HTML", "CSS"],
    featured: false,
    // paidSource: true,
    pricing: 200.00
  },
  {
    id: "9",
    title: {
      pt: "Geração de Imagens com Inteligência Artificial Gemini",
      en: "Image generation with Artificial Intelligence Gemini"
    },
    description: {
      pt: "Geração de imagens com Inteligência artificial utilizando modelo Gemini",
      en: "Image generation with Artificial Intelligence using Gemini model"
    },
    image: 'https://img-wrapper.vercel.app/image?url=https://placehold.co/400x250/1a1a1a/3b82f6?text=Image+Generation',
    github: "https://github.com/josevitor555/generate_imagens.git",
    liveDemo: "#",
    technologies: ["JavaScript", "Nodejs", "Express", "HTML", "CSS", "Gemini API"],
    featured: true,
    // paidSource: true,
    pricing: 200.00
  },
];