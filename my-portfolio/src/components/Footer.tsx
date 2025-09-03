// import React from 'react';
import { motion } from 'framer-motion';
import { Heart, ArrowUp } from 'lucide-react';

const Footer = () => {

    // Functions
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-dark-200 border-t border-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-4 md:mb-0">
                        <motion.div
                            className="text-xl font-bold gradient-text mb-2"
                            whileHover={{ scale: 1.05 }}
                        >
                            José Vitor
                        </motion.div>
                        <p className="text-gray-400 text-sm">
                            Desenvolvedor Front-End Pleno apaixonado por criar experiências digitais incríveis.
                        </p>
                    </div>

                    <div className="flex items-center gap-6">
                        <div className="flex items-center gap-1 text-gray-400 text-sm">
                            Feito com <Heart size={16} className="text-red-500 mx-1" /> por José Vitor
                        </div>

                        <motion.button
                            onClick={scrollToTop}
                            className="p-2 glass-effect rounded-full hover:bg-white/10 transition-colors"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            aria-label="Scroll to top"
                        >
                            <ArrowUp size={20} />
                        </motion.button>
                    </div>
                </div>

                <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400 text-sm">
                    <p>&copy; {currentYear} José Vitor. Todos os direitos reservados.</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer