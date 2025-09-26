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
    pt: 'Você está em uma conta free. Seja premium!',
    en: "You're on a free account. Go premium!"
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
    pt: 'Foto de Perfil',
    en: 'Profile photo'
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
    pt: 'Sistemas Embarcados',
    en: 'Embedded Systems'
  },
  'experience.position1': {
    pt: 'Capacitação em Sistemas Embarcados',
    en: 'Embedded Systems Training'
  },
  'experience.duration1': {
    pt: '2024 - 2024',
    en: '2024 - 2024'
  },
  'experience.location1': {
    pt: 'Piauí, Brasil',
    en: 'Piauí, Brazil'
  },
  'experience.description1': {
    pt: 'Capacitação profissional abrangente em sistemas embarcados com foco em microcontroladores, IoT e desenvolvimento de software para hardware. Curso estruturado em unidades progressivas cobrindo desde fundamentos até aplicações práticas com Raspberry Pi Pico W.',
    en: 'Comprehensive professional training in embedded systems focused on microcontrollers, IoT and software development for hardware. Course structured in progressive units covering from fundamentals to practical applications with Raspberry Pi Pico W.'
  },
  'experience.highlight1.1': {
    pt: 'Unidade 1: Tipos, características e arquitetura de sistemas embarcados',
    en: 'Unit 1: Types, characteristics and architecture of embedded systems'
  },
  'experience.highlight1.2': {
    pt: 'Unidade 3: Linguagem C, VS Code, depuração e configuração para Raspberry Pi Pico W',
    en: 'Unit 3: C Language, VS Code, debugging and configuration for Raspberry Pi Pico W'
  },
  'experience.highlight1.3': {
    pt: 'Unidade 4: GPIO, interrupções, temporizadores, PWM e conversor analógico-digital',
    en: 'Unit 4: GPIO, interrupts, timers, PWM and analog-to-digital converter'
  },
  'experience.highlight1.4': {
    pt: 'Unidades 5-6: IoT - Visão geral, arquitetura e integração com sistemas embarcados',
    en: 'Units 5-6: IoT - Overview, architecture and integration with embedded systems'
  },

  'experience.company2': {
    pt: 'Instituto Federal do Piauí (IFPI)',
    en: 'Federal Institute of Piauí (IFPI)'
  },
  'experience.position2': {
    pt: 'Estudante - Análise e Desenvolvimento de Sistemas',
    en: 'Student - Systems Analysis and Development'
  },
  'experience.duration2': {
    pt: '2023 - 2026 (Previsão)',
    en: '2023 - 2026 (Expected)'
  },
  'experience.location2': {
    pt: 'Piauí, Brasil',
    en: 'Piauí, Brazil'
  },
  'experience.description2': {
    pt: 'Cursando Tecnólogo em Análise e Desenvolvimento de Sistemas. Participação ativa em projetos acadêmicos com foco em desenvolvimento de software e tecnologias emergentes.',
    en: 'Studying Technology in Systems Analysis and Development. Active participation in academic projects focused on software development and emerging technologies.'
  },
  'experience.highlight2.1': {
    pt: 'COINTER PDV 2024 - Monitor de Robótica no evento em Teresina Central',
    en: 'COINTER PDV 2024 - Robotics Monitor at event in Teresina Central'
  },
  'experience.highlight2.2': {
    pt: 'Certificação em Capacitação Profissional em Sistemas Embarcados (FIC)',
    en: 'Professional Certification in Embedded Systems (FIC)'
  },
  'experience.highlight2.3': {
    pt: 'Especialização em Raspberry Pi Pico W e microcontroladores RP2040',
    en: 'Specialization in Raspberry Pi Pico W and RP2040 microcontrollers'
  },
  'experience.highlight2.4': {
    pt: 'Desenvolvimento IoT: Arquitetura, GPIO, PWM, ADC e interfaces de comunicação',
    en: 'IoT Development: Architecture, GPIO, PWM, ADC and communication interfaces'
  },

  'experience.company3': {
    pt: 'Instituto Federal do Piauí (IFPI)',
    en: 'Federal Institute of Piauí (IFPI)'
  },
  'experience.position3': {
    pt: 'Técnico em Informática',
    en: 'Computer Technician'
  },
  'experience.duration3': {
    pt: '2019 - 2023',
    en: '2019 - 2023'
  },
  'experience.location3': {
    pt: 'Piauí, Brasil',
    en: 'Piauí, Brazil'
  },
  'experience.description3': {
    pt: 'Formação técnica integrada ao ensino médio em Informática. Base sólida em programação, redes, banco de dados e desenvolvimento web. Conclusão após o período da pandemia.',
    en: 'Technical training integrated with high school in Computer Science. Strong foundation in programming, networks, databases and web development. Completed after the pandemic period.'
  },
  'experience.highlight3.1': {
    pt: 'Formação completa em fundamentos de programação e desenvolvimento',
    en: 'Complete training in programming fundamentals and development'
  },
  'experience.highlight3.2': {
    pt: 'Conhecimento em redes de computadores e sistemas operacionais',
    en: 'Knowledge in computer networks and operating systems'
  },
  'experience.highlight3.3': {
    pt: 'Experiência prática em projetos de desenvolvimento web',
    en: 'Practical experience in web development projects'
  },
  'experience.highlight3.4': {
    pt: 'Base técnica para evolução para desenvolvimento de software',
    en: 'Technical foundation for evolution to software development'
  },

  'experience.company4': {
    pt: 'Certificações Profissionais',
    en: 'Professional Certifications'
  },
  'experience.position4': {
    pt: 'Capacitação em Empreendedorismo e Inovação',
    en: 'Training in Entrepreneurship and Innovation'
  },
  'experience.duration4': {
    pt: '2020 - 2024',
    en: '2020 - 2024'
  },
  'experience.location4': {
    pt: 'IF MaisEmpreendedor',
    en: 'IF MaisEmpreendedor'
  },
  'experience.description4': {
    pt: 'Participação em programa de capacitação empreendedora focado em micro e pequenos negócios, desenvolvendo habilidades em gestão, marketing digital e consultoria empresarial.',
    en: 'Participation in entrepreneurial training program focused on micro and small businesses, developing skills in management, digital marketing and business consulting.'
  },
  'experience.highlight4.1': {
    pt: 'FIC 01 - Consultoria em Micro e Pequenos Negócios: Estratégias de consultoria empresarial',
    en: 'FIC 01 - Consulting in Micro and Small Businesses: Business consulting strategies'
  },
  'experience.highlight4.2': {
    pt: 'FIC 02 - Impulsionando Micro e Pequenos Negócios: Técnicas de crescimento empresarial',
    en: 'FIC 02 - Boosting Micro and Small Businesses: Business growth techniques'
  },
  'experience.highlight4.3': {
    pt: 'FIC 03 - Marketing Digital para Microempreendedor: Estratégias digitais e redes sociais',
    en: 'FIC 03 - Digital Marketing for Microentrepreneurs: Digital strategies and social media'
  },
  'experience.highlight4.4': {
    pt: 'FIC 04 - Gestão de Materiais e Pessoas: Administração de recursos e equipes',
    en: 'FIC 04 - Materials and People Management: Resource and team administration'
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
    pt: 'Nova funcionalidade!',
    en: 'New functionality!'
  },
  'dev.alert.description': {
    pt: 'Experimente a nova funcionalidade! Crie uma conta gratuita com sessão válida por 1 hora. Após esse período, será necessário realizar login novamente ou, se preferir, excluir sua conta. O site ainda está em desenvolvimento.',
    en: 'Try the new feature! Create a free account with a 1-hour session. After that, you will need to log in again or, if you prefer, delete your account. The site is still under development.'
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
  },

  // Experience Technology Tags
  'experience.tech.linguagemC': {
    pt: 'Linguagem C',
    en: 'C Language'
  },
  'experience.tech.raspberryPiPicoW': {
    pt: 'Raspberry Pi Pico W',
    en: 'Raspberry Pi Pico W'
  },
  'experience.tech.microcontroladoresRP2040': {
    pt: 'Microcontroladores RP2040',
    en: 'RP2040 Microcontrollers'
  },
  'experience.tech.gpioInterrupcoes': {
    pt: 'GPIO & Interrupções',
    en: 'GPIO & Interrupts'
  },
  'experience.tech.pwmAdc': {
    pt: 'PWM & ADC',
    en: 'PWM & ADC'
  },
  'experience.tech.iotArchitecture': {
    pt: 'IoT Architecture',
    en: 'IoT Architecture'
  },
  'experience.tech.sistemasEmbarcados': {
    pt: 'Sistemas Embarcados',
    en: 'Embedded Systems'
  },
  'experience.tech.robotica': {
    pt: 'Robótica',
    en: 'Robotics'
  },
  'experience.tech.projetosAcademicos': {
    pt: 'Projetos Acadêmicos',
    en: 'Academic Projects'
  },
  'experience.tech.pesquisaDesenvolvimento': {
    pt: 'Pesquisa e Desenvolvimento',
    en: 'Research & Development'
  },
  'experience.tech.tecnologiasEmergentes': {
    pt: 'Tecnologias Emergentes',
    en: 'Emerging Technologies'
  },
  'experience.tech.fundamentosTI': {
    pt: 'Fundamentos de TI',
    en: 'IT Fundamentals'
  },
  'experience.tech.redesComputadores': {
    pt: 'Redes de Computadores',
    en: 'Computer Networks'
  },
  'experience.tech.bancoDados': {
    pt: 'Banco de Dados',
    en: 'Database Systems'
  },
  'experience.tech.sistemasOperacionais': {
    pt: 'Sistemas Operacionais',
    en: 'Operating Systems'
  },
  'experience.tech.desenvolvimentoWeb': {
    pt: 'Desenvolvimento Web',
    en: 'Web Development'
  },
  'experience.tech.infraestrutura': {
    pt: 'Infraestrutura',
    en: 'Infrastructure'
  },
  'experience.tech.gestaoEmpresarial': {
    pt: 'Gestão Empresarial',
    en: 'Business Management'
  },
  'experience.tech.marketingDigital': {
    pt: 'Marketing Digital',
    en: 'Digital Marketing'
  },
  'experience.tech.consultoriaNegocios': {
    pt: 'Consultoria de Negócios',
    en: 'Business Consulting'
  },
  'experience.tech.empreendedorismo': {
    pt: 'Empreendedorismo',
    en: 'Entrepreneurship'
  },
  'experience.tech.gestaoPessoas': {
    pt: 'Gestão de Pessoas',
    en: 'People Management'
  },
  'experience.tech.inovacao': {
    pt: 'Inovação',
    en: 'Innovation'
  },
  'experience.company5': {
    pt: 'Conhecimentos Adicionais',
    en: 'Additional Knowledge'
  },
  'experience.position5': {
    pt: 'Inteligência Artificial & Machine Learning',
    en: 'Artificial Intelligence & Machine Learning'
  },
  'experience.duration5': {
    pt: '2025 - Sem data prevista',
    en: '2025 - Ongoing'
  },
  'experience.location5': {
    pt: 'Experiência Pessoal',
    en: 'Personal Experience'
  },
  'experience.description5': {
    pt: 'Aprofundamento em conceitos e ferramentas de IA, incluindo redes neurais, processamento de linguagem natural e visão computacional, através de projetos práticos e estudos autodidatas.',
    en: 'In-depth study of AI concepts and tools, including neural networks, natural language processing, and computer vision, through practical projects and self-study.'
  },
  'experience.highlight5.1': {
    pt: 'Estudo e aplicação de modelos de Deep Learning com PyTorch e TensorFlow',
    en: 'Study and application of Deep Learning models with PyTorch and TensorFlow'
  },
  'experience.highlight5.2': {
    pt: 'Desenvolvimento de soluções de NLP para análise de texto e geração de linguagem',
    en: 'Development of NLP solutions for text analysis and language generation'
  },
  'experience.highlight5.3': {
    pt: 'Exploração de Visão Computacional para reconhecimento de imagem e detecção de objetos',
    en: 'Exploration of Computer Vision for image recognition and object detection'
  },
  'experience.highlight5.4': {
    pt: 'Implementação de algoritmos de Machine Learning com Scikit-Learn para análise preditiva',
    en: 'Implementation of Machine Learning algorithms with Scikit-Learn for predictive analysis'
  },
  'experience.tech.pytorch': {
    pt: 'PyTorch',
    en: 'PyTorch'
  },
  'experience.tech.tensorflow': {
    pt: 'TensorFlow',
    en: 'TensorFlow'
  },
  'experience.tech.scikitLearn': {
    pt: 'Scikit-Learn',
    en: 'Scikit-Learn'
  },
  'experience.tech.llms': {
    pt: 'LLMs',
    en: 'LLMs'
  },
  'experience.tech.nlp': {
    pt: 'NLP',
    en: 'NLP'
  },
  'experience.tech.deepLearning': {
    pt: 'Deep Learning',
    en: 'Deep Learning'
  },
  'experience.tech.machineLearning': {
    pt: 'Machine Learning',
    en: 'Machine Learning'
  },
  'experience.tech.computerVision': {
    pt: 'Computer Vision',
    en: 'Computer Vision'
  },
  'experience.company6': {
    pt: 'Certificado de Participação',
    en: 'Certificate of Participation'
  },
  'experience.position6': {
    pt: 'Jornada Full Stack da Hashtag',
    en: 'Hashtag Full Stack Journey'
  },
  'experience.duration6': {
    pt: '2024',
    en: '2024'
  },
  'experience.location6': {
    pt: 'Online',
    en: 'Online'
  },
  'experience.description6': {
    pt: 'A Hashtag Treinamentos confere o presente certificado a José Vitor pela conclusão do evento Jornada Full Stack com duração de 8 horas, concluído no dia 13/02/25.',
    en: 'Hashtag Treinamentos confers this certificate to José Vitor for completing the Full Stack Journey event, with a duration of 8 hours, completed on 02/13/25.'
  },
  'experience.highlight6.1': {
    pt: 'Clonagem do layout do Spotify serviu de inspiração para o projeto VibeFy, demonstrando habilidades de desenvolvimento frontend.',
    en: 'Cloned Spotify layout served as inspiration for the VibeFy project, demonstrating frontend development skills.'
  },
  'experience.highlight6.2': {
    pt: 'Utilização de React e TypeScript para construir interfaces de usuário dinâmicas.',
    en: 'Used React and TypeScript to build dynamic user interfaces.'
  },
  'experience.highlight6.3': {
    pt: 'Implementação de banco de dados MongoDB para gerenciar músicas, playlists e artistas.',
    en: 'Implemented MongoDB database to manage songs, playlists, and artists.'
  },
  'experience.tech.react': {
    pt: 'React',
    en: 'React'
  },
  'experience.tech.typescript': {
    pt: 'TypeScript',
    en: 'TypeScript'
  },
  'experience.tech.css': {
    pt: 'CSS',
    en: 'CSS'
  },
  'experience.tech.mongodb': {
    pt: 'MongoDB',
    en: 'MongoDB'
  },
  'experience.tech.frontendDevelopment': {
    pt: 'Desenvolvimento Frontend',
    en: 'Frontend Development'
  },
  'experience.tech.databaseManagement': {
    pt: 'Gerenciamento de Banco de Dados',
    en: 'Database Management'
  }
};