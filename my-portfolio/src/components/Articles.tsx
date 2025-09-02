import React from 'react'
import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowRight, BookOpen } from 'lucide-react';


const Articles = () => {

    // Some articles
    const articles = [
        {
            id: 1,
            title: 'Building Scalable React Applications with TypeScript',
            excerpt: 'Learn how to structure large-scale React applications using TypeScript for better maintainability and developer experience.',
            date: '2024-01-15',
            readTime: '8 min read',
            category: 'React',
            image: 'https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://placehold.co/400x250/1a1a1a/3b82f6?text=React+TypeScript',
            featured: true
        },
        {
            id: 2,
            title: 'Modern CSS Techniques for Better UI Design',
            excerpt: 'Explore advanced CSS features like Grid, Flexbox, and custom properties to create stunning user interfaces.',
            date: '2024-01-10',
            readTime: '6 min read',
            category: 'CSS',
            image: 'https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://placehold.co/400x250/1a1a1a/8b5cf6?text=Modern+CSS',
            featured: true
        },
        {
            id: 3,
            title: 'API Design Best Practices for RESTful Services',
            excerpt: 'Guidelines and patterns for designing robust, scalable, and maintainable REST APIs that developers love to use.',
            date: '2024-01-05',
            readTime: '10 min read',
            category: 'Backend',
            image: 'https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://placehold.co/400x250/1a1a1a/10b981?text=API+Design',
            featured: false
        },
        {
            id: 4,
            title: 'Performance Optimization in Modern Web Apps',
            excerpt: 'Techniques and strategies to improve web application performance, from bundle optimization to runtime improvements.',
            date: '2023-12-28',
            readTime: '12 min read',
            category: 'Performance',
            image: 'https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://placehold.co/400x250/1a1a1a/f59e0b?text=Performance',
            featured: false
        },
        {
            id: 5,
            title: 'Getting Started with Microservices Architecture',
            excerpt: 'Understanding the fundamentals of microservices and when to use them in your application architecture.',
            date: '2023-12-20',
            readTime: '15 min read',
            category: 'Architecture',
            image: 'https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://placehold.co/400x250/1a1a1a/ef4444?text=Microservices',
            featured: false
        },
        {
            id: 6,
            title: 'The Future of Frontend Development',
            excerpt: 'Exploring emerging trends and technologies that are shaping the future of frontend development.',
            date: '2023-12-15',
            readTime: '7 min read',
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
        return new Date(dateString).toLocaleDateString('en-US', {
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
                        Latest <span className="gradient-text">Articles</span>
                    </h2>
                    <div className="w-20 h-1 bg-white rounded-full mx-auto mb-8"></div>

                    <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                        I love sharing my knowledge and experiences through writing. Here are some of my recent articles.
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
                                        Featured
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
                                    Read More
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
                        View All Articles
                    </motion.a>

                </motion.div>
            </div>
        </section>
    )
}

export default Articles