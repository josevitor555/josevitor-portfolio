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
            title: 'E-Commerce Dashboard',
            description: 'A comprehensive admin dashboard for managing e-commerce operations with real-time analytics, inventory management, and order processing.',
            image: 'https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://placehold.co/600x400/1a1a1a/3b82f6?text=E-Commerce+Dashboard',
            technologies: ['React', 'TypeScript', 'Node.js', 'MongoDB', 'Tailwind CSS'],
            liveDemo: '#',
            github: '#',
            featured: true
        },
        {
            id: 2,
            title: 'Task Management App',
            description: 'A collaborative task management application with real-time updates, team collaboration features, and advanced project tracking.',
            image: 'https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://placehold.co/600x400/1a1a1a/8b5cf6?text=Task+Manager',
            technologies: ['Next.js', 'PostgreSQL', 'Prisma', 'Socket.io', 'Chakra UI'],
            liveDemo: '#',
            github: '#',
            featured: true
        },
        {
            id: 3,
            title: 'Weather App',
            description: 'A beautiful weather application with location-based forecasts, interactive maps, and personalized weather alerts.',
            image: 'https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://placehold.co/600x400/1a1a1a/10b981?text=Weather+App',
            technologies: ['React', 'OpenWeather API', 'Mapbox', 'Chart.js'],
            liveDemo: '#',
            github: '#',
            featured: false
        },
        {
            id: 4,
            title: 'Portfolio Website',
            description: 'A modern, responsive portfolio website built with React and Framer Motion for smooth animations.',
            image: 'https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://placehold.co/600x400/1a1a1a/f59e0b?text=Portfolio+Site',
            technologies: ['React', 'Framer Motion', 'Tailwind CSS', 'Vite'],
            liveDemo: '#',
            github: '#',
            featured: false
        },
        {
            id: 5,
            title: 'Social Media App',
            description: 'A full-stack social media platform with real-time messaging, post sharing, and user authentication.',
            image: 'https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://placehold.co/600x400/1a1a1a/ef4444?text=Social+App',
            technologies: ['React Native', 'Firebase', 'Redux', 'Expo'],
            liveDemo: '#',
            github: '#',
            featured: false
        },
        {
            id: 6,
            title: 'AI Chat Interface',
            description: 'An intelligent chat interface powered by AI with natural language processing and contextual responses.',
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
                        Featured <span className="gradient-text">Projects</span>
                    </h2>
                    <div className="w-20 h-1 bg-white rounded-full mx-auto mb-8"></div>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                        Here are some of my recent projects that showcase my skills and experience in web development.
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
                                        href={project.liveDemo}
                                        className="p-2 bg-accent-primary hover:bg-white text-white hover:text-black rounded-lg transition-colors"
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.9 }}
                                        aria-label="Live Demo"
                                    >
                                        <Eye size={16} />
                                    </motion.a>
                                    <motion.a
                                        href={project.github}
                                        className="p-2 bg-gray-800 hover:bg-gray-700 text-white rounded-lg transition-colors"
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.9 }}
                                        aria-label="GitHub Repository"
                                    >
                                        <Github size={16} />
                                    </motion.a>
                                </div>
                                {project.featured && (
                                    <div className="absolute top-4 left-4 px-2 py-1 bg-accent-primary text-white text-xs font-medium rounded">
                                        Featured
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
                                        Live Demo
                                    </motion.a>
                                    <motion.a
                                        href={project.github}
                                        className="px-4 py-2 border border-gray-600 hover:bg-gray-700 text-gray-300 hover:text-white text-sm font-medium rounded-lg transition-colors flex items-center justify-center"
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                    >
                                        <Github size={14} />
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
                        View All Projects on GitHub
                    </motion.a>
                </motion.div>
            </div>
        </section>
    )
}

export default Projects;