// import React from 'react'
import { motion } from 'framer-motion';
import { Eye, Users, ArrowRight, Figma } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';


const FigmaDesigns = () => {

    const { t } = useLanguage();

    // Some Figma designs with translation keys
    const designs = [
        {
            id: 1,
            titleKey: 'figma.design1.title',
            descriptionKey: 'figma.design1.description',
            views: '2.1k',
            likes: '340',
            categoryKey: 'figma.category.mobileApp',
            image: 'https://img-wrapper.vercel.app/image?url=https://placehold.co/400x250/1a1a1a/3b82f6?text=E-commerce+App',
            figmaUrl: 'https://figma.com/design/example1',
            featured: true,
            tagKeys: ['figma.tag.stripePayment', 'figma.tag.shoppingCart', 'figma.tag.productCatalog', 'figma.tag.userReviews', 'figma.tag.wishlist']
        },
        {
            id: 2,
            titleKey: 'figma.design2.title',
            descriptionKey: 'figma.design2.description',
            views: '1.8k',
            likes: '275',
            categoryKey: 'figma.category.webApp',
            image: 'https://img-wrapper.vercel.app/image?url=https://placehold.co/400x250/1a1a1a/8b5cf6?text=Analytics+Dashboard',
            figmaUrl: 'https://figma.com/design/example2',
            featured: true,
            tagKeys: ['figma.tag.chartsGraphs', 'figma.tag.realTimeData', 'figma.tag.kpiMetrics', 'figma.tag.dataVisualization', 'figma.tag.exportReports']
        },
        {
            id: 3,
            titleKey: 'figma.design3.title',
            descriptionKey: 'figma.design3.description',
            views: '3.2k',
            likes: '520',
            categoryKey: 'figma.category.mobileApp',
            image: 'https://img-wrapper.vercel.app/image?url=https://placehold.co/400x250/1a1a1a/10b981?text=Banking+App',
            figmaUrl: 'https://figma.com/design/example3',
            featured: false,
            tagKeys: ['figma.tag.biometricAuth', 'figma.tag.moneyTransfer', 'figma.tag.transactionHistory', 'figma.tag.securityFeatures', 'figma.tag.balanceOverview']
        },
        {
            id: 4,
            titleKey: 'figma.design4.title',
            descriptionKey: 'figma.design4.description',
            views: '1.5k',
            likes: '180',
            categoryKey: 'figma.category.designSystem',
            image: 'https://img-wrapper.vercel.app/image?url=https://placehold.co/400x250/1a1a1a/f59e0b?text=Design+System',
            figmaUrl: 'https://figma.com/design/example4',
            featured: false,
            tagKeys: ['figma.tag.designTokens', 'figma.tag.componentLibrary', 'figma.tag.styleGuide', 'figma.tag.uiKit', 'figma.tag.documentation']
        },
        {
            id: 5,
            titleKey: 'figma.design5.title',
            descriptionKey: 'figma.design5.description',
            views: '2.7k',
            likes: '410',
            categoryKey: 'figma.category.webApp',
            image: 'https://img-wrapper.vercel.app/image?url=https://placehold.co/400x250/1a1a1a/ef4444?text=Travel+Platform',
            figmaUrl: 'https://figma.com/design/example5',
            featured: false,
            tagKeys: ['figma.tag.flightSearch', 'figma.tag.hotelBooking', 'figma.tag.datePicker', 'figma.tag.priceComparison', 'figma.tag.tripPlanning']
        },
        {
            id: 6,
            titleKey: 'figma.design6.title',
            descriptionKey: 'figma.design6.description',
            views: '1.9k',
            likes: '320',
            categoryKey: 'figma.category.mobileApp',
            image: 'https://img-wrapper.vercel.app/image?url=https://placehold.co/400x250/1a1a1a/a855f7?text=Food+Delivery',
            figmaUrl: 'https://figma.com/design/example6',
            featured: false,
            tagKeys: ['figma.tag.orderTracking', 'figma.tag.restaurantMenu', 'figma.tag.foodCategories', 'figma.tag.deliveryTimer', 'figma.tag.ratingSystem']
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

    const formatViews = (views: string) => {
        return `${views} ${t('figma.views')}`;
    };

    const formatLikes = (likes: string) => {
        return `${likes} ${t('figma.likes')}`;
    };

    return (
        <section id="figma" className='py-20 bg-dark-200/50'>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >

                    <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                        {t('figma.title')} <span className="gradient-text">{t('figma.titleHighlight')}</span>
                    </h2>
                    <div className="w-20 h-1 bg-white rounded-full mx-auto mb-8"></div>

                    <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                        {t('figma.subtitle')}
                    </p>

                </motion.div>

                {/* Figma Designs */}
                <>
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                    >

                        {designs.map((design) => (
                            <motion.div
                                key={design.id}
                                variants={itemVariants}
                                className="group glass-effect rounded-xl overflow-hidden border border-white/20 hover:bg-white/10 transition-all duration-300 cursor-pointer"
                                whileHover={{ y: -5 }}
                                onClick={() => window.open(design.figmaUrl, '_blank')}
                            >
                                <div className="relative overflow-hidden">
                                    <img
                                        src={design.image}
                                        alt={t(design.titleKey)}
                                        className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300" />
                                    {design.featured && (
                                        <div className="absolute top-4 left-4 px-2 py-1 bg-white text-gray-950 text-xs font-medium rounded">
                                            {t('figma.featured')}
                                        </div>
                                    )}
                                    <div className="absolute top-4 right-4 px-2 py-1 bg-black/50 text-white text-xs rounded">
                                        {t(design.categoryKey)}
                                    </div>
                                </div>

                                <div className="p-6">
                                    <div className="flex items-center gap-4 text-xs text-gray-400 mb-3">
                                        <div className="flex bg-white px-2 py-1.5 text-black rounded-full items-center gap-1">
                                            <Eye size={12} />
                                            {formatViews(design.views)}
                                        </div>
                                        <div className="flex bg-white px-2 py-1.5 text-black rounded-full items-center gap-1">
                                            <Users size={12} />
                                            {formatLikes(design.likes)}
                                        </div>
                                    </div>

                                    <h3 className="text-xl font-semibold mb-3 group-hover:text-accent-primary transition-colors line-clamp-2">
                                        {t(design.titleKey)}
                                    </h3>
                                    <p className="text-gray-100 text-sm mb-4 line-clamp-3">
                                        {t(design.descriptionKey)}
                                    </p>

                                    <div className="flex flex-wrap gap-2 mb-6">
                                        {design.tagKeys.map((tagKey, index) => (
                                            <span
                                                key={index}
                                                className="px-2 py-1 bg-accent-primary/20 text-accent-primary text-xs rounded-full border border-accent-primary/30"
                                            >
                                                {t(tagKey)}
                                            </span>
                                        ))}
                                    </div>

                                    <motion.div
                                        className="flex items-center gap-2 text-accent-primary font-medium text-sm group-hover:gap-3 transition-all duration-200"
                                        whileHover={{ x: 5 }}
                                    >
                                        {t('figma.viewInFigma')}
                                        <ArrowRight size={14} />
                                    </motion.div>
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
                            href="https://figma.com/@yourusername"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-6 py-3 border border-accent-primary text-accent-primary hover:bg-accent-primary hover:text-white font-medium rounded-lg transition-all duration-200"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Figma size={20} />
                            {t('figma.viewProfile')}
                        </motion.a>

                    </motion.div>
                </>
            </div>
        </section>
    )
}

export default FigmaDesigns;