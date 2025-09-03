// Imports
import { motion } from 'framer-motion';
import { ExternalLink, Github, Eye } from 'lucide-react';

// Shadcn components
import { Badge } from './ui/badge';
const Projects = () => {

    // Projects done
    const projects = [
        {
            id: 1,
            title: 'Painel de E-Commerce',
            description: 'Um painel administrativo abrangente para gerenciar operações de e-commerce com análises em tempo real, gerenciamento de estoque e processamento de pedidos.',
            image: 'https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://placehold.co/600x400/1a1a1a/3b82f6?text=E-Commerce+Dashboard',
            technologies: ['React', 'TypeScript', 'Node.js', 'MongoDB', 'Tailwind CSS'],
            liveDemo: '#',
            github: '#',
            featured: true
        },
        {
            id: 2,
            title: 'Aplicativo de Gerenciamento de Tarefas',
            description: 'Um aplicativo colaborativo de gerenciamento de tarefas com atualizações em tempo real, recursos de colaboração em equipe e acompanhamento avançado de projetos.',
            image: 'https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://placehold.co/600x400/1a1a1a/8b5cf6?text=Task+Manager',
            technologies: ['Next.js', 'PostgreSQL', 'Prisma', 'Socket.io', 'Chakra UI'],
            liveDemo: '#',
            github: '#',
            featured: true
        },
        {
            id: 3,
            title: 'Aplicativo de Clima',
            description: 'Um belo aplicativo de clima com previsões baseadas em localização, mapas interativos e alertas meteorológicos personalizados.',
            image: 'https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://placehold.co/600x400/1a1a1a/10b981?text=Weather+App',
            technologies: ['React', 'OpenWeather API', 'Mapbox', 'Chart.js'],
            liveDemo: '#',
            github: '#',
            featured: false
        },
        {
            id: 4,
            title: 'Site de Portfólio',
            description: 'Um site de portfólio moderno e responsivo, construído com React e Framer Motion para animações suaves.',
            image: 'https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://placehold.co/600x400/1a1a1a/f59e0b?text=Portfolio+Site',
            technologies: ['React', 'Framer Motion', 'Tailwind CSS', 'Vite'],
            liveDemo: '#',
            github: '#',
            featured: false
        },
        {
            id: 5,
            title: 'Aplicativo de Mídia Social',
            description: 'Uma plataforma de mídia social full-stack com mensagens em tempo real, compartilhamento de posts e autenticação de usuário.',
            image: 'https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://placehold.co/600x400/1a1a1a/ef4444?text=Social+App',
            technologies: ['React Native', 'Firebase', 'Redux', 'Expo'],
            liveDemo: '#',
            github: '#',
            featured: false
        },
        {
            id: 6,
            title: 'Interface de Chat com IA',
            description: 'Uma interface de chat inteligente alimentada por IA com processamento de linguagem natural e respostas contextuais.',
            image: 'https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://placehold.co/600x400/1a1a1a/a855f7?text=AI+Chat',
            technologies: ['Python', 'FastAPI', 'OpenAI API', 'React'],
            liveDemo: '#',
            github: '#',
            featured: false
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0 }
    }

    return (
        <section id="projects" className='relative py-20 bg-dark-100'>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                {/* Title and subtitle */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >

                    <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                        Projetos em <span className="gradient-text">Destaque</span>
                    </h2>
                    <div className="w-20 h-1 bg-white rounded-full mx-auto mb-8"></div>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                        Aqui estão alguns dos meus projetos recentes que mostram minhas habilidades e experiência em desenvolvimento web.
                    </p>

                </motion.div>

                {/* Projects Cards */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                >

                    {projects.map((project) => (
                        <motion.div
                            key={project.id}
                            variants={itemVariants}
                            className="group glass-effect rounded-xl overflow-hidden border border-white/20 hover:bg-white/10 transition-all duration-300"
                            whileHover={{ y: -5 }}
                        >
                            <div className="relative overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <motion.a
                                        href={project.github}
                                        className="p-2 bg-accent-primary hover:bg-white text-white hover:text-black rounded-lg transition-colors"
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.9 }}
                                        aria-label="Repositório GitHub"
                                    >
                                        <Github size={16} />
                                    </motion.a>
                                </div>
                                {project.featured && (
                                    <div className="absolute top-4 left-4 px-2 py-1 bg-accent-primary text-white text-xs font-medium rounded">
                                        Em Destaque
                                    </div>
                                )}
                            </div>
                            
                            <div className="p-6">
                                <h3 className="text-xl font-semibold mb-2 group-hover:text-accent-primary transition-colors">
                                    {project.title}
                                </h3>
                                <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.technologies.map((tech, index) => (
                                        <Badge
                                            key={index}
                                            variant="default"
                                        >
                                            {tech}
                                        </Badge>
                                    ))}
                                </div>

                                <div className="flex gap-2">
                                    <motion.a
                                        href={project.liveDemo}
                                        className="flex-1 px-4 py-2 bg-accent-primary hover:bg-white text-white hover:text-black text-sm font-medium rounded-lg transition-colors flex items-center justify-center gap-2"
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                    >
                                        <ExternalLink size={14} />
                                        Ver Código Fonte
                                    </motion.a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="text-center mt-12"
                >
                    <motion.a
                        href="#"
                        className="inline-flex items-center gap-2 px-6 py-3 border border-accent-primary text-accent-primary hover:bg-accent-primary hover:text-white font-medium rounded-lg transition-all duration-200"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <Github size={20} />
                        Ver Todos os Projetos no GitHub
                    </motion.a>
                </motion.div>
            </div>
        </section>
    )
}

export default Projects;