// Imports
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { projectsData } from '../data/projects';

// Shadcn components
import { Badge } from './ui/badge';
import PaymentModal from './ui/comp-329';
const Projects = () => {

    const { t, language } = useLanguage();

    // Projects done - using translated data from projects.ts
    const projects = projectsData;

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
                        {t('projects.title')} <span className="gradient-text">{t('projects.titleHighlight')}</span>
                    </h2>
                    <div className="w-20 h-1 bg-white rounded-full mx-auto mb-8"></div>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                        {t('projects.subtitle')}
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
                                    alt={project.title[language]}
                                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                <div className="absolute top-4 right-4 flex flex-col gap-2">
                                    {project.paidSource && (
                                        <div className="flex items-center px-4 py-1 bg-white text-black text-xs font-medium rounded-full">
                                            {t('projects.paidSource')}
                                            
                                            {project.pricing && (
                                                <div className="px-2 py-1 bg-accent-primary text-black text-xs font-medium rounded">
                                                    R$ {project.pricing.toFixed(0)}
                                                </div>
                                            )}
                                        </div>
                                    )}
                                </div>
                                {project.featured && (
                                    <div className="absolute top-4 left-4 px-2 py-1 bg-white text-gray-950 text-xs font-medium rounded">
                                        {t('projects.featured')}
                                    </div>
                                )}
                            </div>

                            <div className="p-6">
                                <h3 className="text-xl font-semibold mb-2 group-hover:text-accent-primary transition-colors">
                                    {project.title[language]}
                                </h3>
                                <p className="text-gray text-sm mb-4 line-clamp-3">
                                    {project.description[language]}
                                </p>

                                {/* Underline divider */}
                                {/* <div className="w-full h-0.5 bg-gray-400 rounded-full mb-4"></div> */}

                                <div className="flex flex-wrap gap-2 mb-6">
                                    <div className="w-full mb-2">
                                        <span className="text-sm text-light font-medium">{t('projects.technologies')}</span>
                                    </div>
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
                                    {/* View Source Button - Shows payment modal for paid projects or direct GitHub link for free projects */}
                                    {project.paidSource ? (
                                        <PaymentModal
                                            projectTitle={project.title}
                                            projectPrice={project.pricing}
                                        >
                                            <motion.button
                                                className="flex-1 px-4 py-2 bg-accent-primary hover:bg-white text-white hover:text-black text-sm font-medium rounded-full transition-colors flex items-center justify-center gap-2"
                                                whileHover={{ scale: 1.02 }}
                                                whileTap={{ scale: 0.98 }}
                                            >
                                                <ExternalLink size={14} />
                                                {t('projects.purchaseSource')}
                                            </motion.button>
                                        </PaymentModal>
                                    ) : (
                                        <motion.a
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex-1 px-4 py-2 bg-accent-primary hover:bg-white text-white hover:text-black text-sm font-medium rounded-full transition-colors flex items-center justify-center gap-2"
                                            whileHover={{ scale: 1.02 }}
                                            whileTap={{ scale: 0.98 }}
                                        >
                                            <ExternalLink size={14} />
                                            {t('projects.viewSource')}
                                        </motion.a>
                                    )}
                                    {project.liveDemo !== '#' && (
                                        <motion.a
                                            href={project.liveDemo}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="px-4 py-2 border border-accent-primary text-accent-primary hover:bg-accent-primary hover:text-white text-sm font-medium rounded-full transition-colors flex items-center justify-center gap-2"
                                            whileHover={{ scale: 1.02 }}
                                            whileTap={{ scale: 0.98 }}
                                        >
                                            {t('projects.liveDemo')}
                                        </motion.a>
                                    )}
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
                        {t('projects.viewAllGithub')}
                    </motion.a>
                </motion.div>
            </div>
        </section>
    )
}

export default Projects;