// Translation data for Portuguese and English
export interface TranslationData {
  [key: string]: {
    pt: string;
    en: string;
  };
}

export const translations: TranslationData = {
  // Navigation
  'nav.home': {
    pt: 'Início',
    en: 'Home'
  },
  'nav.about': {
    pt: 'Sobre',
    en: 'About'
  },
  'nav.projects': {
    pt: 'Projetos',
    en: 'Projects'
  },
  'nav.figma': {
    pt: 'Figma',
    en: 'Figma'
  },
  'nav.experience': {
    pt: 'Experiência',
    en: 'Experience'
  },
  'nav.contact': {
    pt: 'Contato',
    en: 'Contact'
  },
  'nav.login': {
    pt: 'Entrar',
    en: 'Login'
  },
  'nav.logout': {
    pt: 'Sair',
    en: 'Logout'
  },
  'nav.settings': {
    pt: 'Configurações',
    en: 'Settings'
  },

  // Authentication Section
  'auth.createAccount': {
    pt: 'Criar Conta',
    en: 'Create Account'
  },
  'auth.welcomeBack': {
    pt: 'Bem-vindo de Volta',
    en: 'Welcome Back'
  },
  'auth.joinCommunity': {
    pt: 'Junte-se à comunidade',
    en: 'Join the community'
  },
  'auth.signInToContinue': {
    pt: 'Entre para continuar',
    en: 'Sign in to continue'
  },
  'auth.name': {
    pt: 'Nome',
    en: 'Name'
  },
  'auth.namePlaceholder': {
    pt: 'Seu nome completo',
    en: 'Your full name'
  },
  'auth.email': {
    pt: 'E-mail',
    en: 'Email'
  },
  'auth.emailPlaceholder': {
    pt: 'seu.email@exemplo.com',
    en: 'your.email@example.com'
  },
  'auth.password': {
    pt: 'Senha',
    en: 'Password'
  },
  'auth.passwordPlaceholder': {
    pt: '••••••••',
    en: '••••••••'
  },
  'auth.signIn': {
    pt: 'Entrar',
    en: 'Sign In'
  },
  'auth.signUp': {
    pt: 'Cadastrar',
    en: 'Sign Up'
  },
  'auth.loading': {
    pt: 'Carregando...',
    en: 'Loading...'
  },
  'auth.creatingAccount': {
    pt: 'Criando conta...',
    en: 'Creating account...'
  },
  'auth.signingIn': {
    pt: 'Entrando...',
    en: 'Signing in...'
  },
  'auth.signupSuccess': {
    pt: 'Conta criada com sucesso!',
    en: 'Account created successfully!'
  },
  'auth.signinSuccess': {
    pt: 'Bem-vindo de volta!',
    en: 'Welcome back!'
  },
  'auth.error': {
    pt: 'Algo deu errado. Tente novamente.',
    en: 'Something went wrong. Please try again.'
  },
  'auth.alreadyHaveAccount': {
    pt: 'Já tem uma conta? Entre',
    en: 'Already have an account? Sign in'
  },
  'auth.dontHaveAccount': {
    pt: 'Não tem uma conta? Cadastre-se',
    en: "Don't have an account? Sign up"
  },

  // Welcome Page Section
  'welcome.loading': {
    pt: 'Carregando...',
    en: 'Loading...'
  },
  'welcome.title': {
    pt: 'Bem-vindo, {name}!',
    en: 'Welcome, {name}!'
  },
  'welcome.email': {
    pt: 'Email:',
    en: 'Email:'
  },
  'welcome.protectedRoute': {
    pt: 'Você está em uma conta free.',
    en: 'You are on a free account.'
  },
  'welcome.backToHome': {
    pt: 'Voltar ao Início',
    en: 'Back to Home'
  },
  'welcome.deleteAccount': {
    pt: 'Excluir Conta Permanentemente',
    en: 'Delete Account Permanently'
  },
  'welcome.deleteConfirmation': {
    pt: 'Tem certeza de que deseja excluir sua conta? Esta ação não pode ser desfeita.',
    en: 'Are you sure you want to delete your account? This action cannot be undone.'
  },
  'welcome.userNotAuthenticated': {
    pt: 'Usuário não autenticado. Por favor, faça login novamente.',
    en: 'User not authenticated. Please login again.'
  },
  'welcome.deletingAccount': {
    pt: 'Excluindo sua conta...',
    en: 'Deleting your account...'
  },
  'welcome.accountDeletedSuccess': {
    pt: 'Conta excluída com sucesso!',
    en: 'Account deleted successfully!'
  },
  'welcome.deleteError': {
    pt: 'Erro ao excluir conta: {error}. Por favor, tente novamente.',
    en: 'Error deleting account: {error}. Please try again.'
  },
  'welcome.returningToHome': {
    pt: 'Retornando ao início...',
    en: 'Returning to home...'
  },
  'welcome.processing': {
    pt: 'Processando...',
    en: 'Processing...'
  },

  // Banner Section
  'banner.greeting': {
    pt: 'Olá, eu sou',
    en: 'Hello, I am'
  },
  'banner.name': {
    pt: 'José Vitor',
    en: 'José Vitor'
  },
  'banner.description': {
    pt: 'Desenvolvedor Web Pleno, apaixonado por criar experiências digitais bonitas, funcionais e centradas no usuário.',
    en: 'Senior Web Developer, passionate about creating beautiful, functional and user-centered digital experiences.'
  },
  'banner.viewProjects': {
    pt: 'Ver Meus Projetos',
    en: 'View My Projects'
  },
  'banner.downloadResume': {
    pt: 'Baixar Currículo',
    en: 'Download Resume'
  },
  'banner.playMusic': {
    pt: 'Tocar música',
    en: 'Play music'
  },
  'banner.pauseMusic': {
    pt: 'Pausar música',
    en: 'Pause music'
  },

  // About Me Section
  'about.title': {
    pt: 'Sobre',
    en: 'About'
  },
  'about.titleHighlight': {
    pt: 'Mim',
    en: 'Me'
  },
  'about.description1': {
    pt: 'Sou um desenvolvedor web com 6 anos de experiência. Concluí um curso técnico em 2023, após a pandemia. Retomei meus estudos na área um ano depois, cursando Análise e Desenvolvimento de Sistemas na mesma instituição de ensino (IFPI). Prevista para ser encerrada em 2026.',
    en: 'I am a web developer with 6 years of experience. I completed a technical course in 2023, after the pandemic. I resumed my studies in the field a year later, studying Systems Analysis and Development at the same educational institution (IFPI). Expected to finish in 2026.'
  },
  'about.description2': {
    pt: 'Com o passar dos anos, trabalho em projetos não apenas pessoais, mas também com outras pessoas como colegas e professores. Isso me proporciona o conhecimento prático necessário para continuar atuando na área em desenvolvimento de software.',
    en: 'Over the years, I work on projects not only personal, but also with other people like colleagues and teachers. This provides me with the practical knowledge necessary to continue working in the software development field.'
  },
  'about.projectsCompleted': {
    pt: 'Projetos Concluídos',
    en: 'Completed Projects'
  },
  'about.yearsExperience': {
    pt: 'Anos de Experiência',
    en: 'Years of Experience'
  },
  'about.githubFollowers': {
    pt: 'Seguidores no GitHub',
    en: 'GitHub Followers'
  },
  'about.profilePhoto': {
    pt: 'Nihil est quod Deus efficere non possit.',
    en: 'Nihil est quod Deus efficere non possit.'
  },

  // Skills
  'skills.frontend.title': {
    pt: 'Desenvolvimento Frontend',
    en: 'Frontend Development'
  },
  'skills.frontend.description': {
    pt: 'Desenvolvo aplicações web interativas e responsivas utilizando React, TypeScript, Next.js e Tailwind CSS.',
    en: 'I develop interactive and responsive web applications using React, TypeScript, Next.js and Tailwind CSS.'
  },
  'skills.backend.title': {
    pt: 'Desenvolvimento Backend',
    en: 'Backend Development'
  },
  'skills.backend.description': {
    pt: 'Trabalho com a construção de APIs robustas e gerenciamento de bancos de dados utilizando Node.js, Python, PostgreSQL e MongoDB.',
    en: 'I work with building robust APIs and database management using Node.js, Python, PostgreSQL and MongoDB.'
  },
  'skills.figma.title': {
    pt: 'Designs no Figma',
    en: 'Figma Designs'
  },
  'skills.figma.description': {
    pt: 'Crio protótipos, designs de UI/UX e versões mobile utilizando Figma.',
    en: 'I create prototypes, UI/UX designs and mobile versions using Figma.'
  },
  'skills.ai.title': {
    pt: 'Desenvolvimento de IA',
    en: 'AI Development'
  },
  'skills.ai.description': {
    pt: 'Desenvolvo soluções de assistentes inteligentes com IA e APIs da OpenAI e Google Gemini em aplicações web.',
    en: 'I develop intelligent assistant solutions with AI and OpenAI and Google Gemini APIs in web applications.'
  },

  // Projects Section
  'projects.title': {
    pt: 'Projetos em',
    en: 'Featured'
  },
  'projects.titleHighlight': {
    pt: 'Destaque',
    en: 'Projects'
  },
  'projects.subtitle': {
    pt: 'Aqui estão alguns dos meus projetos recentes que mostram minhas habilidades e experiência em desenvolvimento web.',
    en: 'Here are some of my recent projects that showcase my skills and experience in web development.'
  },
  'projects.featured': {
    pt: 'Em Destaque',
    en: 'Featured'
  },
  'projects.viewSource': {
    pt: 'Ver Código Fonte',
    en: 'View Source Code'
  },
  'projects.viewAllGithub': {
    pt: 'Ver Todos os Projetos no GitHub',
    en: 'View All Projects on GitHub'
  },
  'projects.githubRepo': {
    pt: 'Repositório GitHub',
    en: 'GitHub Repository'
  },
  'projects.technologies': {
    pt: 'Tecnologias utilizadas',
    en: 'Stack Used'
  },
  'projects.liveDemo': {
    pt: 'Ver Demo',
    en: 'View Demo'
  },
  'projects.inDevelopment': {
    pt: 'Em Desenvolvimento',
    en: 'In Development'
  },
  'projects.paidSource': {
    pt: 'Código Pago',
    en: 'Paid Source'
  },
  'projects.purchaseSource': {
    pt: 'Comprar Código Fonte',
    en: 'Purchase Source Code'
  },
  'projects.projectStatus': {
    pt: 'Status do Projeto',
    en: 'Project Status'
  },
  'projects.completed': {
    pt: 'Concluído',
    en: 'Completed'
  },
  'projects.category': {
    pt: 'Categoria',
    en: 'Category'
  },
  'projects.fullStack': {
    pt: 'Full Stack',
    en: 'Full Stack'
  },
  'projects.frontend': {
    pt: 'Frontend',
    en: 'Frontend'
  },
  'projects.backend': {
    pt: 'Backend',
    en: 'Backend'
  },
  'projects.aiMl': {
    pt: 'IA & ML',
    en: 'AI & ML'
  },
  'projects.educational': {
    pt: 'Educacional',
    en: 'Educational'
  },

  // Figma Section
  'figma.title': {
    pt: 'Designs no',
    en: 'Figma'
  },
  'figma.titleHighlight': {
    pt: 'Figma',
    en: 'Designs'
  },
  'figma.subtitle': {
    pt: 'Explore meus projetos de design criados no Figma. Cada design representa uma solução criativa para problemas reais de UX/UI.',
    en: 'Explore my design projects created in Figma. Each design represents a creative solution to real UX/UI problems.'
  },
  'figma.featured': {
    pt: 'Em Destaque',
    en: 'Featured'
  },
  'figma.views': {
    pt: 'visualizações',
    en: 'views'
  },
  'figma.likes': {
    pt: 'curtidas',
    en: 'likes'
  },
  'figma.viewInFigma': {
    pt: 'Ver no Figma',
    en: 'View in Figma'
  },
  'figma.viewProfile': {
    pt: 'Ver Perfil no Figma',
    en: 'View Figma Profile'
  },

  // Experience Section
  'experience.title': {
    pt: 'Experiência',
    en: 'Professional'
  },
  'experience.titleHighlight': {
    pt: 'Profissional',
    en: 'Experience'
  },
  'experience.subtitle': {
    pt: 'Minha jornada como desenvolvedor, do trabalho freelancer à liderança de equipes em empresas inovadoras.',
    en: 'My journey as a developer, from freelance work to leading teams in innovative companies.'
  },
  'experience.achievements': {
    pt: 'Principais Conquistas:',
    en: 'Key Achievements:'
  },
  'experience.technologies': {
    pt: 'Tecnologias Utilizadas:',
    en: 'Technologies Used:'
  },
  'experience.workTogether': {
    pt: 'Interessado em Trabalhar Juntos?',
    en: 'Interested in Working Together?'
  },
  'experience.workTogetherDesc': {
    pt: 'Estou sempre aberto a discutir novas oportunidades e projetos empolgantes.',
    en: 'I am always open to discussing new opportunities and exciting projects.'
  },
  'experience.letsTalk': {
    pt: 'Vamos Conversar',
    en: 'Let\'s Talk'
  },

  // Contact Section
  'contact.title': {
    pt: 'Entre em',
    en: 'Get in'
  },
  'contact.titleHighlight': {
    pt: 'Contato',
    en: 'Touch'
  },
  'contact.subtitle': {
    pt: 'Estou sempre aberto a discutir novas oportunidades e projetos interessantes. Vamos nos conectar!',
    en: 'I am always open to discussing new opportunities and interesting projects. Let\'s connect!'
  },
  'contact.sendMessage': {
    pt: 'Enviar uma Mensagem',
    en: 'Send a Message'
  },
  'contact.name': {
    pt: 'Nome',
    en: 'Name'
  },
  'contact.namePlaceholder': {
    pt: 'Seu nome',
    en: 'Your name'
  },
  'contact.email': {
    pt: 'Email',
    en: 'Email'
  },
  'contact.emailPlaceholder': {
    pt: 'seu.email@exemplo.com',
    en: 'your.email@example.com'
  },
  'contact.subject': {
    pt: 'Assunto',
    en: 'Subject'
  },
  'contact.subjectPlaceholder': {
    pt: 'Sobre o que é?',
    en: 'What is it about?'
  },
  'contact.message': {
    pt: 'Mensagem',
    en: 'Message'
  },
  'contact.messagePlaceholder': {
    pt: 'Fale-me sobre sua mensagem...',
    en: 'Tell me about your message...'
  },
  'contact.sending': {
    pt: 'Enviando...',
    en: 'Sending...'
  },
  'contact.sendMessageBtn': {
    pt: 'Enviar Mensagem',
    en: 'Send Message'
  },
  'contact.successMessage': {
    pt: 'Sua mensagem foi enviada com sucesso!',
    en: 'Your message was sent successfully!'
  },
  'contact.errorMessage': {
    pt: 'Ocorreu um erro. Por favor, tente novamente.',
    en: 'An error occurred. Please try again.'
  },
  'contact.unexpectedError': {
    pt: 'Ocorreu um erro inesperado. Por favor, tente novamente mais tarde.',
    en: 'An unexpected error occurred. Please try again later.'
  },
  'contact.contactInfo': {
    pt: 'Informações de Contato',
    en: 'Contact Information'
  },
  'contact.email.title': {
    pt: 'Email',
    en: 'Email'
  },
  'contact.phone.title': {
    pt: 'Telefone',
    en: 'Phone'
  },
  'contact.github.title': {
    pt: 'GitHub',
    en: 'GitHub'
  },
  'contact.location.title': {
    pt: 'Localização',
    en: 'Location'
  },
  'contact.location.value': {
    pt: 'Piauí, Brasil',
    en: 'Piauí, Brazil'
  },
  'contact.followMe': {
    pt: 'Siga-me',
    en: 'Follow Me'
  },
  'contact.workTogether': {
    pt: 'Vamos Trabalhar Juntos',
    en: 'Let\'s Work Together'
  },
  'contact.workTogetherDesc': {
    pt: 'Estou atualmente disponível para trabalho freelancer e oportunidades de tempo integral. Se você é uma empresa procurando contratar, ou é um colega desenvolvedor querendo colaborar, adoraria ouvir de você.',
    en: 'I am currently available for freelance work and full-time opportunities. If you are a company looking to hire, or you are a fellow developer wanting to collaborate, I would love to hear from you.'
  },

  // Figma Design Cards
  'figma.design1.title': {
    pt: 'Design de App Móvel E-commerce',
    en: 'E-commerce Mobile App Design'
  },
  'figma.design1.description': {
    pt: 'Design completo de aplicativo móvel para e-commerce com foco na experiência do usuário e conversão.',
    en: 'Complete mobile app design for e-commerce focused on user experience and conversion.'
  },
  'figma.design2.title': {
    pt: 'Dashboard Analytics SaaS',
    en: 'Dashboard Analytics SaaS'
  },
  'figma.design2.description': {
    pt: 'Interface moderna para dashboard de analytics com visualizações de dados complexas e interações intuitivas.',
    en: 'Modern interface for analytics dashboard with complex data visualizations and intuitive interactions.'
  },
  'figma.design3.title': {
    pt: 'Redesign de App Bancário',
    en: 'Banking App Redesign'
  },
  'figma.design3.description': {
    pt: 'Redesign completo de aplicativo bancário focando em segurança, usabilidade e design moderno.',
    en: 'Complete banking app redesign focusing on security, usability and modern design.'
  },
  'figma.design4.title': {
    pt: 'Sistema de Design e Biblioteca de Componentes',
    en: 'Design System & Component Library'
  },
  'figma.design4.description': {
    pt: 'Sistema de design completo com biblioteca de componentes reutilizáveis para múltiplas plataformas.',
    en: 'Complete design system with reusable component library for multiple platforms.'
  },
  'figma.design5.title': {
    pt: 'Plataforma de Reserva de Viagens',
    en: 'Travel Booking Platform'
  },
  'figma.design5.description': {
    pt: 'Plataforma completa de reservas de viagem com busca avançada, filtros e processo de checkout otimizado.',
    en: 'Complete travel booking platform with advanced search, filters and optimized checkout process.'
  },
  'figma.design6.title': {
    pt: 'UI/UX de App de Delivery de Comida',
    en: 'Food Delivery App UI/UX'
  },
  'figma.design6.description': {
    pt: 'Interface intuitiva para app de delivery com foco na experiência de pedido rápido e acompanhamento em tempo real.',
    en: 'Intuitive interface for delivery app focused on fast ordering experience and real-time tracking.'
  },

  // Figma Categories
  'figma.category.mobileApp': {
    pt: 'App Mobile',
    en: 'Mobile App'
  },
  'figma.category.webApp': {
    pt: 'App Web',
    en: 'Web App'
  },
  'figma.category.designSystem': {
    pt: 'Sistema de Design',
    en: 'Design System'
  },

  // Figma Tags
  'figma.tag.stripePayment': {
    pt: 'Pagamento Stripe',
    en: 'Stripe Payment'
  },
  'figma.tag.shoppingCart': {
    pt: 'Carrinho de Compras',
    en: 'Shopping Cart'
  },
  'figma.tag.productCatalog': {
    pt: 'Catálogo de Produtos',
    en: 'Product Catalog'
  },
  'figma.tag.userReviews': {
    pt: 'Avaliações de Usuários',
    en: 'User Reviews'
  },
  'figma.tag.wishlist': {
    pt: 'Lista de Desejos',
    en: 'Wishlist'
  },
  'figma.tag.chartsGraphs': {
    pt: 'Gráficos e Tabelas',
    en: 'Charts & Graphs'
  },
  'figma.tag.realTimeData': {
    pt: 'Dados em Tempo Real',
    en: 'Real-time Data'
  },
  'figma.tag.kpiMetrics': {
    pt: 'Métricas KPI',
    en: 'KPI Metrics'
  },
  'figma.tag.dataVisualization': {
    pt: 'Visualização de Dados',
    en: 'Data Visualization'
  },
  'figma.tag.exportReports': {
    pt: 'Exportar Relatórios',
    en: 'Export Reports'
  },
  'figma.tag.biometricAuth': {
    pt: 'Autenticação Biométrica',
    en: 'Biometric Auth'
  },
  'figma.tag.moneyTransfer': {
    pt: 'Transferência de Dinheiro',
    en: 'Money Transfer'
  },
  'figma.tag.transactionHistory': {
    pt: 'Histórico de Transações',
    en: 'Transaction History'
  },
  'figma.tag.securityFeatures': {
    pt: 'Recursos de Segurança',
    en: 'Security Features'
  },
  'figma.tag.balanceOverview': {
    pt: 'Visão Geral do Saldo',
    en: 'Balance Overview'
  },
  'figma.tag.designTokens': {
    pt: 'Tokens de Design',
    en: 'Design Tokens'
  },
  'figma.tag.componentLibrary': {
    pt: 'Biblioteca de Componentes',
    en: 'Component Library'
  },
  'figma.tag.styleGuide': {
    pt: 'Guia de Estilo',
    en: 'Style Guide'
  },
  'figma.tag.uiKit': {
    pt: 'Kit de UI',
    en: 'UI Kit'
  },
  'figma.tag.documentation': {
    pt: 'Documentação',
    en: 'Documentation'
  },
  'figma.tag.flightSearch': {
    pt: 'Busca de Voos',
    en: 'Flight Search'
  },
  'figma.tag.hotelBooking': {
    pt: 'Reserva de Hotel',
    en: 'Hotel Booking'
  },
  'figma.tag.datePicker': {
    pt: 'Seletor de Data',
    en: 'Date Picker'
  },
  'figma.tag.priceComparison': {
    pt: 'Comparação de Preços',
    en: 'Price Comparison'
  },
  'figma.tag.tripPlanning': {
    pt: 'Planejamento de Viagem',
    en: 'Trip Planning'
  },
  'figma.tag.orderTracking': {
    pt: 'Rastreamento de Pedido',
    en: 'Order Tracking'
  },
  'figma.tag.restaurantMenu': {
    pt: 'Menu do Restaurante',
    en: 'Restaurant Menu'
  },
  'figma.tag.foodCategories': {
    pt: 'Categorias de Comida',
    en: 'Food Categories'
  },
  'figma.tag.deliveryTimer': {
    pt: 'Cronômetro de Entrega',
    en: 'Delivery Timer'
  },
  'figma.tag.ratingSystem': {
    pt: 'Sistema de Avaliação',
    en: 'Rating System'
  },

  // Experience Data
  'experience.company1': {
    pt: 'TechCorp Solutions',
    en: 'TechCorp Solutions'
  },
  'experience.position1': {
    pt: 'Desenvolvedor Full Stack Sênior',
    en: 'Senior Full Stack Developer'
  },
  'experience.duration1': {
    pt: '2022 - Atualmente',
    en: '2022 - Present'
  },
  'experience.location1': {
    pt: 'São Francisco, CA',
    en: 'San Francisco, CA'
  },
  'experience.description1': {
    pt: 'Liderando o desenvolvimento de aplicações web escaláveis utilizando React, Node.js e AWS. Orientando desenvolvedores juniores e arquitetando soluções de microsserviços para clientes corporativos.',
    en: 'Leading the development of scalable web applications using React, Node.js, and AWS. Mentoring junior developers and architecting microservices solutions for corporate clients.'
  },
  'experience.highlight1.1': {
    pt: 'Liderei uma equipe de 5 desenvolvedores para entregar 3 grandes projetos antes do prazo',
    en: 'Led a team of 5 developers to deliver 3 major projects ahead of schedule'
  },
  'experience.highlight1.2': {
    pt: 'Melhorei o desempenho da aplicação em 40% através de estratégias de otimização',
    en: 'Improved application performance by 40% through optimization strategies'
  },
  'experience.highlight1.3': {
    pt: 'Implementei pipelines de CI/CD, reduzindo o tempo de implantação em 60%',
    en: 'Implemented CI/CD pipelines, reducing deployment time by 60%'
  },
  'experience.highlight1.4': {
    pt: 'Arquitei microsserviços lidando com mais de 1 milhão de requisições por dia',
    en: 'Architected microservices handling over 1 million requests per day'
  },

  'experience.company2': {
    pt: 'Startup Innovate',
    en: 'Startup Innovate'
  },
  'experience.position2': {
    pt: 'Desenvolvedor Full Stack',
    en: 'Full Stack Developer'
  },
  'experience.duration2': {
    pt: '2020 - 2022',
    en: '2020 - 2022'
  },
  'experience.location2': {
    pt: 'Austin, TX',
    en: 'Austin, TX'
  },
  'experience.description2': {
    pt: 'Desenvolvi e mantive múltiplas aplicações voltadas para o cliente em um ambiente de startup acelerado. Colaborei diretamente com os clientes para entender os requisitos e entregar soluções.',
    en: 'Developed and maintained multiple client-facing applications in a fast-paced startup environment. Collaborated directly with clients to understand requirements and deliver solutions.'
  },
  'experience.highlight2.1': {
    pt: 'Construí 8 aplicações web personalizadas do zero',
    en: 'Built 8 custom web applications from scratch'
  },
  'experience.highlight2.2': {
    pt: 'Reduzi o tempo de integração de clientes em 50% através de automação',
    en: 'Reduced client onboarding time by 50% through automation'
  },
  'experience.highlight2.3': {
    pt: 'Integrei mais de 15 APIs de terceiros e sistemas de pagamento',
    en: 'Integrated over 15 third-party APIs and payment systems'
  },
  'experience.highlight2.4': {
    pt: 'Estabeleci padrões de codificação e melhores práticas para a equipe',
    en: 'Established coding standards and best practices for the team'
  },

  'experience.company3': {
    pt: 'Digital Agency Pro',
    en: 'Digital Agency Pro'
  },
  'experience.position3': {
    pt: 'Desenvolvedor Frontend',
    en: 'Frontend Developer'
  },
  'experience.duration3': {
    pt: '2019 - 2020',
    en: '2019 - 2020'
  },
  'experience.location3': {
    pt: 'Nova Iorque, NY',
    en: 'New York, NY'
  },
  'experience.description3': {
    pt: 'Especializado na criação de websites responsivos e pixel-perfect para diversos clientes em diferentes indústrias. Trabalhei em estreita colaboração com designers para dar vida a visões criativas.',
    en: 'Specialized in creating responsive and pixel-perfect websites for diverse clients across different industries. Worked closely with designers to bring creative visions to life.'
  },
  'experience.highlight3.1': {
    pt: 'Entreguei mais de 25 websites responsivos com 100% de satisfação do cliente',
    en: 'Delivered over 25 responsive websites with 100% client satisfaction'
  },
  'experience.highlight3.2': {
    pt: 'Implementei animações e interações avançadas usando GSAP',
    en: 'Implemented advanced animations and interactions using GSAP'
  },
  'experience.highlight3.3': {
    pt: 'Otimizei websites alcançando pontuações acima de 90 no Google PageSpeed',
    en: 'Optimized websites achieving scores above 90 on Google PageSpeed'
  },
  'experience.highlight3.4': {
    pt: 'Colaborei com a equipe de design para melhorar os fluxos de trabalho de UI/UX',
    en: 'Collaborated with design team to improve UI/UX workflows'
  },

  'experience.company4': {
    pt: 'FreelanceHub',
    en: 'FreelanceHub'
  },
  'experience.position4': {
    pt: 'Desenvolvedor Web',
    en: 'Web Developer'
  },
  'experience.duration4': {
    pt: '2018 - 2019',
    en: '2018 - 2019'
  },
  'experience.location4': {
    pt: 'Remoto',
    en: 'Remote'
  },
  'experience.description4': {
    pt: 'Trabalhei como desenvolvedor web freelancer, ajudando pequenas empresas a estabelecer sua presença online através de websites personalizados e soluções de e-commerce.',
    en: 'Worked as a freelance web developer, helping small businesses establish their online presence through custom websites and e-commerce solutions.'
  },
  'experience.highlight4.1': {
    pt: 'Completei mais de 30 projetos freelancer com avaliações 5 estrelas',
    en: 'Completed over 30 freelance projects with 5-star ratings'
  },
  'experience.highlight4.2': {
    pt: 'Especializado em soluções de e-commerce usando Shopify e WooCommerce',
    en: 'Specialized in e-commerce solutions using Shopify and WooCommerce'
  },
  'experience.highlight4.3': {
    pt: 'Forneci manutenção e suporte contínuos para mais de 20 websites',
    en: 'Provided ongoing maintenance and support for over 20 websites'
  },
  'experience.highlight4.4': {
    pt: 'Construí relacionamentos de longo prazo com clientes recorrentes',
    en: 'Built long-term relationships with recurring clients'
  },

  // Footer Section
  'footer.description': {
    pt: 'Desenvolvedor Web Full Stack apaixonado por criar experiências digitais excepcionais.',
    en: 'Full Stack Web Developer passionate about creating exceptional digital experiences.'
  },
  'footer.madeWith': {
    pt: 'Feito com',
    en: 'Made with'
  },
  'footer.by': {
    pt: 'por José Vitor',
    en: 'by José Vitor'
  },
  'footer.scrollToTop': {
    pt: 'Voltar ao topo',
    en: 'Scroll to top'
  },
  'footer.copyright': {
    pt: 'Todos os direitos reservados.',
    en: 'All rights reserved.'
  },
  'footer.inDevelopment': {
    pt: 'Este site está em desenvolvimento contínuo.',
    en: 'This website is under continuous development.'
  },

  // Development Alert
  'dev.alert.title': {
    pt: 'Aplicação em Desenvolvimento',
    en: 'Application in Development'
  },
  'dev.alert.description': {
    pt: 'Esta aplicação ainda está em fase de desenvolvimento. Algumas funcionalidades podem não estar funcionais ou podem apresentar comportamentos inesperados. Obrigado pela compreensão!',
    en: 'This application is still under development. Some features may not work or may exhibit unexpected behavior. Thank you for your understanding!'
  },
  'dev.alert.understood': {
    pt: 'Entendi',
    en: 'Understood'
  },

  // Payment Modal (comp-329)
  'payment.title': {
    pt: 'Confirmar e pagar',
    en: 'Confirm and pay'
  },
  'payment.description': {
    pt: 'Pague com segurança e cancele a qualquer momento.',
    en: 'Pay securely and cancel any time.'
  },
  'payment.monthly': {
    pt: 'Mensal',
    en: 'Monthly'
  },
  'payment.yearly': {
    pt: 'Acesso único',
    en: 'Single sign-on'
  },
  'payment.popular': {
    pt: 'Vitalício',
    en: 'Lifetime'
  },
  'payment.monthlyPrice': {
    pt: 'R$ 159/mês',
    en: '$32/month'
  },
  'payment.yearlyPrice': {
    pt: 'R$ 100,00',
    en: 'R$ 100,00'
  },
  'payment.nameOnCard': {
    pt: 'Nome no cartão',
    en: 'Name on card'
  },
  'payment.cardDetails': {
    pt: 'Detalhes do cartão',
    en: 'Card Details'
  },
  'payment.addCoupon': {
    pt: '+ Adicionar cupom',
    en: '+ Add coupon'
  },
  'payment.couponCode': {
    pt: 'Código do cupom',
    en: 'Coupon code'
  },
  'payment.couponPlaceholder': {
    pt: 'Digite seu código',
    en: 'Enter your code'
  },
  'payment.subscribe': {
    pt: 'Assinar',
    en: 'Subscribe'
  },
  'payment.disclaimer': {
    pt: 'Os pagamentos não são reembolsáveis. Cancele a qualquer momento.',
    en: 'Payments are non-refundable. Cancel anytime.'
  },
  'payment.checkout': {
    pt: 'Finalizar Compra',
    en: 'Checkout'
  },
  'payment.defaultProduct': {
    pt: 'Código Fonte do Projeto',
    en: 'Project Source Code'
  },

  // Trust indicator (comp-412)
  'trust.trustedBy': {
    pt: 'Confiado por',
    en: 'Trusted by'
  },
  'trust.developers': {
    pt: 'desenvolvedores',
    en: 'developers'
  }
};