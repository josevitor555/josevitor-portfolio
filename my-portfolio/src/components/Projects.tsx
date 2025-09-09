// Imports
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

// Shadcn components
import { Badge } from './ui/badge';
const Projects = () => {

    // Projects done
    const projects = [
        {
            id: 1,
            title: 'Sistema de Gerenciamento de Tarefas Empresarial',
            description: 'Plataforma completa de gerenciamento de tarefas desenvolvida para empresas e freelancers, visando otimizar a produtividade. Inclui funcionalidades CRUD completas para criação, edição, exclusão e acompanhamento de tarefas.',
            image: 'https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://placehold.co/600x400/1a1a1a/3b82f6?text=Task+Manager',
            technologies: ['React', 'TypeScript', 'Node.js', 'MongoDB', 'MySQL', 'Tailwind CSS'],
            liveDemo: '#',
            github: 'https://github.com/josevitor555/black_thunder',
            featured: true
        },
        {
            id: 2,
            title: 'DegustaZap - Plataforma de Pedidos Gastronômicos',
            description: 'Aplicação em desenvolvimento que atende uma demanda real do mercado gastronômico, permitindo a finalização de pedidos através da integração com WhatsApp. Sistema focado na experiência do usuário sem processamento de pagamentos.',
            image: 'https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://placehold.co/600x400/1a1a1a/10b981?text=DegustaZap',
            technologies: ['PostgreSQL', 'Django', 'MySQL', 'React', 'TypeScript', 'Python', 'JavaScript'],
            liveDemo: '#',
            github: 'https://github.com/josevitor555/DegustaZap',
            featured: true
        },
        {
            id: 3,
            title: 'Gerador de Imagens com Inteligência Artificial',
            description: 'Aplicação avançada para geração de imagens utilizando inteligência artificial, implementando o modelo Gemini 2.0 Flash do Google. Demonstra a integração de tecnologias de IA em interfaces web modernas.',
            image: 'https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://placehold.co/600x400/1a1a1a/8b5cf6?text=Generate+Images',
            technologies: ['Vite', 'JavaScript', 'HTML', 'CSS', 'gemini-2.0-flash'],
            liveDemo: '#',
            github: 'https://github.com/josevitor555/generate_imagens',
            featured: false
        },
        {
            id: 4,
            title: 'Portfólio Profissional Interativo',
            description: 'Website portfólio pessoal desenvolvido com foco na apresentação profissional de projetos e habilidades. Inclui seções interativas, protótipos do Figma e demonstração de competências técnicas em desenvolvimento frontend.',
            image: 'https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://placehold.co/600x400/1a1a1a/f59e0b?text=Portfolio',
            technologies: ['React', 'Tailwind CSS', 'Shadcn', 'Radix', 'TypeScript', 'Vite'],
            liveDemo: '#',
            github: 'https://github.com/josevitor555/josevitor-portfolio?tab=readme-ov-file',
            featured: false
        },
        {
            id: 5,
            title: 'Miranda - Assistente Virtual Educacional',
            description: 'Sistema de assistente virtual especializado no ensino de programação, desenvolvido para apoiar estudantes em seu processo de aprendizagem. Projeto em fase de desenvolvimento com foco em metodologias pedagógicas inovadoras.',
            image: 'https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://placehold.co/600x400/1a1a1a/a855f7?text=Miranda',
            technologies: ['React', 'Gemini', 'TypeScript', 'JavaScript', 'MySQL', 'Tailwind CSS'],
            liveDemo: '#',
            github: 'https://github.com/josevitor555/TheMiranda',
            featured: false
        },
        {
            id: 6,
            title: 'Mathematicando - Plataforma Educacional Gamificada',
            description: 'Aplicação educacional voltada ao ensino de matemática através de metodologias gamificadas. Desenvolvida em resposta à demanda de um educador, visa estimular o aprendizado por meio de jogos interativos e engajamento digital.',
            image: 'https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://placehold.co/600x400/1a1a1a/06b6d4?text=Mathematicando',
            technologies: ['React', 'TypeScript', 'Gemini', 'Shacn'],
            liveDemo: '#',
            github: 'https://github.com/josevitor555/mathematicando',
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
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-2 bg-accent-primary hover:bg-white text-white hover:text-black rounded-lg transition-colors"
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.9 }}
                                        aria-label="Repositório GitHub"
                                    >
                                        <Github size={16} />
                                    </motion.a>
                                </div>
                                {project.featured && (
                                    <div className="absolute top-4 left-4 px-2 py-1 bg-white text-gray-950 text-xs font-medium rounded">
                                        Em Destaque
                                    </div>
                                )}
                            </div>

                            <div className="p-6">
                                <h3 className="text-xl font-semibold mb-2 group-hover:text-accent-primary transition-colors">
                                    {project.title}
                                </h3>
                                <p className="text-gray-200 text-sm mb-4 line-clamp-3">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2 mb-6">
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
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
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
                        href="https://github.com/josevitor555"
                        target="_blank"
                        rel="noopener noreferrer"
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