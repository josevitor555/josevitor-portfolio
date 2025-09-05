// Imports
import { Menu, X, LogOut } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

// Import components
import { Avatar, AvatarFallback } from './ui/avatar';

const Navigation = () => {

    // States
    const [isOpen, setIsOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('home');
    const [isScrolled, setIsScrolled] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    const isHomePage = location.pathname === "/";

    // Navigation items
    const navItems = [
        { id: 'home', label: 'Início' },
        { id: 'about', label: 'Sobre' },
        { id: 'projects', label: 'Projetos' },
        { id: 'articles', label: 'Artigos' },
        { id: 'experience', label: 'Experiência' },
        { id: 'contact', label: 'Contato' },
    ];

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            const scrollThreshold = 80;
            
            // Update scroll state for header animation
            setIsScrolled(scrollY > scrollThreshold);
            
            // Handle section highlighting only on home page
            if (isHomePage) {
                const sections = navItems.map(item => document.getElementById(item.id));
                const scrollPosition = scrollY + 100;

                for (let i = sections.length - 1; i >= 0; i--) {
                    const section = sections[i];
                    if (section && section.offsetTop <= scrollPosition) {
                        setActiveSection(navItems[i].id);
                        break;
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [isHomePage]);

    const scrollToSection = (sectionId: string) => {
        if (isHomePage) {
            const element = document.getElementById(sectionId);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        } else {
            navigate(`/#${sectionId}`);
        }
        setIsOpen(false);
    };

    // Here handle SignOut
    // ...

    // Animation variants for header scroll response
    const getHeaderStyle = () => {
        if (isScrolled) {
            return {
                top: "1.5rem", // top-2 (8px)
                left: "1.5rem", // inset-x-2 (8px)
                right: "1.5rem",
                borderRadius: "1rem", // rounded-xl (12px)
            };
        }
        return {
            top: "1.5rem", // top-6 (24px)
            left: "1.5rem", // inset-x-6 (24px)
            right: "1.5rem",
            borderRadius: "1rem", // rounded-2xl (16px)
        };
    };

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{
                y: 0,
                ...getHeaderStyle()
            }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed z-50 bg-white/[0.05] backdrop-blur-3xl border border-white/[0.3] shadow-lg"
        >

            <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div 
                    className="flex justify-between items-center"
                    animate={{
                        height: isScrolled ? "3.5rem" : "4rem", // h-14 vs h-16
                        paddingTop: isScrolled ? "0.75rem" : "1rem",
                        paddingBottom: isScrolled ? "0.75rem" : "1rem"
                    }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                    <motion.div
                        className="text-xl font-bold gradient-text"
                        whileHover={{ scale: 1.05 }}
                    >
                        <Link to="/" className='text-light-100'> José vitor </Link>
                    </motion.div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        <div className="flex items-center justify-between gap-6">
                            {isHomePage && navItems.map((item) => (
                                <motion.button
                                    key={item.id}
                                    onClick={() => scrollToSection(item.id)}
                                    className={`px-3 py-2 text-base cursor-pointer font-medium transition-colors duration-200 ${
                                        activeSection === item.id
                                            ? 'text-accent-primary'
                                            : 'text-gray-300 hover:text-white'
                                    }`}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    {item.label}
                                </motion.button>
                            ))}

                            {/* Button Sign In */}
                            <motion.button
                                className="px-4 py-2 text-sm font-medium cursor-pointer bg-gray-100 text-black rounded-full flex items-center gap-2"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <LogOut size={16} /> Entrar
                            </motion.button>

                            {/* Avatar user */}
                            <Avatar className="h-8 w-8 ml-8">
                                <AvatarFallback>JV</AvatarFallback>
                            </Avatar>
                        </div>
                    </div>

                    {/* Mobile Navigation Button */}
                    <div className='md:hidden'>
                        <motion.button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-white hover:text-accent-primary transition-colors"
                            whileTap={{ scale: 0.95 }}
                        >

                            {/* Show Menu Icon */}
                            {isOpen ? <X size={24} /> : <Menu size={24} />}

                        </motion.button>
                    </div>
                </motion.div>

                {/* Mobile Navigation Menu */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="md:hidden"
                        >
                            <div className="px-6 pt-4 pb-6 mb-6 rounded-2xl space-y-1 bg-dark-100/95 backdrop-blur-md">
                                {isHomePage && navItems.map((item) => (
                                    <motion.button
                                        key={item.id}
                                        onClick={() => scrollToSection(item.id)}
                                        className={`block w-full text-left px-3 py-2 text-lg font-medium transition-colors duration-200 ${
                                            activeSection === item.id
                                                ? 'text-accent-primary'
                                                : 'text-gray-300 hover:text-white'
                                        }`}
                                        whileHover={{ x: 10 }}
                                    >
                                        {item.label}
                                    </motion.button>
                                ))}
                                <motion.button
                                    className="w-full text-left px-3 py-2 text-lg font-medium cursor-pointer bg-gray-100 text-black rounded-full flex items-center justify-center gap-2 mt-4"
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    <LogOut size={20} /> Entrar
                                </motion.button>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </motion.nav>
    )
}

export default Navigation