import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Globe, Brain } from 'lucide-react';
import { Badge } from './ui/badge';

interface SkillCardProps {
    icon: React.ElementType;
    title: string;
    description: string;
    technologies: string[];
    index: number;
}

const SkillCard = ({ icon: Icon, title, description, technologies, index }: SkillCardProps) => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const cardRef = useRef<HTMLDivElement>(null);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!cardRef.current) return;
        const rect = cardRef.current.getBoundingClientRect();
        setMousePosition({
            x: e.clientX - rect.left,
            y: e.clientY - rect.top,
        });
    };

    const handleMouseLeave = () => {
        setMousePosition({ x: 0, y: 0 }); // Reset position on mouse leave
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <motion.div
            key={index}
            variants={itemVariants}
            className="glass-effect rounded-xl p-6 relative overflow-hidden border border-white/10 transition-all duration-300 hover:scale-[1.02]"
            whileHover={{ y: -5 }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            ref={cardRef}
        >
            <div
                className="absolute inset-0 rounded-xl pointer-events-none"
                style={{
                    background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255, 255, 255, 0.1) 0%, transparent 70%)`,
                    opacity: mousePosition.x !== 0 || mousePosition.y !== 0 ? 1 : 0,
                    transition: 'opacity 0.3s ease-out',
                }}
            ></div>
            <motion.div
                className="mb-4 relative z-10"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
            >
                <Icon className="w-12 h-12 text-accent-primary transition-transform duration-300" />
            </motion.div>

            <h3 className="text-xl font-semibold mb-2 relative z-10">{title}</h3>
            <p className="text-gray-100 text-sm mb-4 relative z-10">{description}</p>

            <div className="flex flex-wrap gap-1 relative z-10">
                {technologies.map((tech, techIndex) => (
                    <Badge
                        key={techIndex}
                        variant="default"
                    >
                        {tech}
                    </Badge>
                ))}
            </div>
        </motion.div>
    );
};

const AboutMe = () => {

    // Skills
    const skills = [
        {
            icon: Code,
            title: 'Desenvolvimento Frontend',
            description: 'Desenvolvo aplicações web interativas e responsivas utilizando React, TypeScript, Next.js e Tailwind CSS.',
            technologies: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Vue.js']
        },
        {
            icon: Database,
            title: 'Desenvolvimento Backend',
            description: 'Trabalho com a construção de APIs robustas e gerenciamento de bancos de dados utilizando Node.js, Python, PostgreSQL e MongoDB.',
            technologies: ['Node.js', 'Python', 'PostgreSQL', 'MongoDB', 'Express.js']
        },
        {
            icon: Globe,
            title: 'Designs no Figma',
            description: 'Crio protótipos, designs de UI/UX e versões mobile utilizando Figma.',
            technologies: ['Prototype', 'UI/UX', 'Mobile First']
        },
        {
            icon: Brain,
            title: 'Desenvolvimento de IA',
            description: 'Desenvolvo soluções de assistentes inteligentes com IA e APIs da OpenAI e Google Gemini em aplicações web.',
            technologies: ['Python', 'Gemini', 'OpenAI', 'N8N Automation', 'JavaScript']
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    return (
        <section id="about" className='py-20 bg-dark-200/50'>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-8"
                >

                    <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                        Sobre <span className="gradient-text">Mim</span>
                    </h2>
                    <div className="w-20 h-1 rounded-full bg-white mx-auto mb-0"></div>

                </motion.div>

                <div className="grid lg:grid-cols-2 gap-8 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="space-y-8">
                            <p className="text-lg text-gray-300 leading-relaxed">
                                Sou um desenvolvedor web com 6 anos de experiência. Concluí um curso técnico em 2023, após a pandemia. Retomei meus estudos na área um ano depois, cursando Análise e Desenvolvimento de Sistemas na mesma instituição de ensino (IFPI). Prevista para ser encerrada em 2026.
                            </p>
                            <p className="text-lg text-gray-300 leading-relaxed">
                                Com o passar dos anos, trabalho em projetos não apenas pessoais, mas também com outras pessoas como colegas e professores. Isso me proporciona o conhecimento prático necessário para continuar atuando na área em desenvolvimento de software.
                            </p>
                            <div className="flex flex-wrap gap-4 pt-4">
                                <div className="text-center border border-white/10 rounded-xl p-4">
                                    <div className="text-2xl font-bold text-accent-primary">10+</div>
                                    <div className="text-sm text-white">Projetos Concluídos</div>
                                </div>
                                <div className="text-center border border-white/10 rounded-xl p-4">
                                    <div className="text-2xl font-bold text-accent-primary">5+</div>
                                    <div className="text-sm text-white">Anos de Experiência</div>
                                </div>
                                <div className="text-center border border-white/10 rounded-xl p-4">
                                    <div className="text-2xl font-bold text-accent-primary">50+</div>
                                    <div className="text-sm text-white">Seguidores no LinkedIn</div>
                                </div>
                                <div className="text-center border border-white/10 rounded-xl p-4">
                                    <div className="text-2xl font-bold text-accent-primary">50+</div>
                                    <div className="text-sm text-white">Seguidores no GitHub</div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="relative mb-10"
                    >

                        <div className="aspect-square rounded-2xl bg-gradient-to-br from-accent-primary/20 to-accent-secondary/20 glass-effect p-8 flex items-center justify-center">
                            <div className="w-64 h-64 rounded-full bg-gradient-to-br from-accent-primary to-accent-secondary opacity-20"></div>
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="text-center">
                                    <img src="https://i.pinimg.com/736x/69/8d/99/698d99ca1e2b367d426e445fa51d3824.jpg" alt="Profile photo" className="w-80 h-80 rounded-lg mx-auto mb-4 object-cover" />
                                    <div className="flex flex-col items-center">
                                        <p className="text-gray-400 mb-2"> Foto de Perfil </p>
                                        <div className="w-16 h-1 bg-white rounded-full"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
                >
                    {skills.map((skill, index) => (
                        <SkillCard
                            key={index}
                            icon={skill.icon}
                            title={skill.title}
                            description={skill.description}
                            technologies={skill.technologies}
                            index={index}
                        />
                    ))}
                </motion.div>
            </div>
        </section>
    )
}

export default AboutMe;
