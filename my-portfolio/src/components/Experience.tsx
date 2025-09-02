import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Briefcase, Calendar, MapPin } from 'lucide-react';
import { Badge } from './ui/badge';

const Experience = () => {

    // Open Accordion state
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const experiences = [
        {
            id: 1,
            company: 'TechCorp Solutions',
            position: 'Senior Full Stack Developer',
            duration: '2022 - Present',
            location: 'San Francisco, CA',
            description: 'Leading development of scalable web applications using React, Node.js, and AWS. Mentoring junior developers and architecting microservices solutions for enterprise clients.',
            highlights: [
                'Led a team of 5 developers to deliver 3 major projects ahead of schedule',
                'Improved application performance by 40% through optimization strategies',
                'Implemented CI/CD pipelines reducing deployment time by 60%',
                'Architected microservices handling 1M+ requests per day'
            ],
            technologies: ['React', 'Node.js', 'AWS', 'TypeScript', 'Docker', 'PostgreSQL']
        },
        {
            id: 2,
            company: 'Startup Innovate',
            position: 'Full Stack Developer',
            duration: '2020 - 2022',
            location: 'Austin, TX',
            description: 'Developed and maintained multiple client-facing applications in a fast-paced startup environment. Collaborated directly with clients to understand requirements and deliver solutions.',
            highlights: [
                'Built 8 custom web applications from scratch',
                'Reduced client onboarding time by 50% through automation',
                'Integrated 15+ third-party APIs and payment systems',
                'Established coding standards and best practices for the team'
            ],
            technologies: ['Vue.js', 'Python', 'Django', 'MongoDB', 'Redis', 'Stripe API']
        },
        {
            id: 3,
            company: 'Digital Agency Pro',
            position: 'Frontend Developer',
            duration: '2019 - 2020',
            location: 'New York, NY',
            description: 'Specialized in creating responsive, pixel-perfect websites for various clients across different industries. Worked closely with designers to bring creative visions to life.',
            highlights: [
                'Delivered 25+ responsive websites with 100% client satisfaction',
                'Implemented advanced animations and interactions using GSAP',
                'Optimized websites achieving 90+ Google PageSpeed scores',
                'Collaborated with design team to improve UI/UX workflows'
            ],
            technologies: ['JavaScript', 'SCSS', 'GSAP', 'WordPress', 'jQuery', 'Bootstrap']
        },
        {
            id: 4,
            company: 'FreelanceHub',
            position: 'Web Developer',
            duration: '2018 - 2019',
            location: 'Remote',
            description: 'Worked as a freelance web developer, helping small businesses establish their online presence through custom websites and e-commerce solutions.',
            highlights: [
                'Completed 30+ freelance projects with 5-star ratings',
                'Specialized in e-commerce solutions using Shopify and WooCommerce',
                'Provided ongoing maintenance and support for 20+ websites',
                'Built long-term relationships with repeat clients'
            ],
            technologies: ['HTML/CSS', 'JavaScript', 'PHP', 'Shopify', 'WooCommerce', 'MySQL']
        }
    ];

    const toggleAccordion = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section id='experience' className="py-20 bg-dark-200/30">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >

                    <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                        Professional <span className="gradient-text">Experience</span>
                    </h2>
                    <div className="w-20 h-1 bg-white rounded-full mx-auto mb-8"></div>

                    <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                        My journey as a developer, from freelancing to leading teams at innovative companies.
                    </p>
                </motion.div>

                {/* Accordions */}
                <div className="space-y-4">
                    {experiences.map((experience, index) => (
                        <motion.div
                            key={experience.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="glass-effect rounded-xl overflow-hidden border border-gray-700/50"
                        >
                            <button
                                onClick={() => toggleAccordion(index)}
                                className="w-full p-6 text-left hover:bg-white/5 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-accent-primary/50 focus:ring-inset"
                            >
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 bg-accent-primary/20 rounded-lg flex items-center justify-center">
                                            <Briefcase className="w-6 h-6 text-accent-primary" />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-semibold text-white mb-1">
                                                {experience.position}
                                            </h3>
                                            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-sm text-gray-400">
                                                <div className="flex items-center gap-1">
                                                    <span className="font-medium text-accent-primary">{experience.company}</span>
                                                </div>
                                                <div className="flex items-center gap-1">
                                                    <Calendar size={14} />
                                                    {experience.duration}
                                                </div>
                                                <div className="flex items-center gap-1">
                                                    <MapPin size={14} />
                                                    {experience.location}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <motion.div
                                        animate={{ rotate: openIndex === index ? 180 : 0 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        <ChevronDown className="w-5 h-5 text-gray-400" />
                                    </motion.div>
                                </div>
                            </button>

                            <AnimatePresence>
                                {openIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                        className="overflow-hidden"
                                    >
                                        <div className="px-6 pb-6 border-t border-gray-700/50">
                                            <div className="pt-4 space-y-4">
                                                <p className="text-gray-300 leading-relaxed">
                                                    {experience.description}
                                                </p>

                                                <div>
                                                    <h4 className="text-sm font-medium text-white mb-2">Key Achievements:</h4>
                                                    <ul className="space-y-1">
                                                        {experience.highlights.map((highlight, highlightIndex) => (
                                                            <li key={highlightIndex} className="text-sm text-gray-400 flex items-start gap-2">
                                                                <span className="w-1.5 h-1.5 bg-white rounded-full mt-2 flex-shrink-0"></span>
                                                                {highlight}
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>

                                                <div>
                                                    <h4 className="text-sm font-medium text-white mb-2">Technologies Used:</h4>
                                                    <div className="flex flex-wrap gap-2">
                                                        {experience.technologies.map((tech, techIndex) => (
                                                            <Badge
                                                                key={techIndex}
                                                                variant="default"
                                                            >
                                                                {tech}
                                                            </Badge>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>

                {/* Send me message :D */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="text-center mt-12"
                >

                    <div className="glass-effect border border-gray-700/50 rounded-xl p-6">
                        <h3 className="text-xl font-semibold mb-2">Interested in Working Together?</h3>
                        <p className="text-gray-400 mb-4">
                            I'm always open to discussing new opportunities and exciting projects.
                        </p>
                        <motion.button
                            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                            className="px-6 py-3 bg-accent-primary hover:bg-white text-white hover:text-black font-medium rounded-lg transition-colors cursor-pointer"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Let's Talk
                        </motion.button>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default Experience