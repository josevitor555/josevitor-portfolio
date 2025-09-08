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
            title: 'Painel de Gerenciamento de Tarefas',
            description: 'Painel Gerenciamento de Tarefas para empresas ou freelancers para poupar tempo. Crud básico como criar, excluir e atualizar uma tarefa.',
            image: 'https://private-user-images.githubusercontent.com/127617992/473830336-d0e5753b-3f99-41dc-9905-a3c5e0f22c9d.png?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NTcyMTYzMTUsIm5iZiI6MTc1NzIxNjAxNSwicGF0aCI6Ii8xMjc2MTc5OTIvNDczODMwMzM2LWQwZTU3NTNiLTNmOTktNDFkYy05OTA1LWEzYzVlMGYyMmM5ZC5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUwOTA3JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MDkwN1QwMzMzMzVaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT1hZWUyYTJmODlkNjllYWYxMTg5OWE1Y2MzOTQzYjAyZDA3YjhkODU1NjA3YTQwZGE4YTNjMGRjYTAwMjg2YjlkJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.T-zWjNnGtCogJrlkwJCfpevsKxuhHQ7TX5LgS-rNNVE',
            technologies: ['React', 'TypeScript', 'Node.js', 'MongoDB', 'MySQL', 'Tailwind CSS'],
            liveDemo: '#',
            github: 'https://github.com/josevitor555/black_thunder',
            featured: true
        },
        {
            id: 2,
            title: 'DegustaZap, uma aplicação de pedidos de comida',
            description: 'Projeto aidna em desenvolvimento, ele cobre uma demanda real para finalização de pedidos pelo whatsapp. Sem sistemas de pagamentos.',
            image: './public/images/degusta_zap.png',
            technologies: ['PostgreSQL', 'Django', 'MySQL', 'React', 'TypeScript', 'Python', 'JavaScript'],
            liveDemo: '#',
            github: 'https://github.com/josevitor555/DegustaZap',
            featured: true
        },
        {
            id: 3,
            title: 'Geração de Imagens com IA',
            description: 'Uma aplicação de geração de imagens com inteligência artificial. Utilizando o modelo Gemini 2.0 Flash da Google.',
            image: './public/images/generateImages.jpg',
            technologies: ['Vite', 'JavaScript', 'HTML', 'CSS', 'gemini-2.0-flash'],
            liveDemo: '#',
            github: 'https://github.com/josevitor555/generate_imagens',
            featured: false
        },
        {
            id: 4,
            title: 'Portfólio Pessoal, só que público',
            description: 'Um portfólio pessoal (que no caso é esse), público, com alguns projetos em destaque como protótipos do figma também.',
            image: './public/images/portfolio.png',
            technologies: ['React', 'Tailwind CSS', 'Shadcn', 'Radix', 'TypeScript', 'Vite'],
            liveDemo: '#',
            github: 'https://github.com/josevitor555/josevitor-portfolio?tab=readme-ov-file',
            featured: false
        },
        {
            id: 5,
            title: 'Miranda, Sua Asssistente Virtual',
            description: 'Conheeça Miranda, uam asistente virtual voltada ao ensino de programação. Uma proposta ainda em fase de desenvolvimento.',
            image: 'https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://placehold.co/600x400/1a1a1a/ef4444?text=Miranda',
            technologies: ['React', 'Gemini', 'TypeScript', 'JavaScript', 'MySQL', 'Tailwind CSS'],
            liveDemo: '#',
            github: 'https://github.com/josevitor555/TheMiranda',
            featured: false
        },
        {
            id: 6,
            title: 'Mathematicando',
            description: 'Uma aplicação voltada ao ensino da metmática em estilo gamificado, em fase de desenvolvimento. Demandada por um profesor real. A aplicação visa estimular o ensino por meio de jogos interativos.',
            image: './public/images/mathematicando.png',
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
                        href="#"
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