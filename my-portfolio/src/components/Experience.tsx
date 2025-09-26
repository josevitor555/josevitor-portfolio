import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Briefcase, Calendar, MapPin } from 'lucide-react';
import { Badge } from './ui/badge';
import { useLanguage } from '../contexts/LanguageContext';

const Experience = () => {

    const { t } = useLanguage();

    // Open Accordion state
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const experiences = [
        {
            id: 1,
            company: t('experience.company1'),
            position: t('experience.position1'),
            duration: t('experience.duration1'),
            location: t('experience.location1'),
            description: t('experience.description1'),
            highlights: [
                t('experience.highlight1.1'),
                t('experience.highlight1.2'),
                t('experience.highlight1.3'),
                t('experience.highlight1.4')
            ],
            technologies: [
                t('experience.tech.linguagemC'),
                t('experience.tech.raspberryPiPicoW'),
                t('experience.tech.microcontroladoresRP2040'),
                t('experience.tech.gpioInterrupcoes'),
                t('experience.tech.pwmAdc'),
                t('experience.tech.iotArchitecture')
            ]
        },
        {
            id: 2,
            company: t('experience.company2'),
            position: t('experience.position2'),
            duration: t('experience.duration2'),
            location: t('experience.location2'),
            description: t('experience.description2'),
            highlights: [
                t('experience.highlight2.1'),
                t('experience.highlight2.2'),
                t('experience.highlight2.3'),
                t('experience.highlight2.4')
            ],
            technologies: [
                t('experience.tech.sistemasEmbarcados'),
                t('experience.tech.linguagemC'),
                t('experience.tech.raspberryPiPicoW'),
                t('experience.tech.robotica'),
                t('experience.tech.projetosAcademicos'),
                t('experience.tech.iotArchitecture')
            ]
        },
        {
            id: 3,
            company: t('experience.company3'),
            position: t('experience.position3'),
            duration: t('experience.duration3'),
            location: t('experience.location3'),
            description: t('experience.description3'),
            highlights: [
                t('experience.highlight3.1'),
                t('experience.highlight3.2'),
                t('experience.highlight3.3'),
                t('experience.highlight3.4')
            ],
            technologies: [
                t('experience.tech.fundamentosTI'),
                t('experience.tech.redesComputadores'),
                t('experience.tech.bancoDados'),
                t('experience.tech.sistemasOperacionais'),
                t('experience.tech.desenvolvimentoWeb'),
                t('experience.tech.infraestrutura')
            ]
        },
        {
            id: 4,
            company: t('experience.company4'),
            position: t('experience.position4'),
            duration: t('experience.duration4'),
            location: t('experience.location4'),
            description: t('experience.description4'),
            highlights: [
                t('experience.highlight4.1'),
                t('experience.highlight4.2'),
                t('experience.highlight4.3'),
                t('experience.highlight4.4')
            ],
            technologies: [
                t('experience.tech.gestaoEmpresarial'),
                t('experience.tech.marketingDigital'),
                t('experience.tech.consultoriaNegocios'),
                t('experience.tech.empreendedorismo'),
                t('experience.tech.gestaoPessoas'),
                t('experience.tech.inovacao')
            ]
        },
        {
            id: 5,
            company: t('experience.company5'),
            position: t('experience.position5'),
            duration: t('experience.duration5'),
            location: t('experience.location5'),
            description: t('experience.description5'),
            highlights: [
                t('experience.highlight5.1'),
                t('experience.highlight5.2'),
                t('experience.highlight5.3'),
                t('experience.highlight5.4')
            ],
            technologies: [
                t('experience.tech.pytorch'),
                t('experience.tech.tensorflow'),
                t('experience.tech.scikitLearn'),
                t('experience.tech.llms'),
                t('experience.tech.nlp'),
                t('experience.tech.deepLearning'),
                t('experience.tech.machineLearning'),
                t('experience.tech.computerVision')
            ]
        },
        {
            id: 6,
            company: t('experience.company6'),
            position: t('experience.position6'),
            duration: t('experience.duration6'),
            location: t('experience.location6'),
            description: t('experience.description6'),
            highlights: [
                t('experience.highlight6.1'),
                t('experience.highlight6.2'),
                t('experience.highlight6.3')
            ],
            technologies: [
                t('experience.tech.react'),
                t('experience.tech.typescript'),
                t('experience.tech.css'),
                t('experience.tech.mongodb'),
                t('experience.tech.frontendDevelopment'),
                t('experience.tech.databaseManagement')
            ]
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
                        {t('experience.title')} <span className="gradient-text">{t('experience.titleHighlight')}</span>
                    </h2>
                    <div className="w-20 h-1 bg-white rounded-full mx-auto mb-8"></div>

                    <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                        {t('experience.subtitle')}
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
                                                    <h4 className="text-sm font-medium text-white mb-2">{t('experience.achievements')}</h4>
                                                    <ul className="space-y-1">
                                                        {experience.highlights.map((highlight, highlightIndex) => (
                                                            <li key={highlightIndex} className="text-sm text-white flex items-start gap-2">
                                                                <span className="w-1.5 h-1.5 bg-white rounded-full mt-2 flex-shrink-0"></span>
                                                                {highlight}
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>

                                                <div>
                                                    <h4 className="text-sm font-medium text-white mb-2">{t('experience.technologies')}</h4>
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
                        <h3 className="text-xl font-semibold mb-2">{t('experience.workTogether')}</h3>
                        <p className="text-white mb-4">
                            {t('experience.workTogetherDesc')}
                        </p>
                        <motion.button
                            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                            className="px-6 py-3 bg-accent-primary hover:bg-white text-white hover:text-black font-medium rounded-lg transition-colors cursor-pointer"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            {t('experience.letsTalk')}
                        </motion.button>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default Experience