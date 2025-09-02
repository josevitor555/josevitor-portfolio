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
            position: 'Desenvolvedor Full Stack Sênior',
            duration: '2022 - Atualmente',
            location: 'São Francisco, CA',
            description: 'Liderando o desenvolvimento de aplicações web escaláveis utilizando React, Node.js e AWS. Orientando desenvolvedores juniores e arquitetando soluções de microsserviços para clientes corporativos.',
            highlights: [
                'Liderei uma equipe de 5 desenvolvedores para entregar 3 grandes projetos antes do prazo',
                'Melhorei o desempenho da aplicação em 40% através de estratégias de otimização',
                'Implementei pipelines de CI/CD, reduzindo o tempo de implantação em 60%',
                'Arquitei microsserviços lidando com mais de 1 milhão de requisições por dia'
            ],
            technologies: ['React', 'Node.js', 'AWS', 'TypeScript', 'Docker', 'PostgreSQL']
        },
        {
            id: 2,
            company: 'Startup Innovate',
            position: 'Desenvolvedor Full Stack',
            duration: '2020 - 2022',
            location: 'Austin, TX',
            description: 'Desenvolvi e mantive múltiplas aplicações voltadas para o cliente em um ambiente de startup acelerado. Colaborei diretamente com os clientes para entender os requisitos e entregar soluções.',
            highlights: [
                'Construí 8 aplicações web personalizadas do zero',
                'Reduzi o tempo de integração de clientes em 50% através de automação',
                'Integrei mais de 15 APIs de terceiros e sistemas de pagamento',
                'Estabeleci padrões de codificação e melhores práticas para a equipe'
            ],
            technologies: ['Vue.js', 'Python', 'Django', 'MongoDB', 'Redis', 'Stripe API']
        },
        {
            id: 3,
            company: 'Digital Agency Pro',
            position: 'Desenvolvedor Frontend',
            duration: '2019 - 2020',
            location: 'Nova Iorque, NY',
            description: 'Especializado na criação de websites responsivos e pixel-perfect para diversos clientes em diferentes indústrias. Trabalhei em estreita colaboração com designers para dar vida a visões criativas.',
            highlights: [
                'Entreguei mais de 25 websites responsivos com 100% de satisfação do cliente',
                'Implementei animações e interações avançadas usando GSAP',
                'Otimizei websites alcançando pontuações acima de 90 no Google PageSpeed',
                'Colaborei com a equipe de design para melhorar os fluxos de trabalho de UI/UX'
            ],
            technologies: ['JavaScript', 'SCSS', 'GSAP', 'WordPress', 'jQuery', 'Bootstrap']
        },
        {
            id: 4,
            company: 'FreelanceHub',
            position: 'Desenvolvedor Web',
            duration: '2018 - 2019',
            location: 'Remoto',
            description: 'Trabalhei como desenvolvedor web freelancer, ajudando pequenas empresas a estabelecer sua presença online através de websites personalizados e soluções de e-commerce.',
            highlights: [
                'Completei mais de 30 projetos freelancer com avaliações 5 estrelas',
                'Especializado em soluções de e-commerce usando Shopify e WooCommerce',
                'Forneci manutenção e suporte contínuos para mais de 20 websites',
                'Construí relacionamentos de longo prazo com clientes recorrentes'
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
                        Experiência <span className="gradient-text">Profissional</span>
                    </h2>
                    <div className="w-20 h-1 bg-white rounded-full mx-auto mb-8"></div>

                    <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                        Minha jornada como desenvolvedor, do trabalho freelancer à liderança de equipes em empresas inovadoras.
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
                                                    <h4 className="text-sm font-medium text-white mb-2">Principais Conquistas:</h4>
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
                                                    <h4 className="text-sm font-medium text-white mb-2">Tecnologias Utilizadas:</h4>
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
                        <h3 className="text-xl font-semibold mb-2">Interessado em Trabalhar Juntos?</h3>
                        <p className="text-gray-400 mb-4">
                            Estou sempre aberto a discutir novas oportunidades e projetos empolgantes.
                        </p>
                        <motion.button
                            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                            className="px-6 py-3 bg-accent-primary hover:bg-white text-white hover:text-black font-medium rounded-lg transition-colors cursor-pointer"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Vamos Conversar
                        </motion.button>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default Experience