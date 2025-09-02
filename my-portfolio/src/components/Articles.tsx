// import React from 'react'
import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowRight, BookOpen } from 'lucide-react';


const Articles = () => {

    // Some articles
    const articles = [
        {
            id: 1,
            title: 'Construindo Aplicações React Escaláveis com TypeScript',
            excerpt: 'Aprenda a estruturar aplicações React de grande escala usando TypeScript para melhor manutenibilidade e experiência do desenvolvedor.',
            date: '2024-01-15',
            readTime: '8 min de leitura',
            category: 'React',
            image: 'https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://placehold.co/400x250/1a1a1a/3b82f6?text=React+TypeScript',
            featured: true
        },
        {
            id: 2,
            title: 'Técnicas Modernas de CSS para Melhor Design de UI',
            excerpt: 'Explore recursos avançados de CSS como Grid, Flexbox e propriedades personalizadas para criar interfaces de usuário impressionantes.',
            date: '2024-01-10',
            readTime: '6 min de leitura',
            category: 'CSS',
            image: 'https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://placehold.co/400x250/1a1a1a/8b5cf6?text=Modern+CSS',
            featured: true
        },
        {
            id: 3,
            title: 'Melhores Práticas de Design de API para Serviços RESTful',
            excerpt: 'Diretrizes e padrões para projetar APIs REST robustas, escaláveis e de fácil manutenção que os desenvolvedores adoram usar.',
            date: '2024-01-05',
            readTime: '10 min de leitura',
            category: 'Backend',
            image: 'https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://placehold.co/400x250/1a1a1a/10b981?text=API+Design',
            featured: false
        },
        {
            id: 4,
            title: 'Otimização de Desempenho em Aplicações Web Modernas',
            excerpt: 'Técnicas e estratégias para melhorar o desempenho de aplicações web, desde a otimização de pacotes até melhorias em tempo de execução.',
            date: '2023-12-28',
            readTime: '12 min de leitura',
            category: 'Performance',
            image: 'https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://placehold.co/400x250/1a1a1a/f59e0b?text=Performance',
            featured: false
        },
        {
            id: 5,
            title: 'Introdução à Arquitetura de Microsserviços',
            excerpt: 'Compreendendo os fundamentos dos microsserviços e quando usá-los na arquitetura da sua aplicação.',
            date: '2023-12-20',
            readTime: '15 min de leitura',
            category: 'Architecture',
            image: 'https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://placehold.co/400x250/1a1a1a/ef4444?text=Microservices',
            featured: false
        },
        {
            id: 6,
            title: 'O Futuro do Desenvolvimento Frontend',
            excerpt: 'Explorando tendências e tecnologias emergentes que estão moldando o futuro do desenvolvimento frontend.',
            date: '2023-12-15',
            readTime: '7 min de leitura',
            category: 'Trends',
            image: 'https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://placehold.co/400x250/1a1a1a/a855f7?text=Frontend+Future',
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
    };

    const formatDate = (dateString: string) => {
        return new Date(dateString).toLocaleDateString('pt-BR', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    };

    return (
        <section id="articles" className='py-20 bg-dark-200/50'>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >

                    <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                        Últimos <span className="gradient-text">Artigos</span>
                    </h2>
                    <div className="w-20 h-1 bg-white rounded-full mx-auto mb-8"></div>

                    <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                        Adoro compartilhar meu conhecimento e experiências através da escrita. Aqui estão alguns dos meus artigos recentes.
                    </p>

                </motion.div>

                {/* Articles */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                >

                    {articles.map((article) => (
                        <motion.article
                            key={article.id}
                            variants={itemVariants}
                            className="group glass-effect rounded-xl overflow-hidden border border-white/20 hover:bg-white/10 transition-all duration-300 cursor-pointer"
                            whileHover={{ y: -5 }}
                        >
                            <div className="relative overflow-hidden">
                                <img
                                    src={article.image}
                                    alt={article.title}
                                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                {article.featured && (
                                    <div className="absolute top-4 left-4 px-2 py-1 bg-accent-primary text-white text-xs font-medium rounded">
                                        Em Destaque
                                    </div>
                                )}
                                <div className="absolute top-4 right-4 px-2 py-1 bg-black/50 text-white text-xs rounded">
                                    {article.category}
                                </div>
                            </div>

                            <div className="p-6">
                                <div className="flex items-center gap-4 text-xs text-gray-400 mb-3">
                                    <div className="flex items-center gap-1">
                                        <Calendar size={12} />
                                        {formatDate(article.date)}
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <Clock size={12} />
                                        {article.readTime}
                                    </div>
                                </div>

                                <h3 className="text-xl font-semibold mb-3 group-hover:text-accent-primary transition-colors line-clamp-2">
                                    {article.title}
                                </h3>
                                <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                                    {article.excerpt}
                                </p>

                                <motion.div
                                    className="flex items-center gap-2 text-accent-primary font-medium text-sm group-hover:gap-3 transition-all duration-200"
                                    whileHover={{ x: 5 }}
                                >
                                    Ler Mais
                                    <ArrowRight size={14} />
                                </motion.div>
                            </div>
                        </motion.article>
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
                        <BookOpen size={20} />
                        Ver Todos os Artigos
                    </motion.a>

                </motion.div>
            </div>
        </section>
    )
}

export default Articles