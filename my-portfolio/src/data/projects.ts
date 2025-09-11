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
    featured: true
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
    technologies: ["React", "Node.js", "MySQL for Register", "JWT for Auth", "JavaScript", "TypeScript", "Tailwind CSS", "Gemini Models"],
    featured: false
  },
  {
    id: "3",
    title: {
      pt: "DegustaZap - Cardápio Online",
      en: "DegustaZap - Online Menu"
    },
    description: {
      pt: "Aplicação em desenvolvimento que atende uma demanda real do mercado gastronômico, permitindo a finalização de pedidos através da integração com WhatsApp. Sistema focado na experiência do usuário sem processamento de pagamentos.",
      en: "An application under development that meets a real demand in the food market, enabling order completion through WhatsApp integration. This system focuses on user experience without payment processing."
    },
    image: 'https://img-wrapper.vercel.app/image?url=https://placehold.co/400x250/1a1a1a/f59e0b?text=DegustaZap',
    github: "https://github.com/josevitor555/DegustaZap.git",
    liveDemo: "#", // Ex: https://taskmanager-demo.com
    technologies: ["React", "Express.js", "Node.js", "PostgreSQL", "TypeScript", "JavaScript", "Python", "Django"],
    featured: false
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
    featured: false
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
    featured: true
  },
  {
    id: "6",
    title: {
      pt: "Sistema de Autenticação com Json Web Tokens (JWT)",
      en: "Authentication System with Json Web Tokens (JWT)"
    },
    description: {
      pt: "Um sistema de gerenciamento de conteúdo para blogs com editor rich text, SEO otimizado e sistema de comentários.",
      en: "A content management system for blogs with rich text editor, SEO optimization and commenting system."
    },
    image: 'https://img-wrapper.vercel.app/image?url=https://placehold.co/400x250/1a1a1a/ef4444?text=Login+JWT',
    github: "https://github.com/josevitor555/register-jwt.git",
    liveDemo: "#",
    technologies: ["MongoDB for Register", "JavaScript", "TailwindCSS", "ReactJS", "NodeJS", "ExpressJS", "Mongoose", "JWT for Auth"],
    featured: false
  }
];