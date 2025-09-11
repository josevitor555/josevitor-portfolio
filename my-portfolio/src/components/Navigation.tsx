// Imports
import { Menu, X, LogOut, ChevronDown, Globe } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useEffect, useState, useRef } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

// Import components
// import { Avatar, AvatarFallback } from './ui/avatar';

const Navigation = () => {

    // States
    const [isOpen, setIsOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('home');
    const [isScrolled, setIsScrolled] = useState(false);
    const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);

    const { language, setLanguage, t } = useLanguage();

    const navigate = useNavigate();

    const location = useLocation();
    const languageDropdownRef = useRef<HTMLDivElement>(null);

    const isHomePage = location.pathname === "/";

    // const { user, signOut, loading } = useAuth();

    // Navigation items
    const navItems = [
        { id: 'home', label: t('nav.home') },
        { id: 'about', label: t('nav.about') },
        { id: 'projects', label: t('nav.projects') },
        { id: 'figma', label: t('nav.figma') },
        { id: 'experience', label: t('nav.experience') },
        { id: 'contact', label: t('nav.contact') },
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

    // Handle click outside to close language dropdown
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (languageDropdownRef.current && !languageDropdownRef.current.contains(event.target as Node)) {
                setIsLanguageDropdownOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

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

    const handleLanguageChange = (newLanguage: 'pt' | 'en') => {
        setLanguage(newLanguage);
        setIsLanguageDropdownOpen(false);
    };

    const handleLoginClick = () => {
        navigate('/auth');
        setIsOpen(false); // Close mobile menu if open
    };

    const languageOptions = [
        { code: 'pt' as const, label: 'Português', flag: '🇧🇷' },
        { code: 'en' as const, label: 'English', flag: '🇺🇸' }
    ];

    const getCurrentLanguage = () => {
        return languageOptions.find(lang => lang.code === language) || languageOptions[0];
    };

    // Here handles SignIn and SignOut
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
            className="fixed z-50 bg-white/[0.05] backdrop-blur-3xl border border-white/[0.3]"
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
                                    className={`px-3 py-2 text-base cursor-pointer font-medium transition-colors duration-200 ${activeSection === item.id
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
                                onClick={handleLoginClick}
                                className="px-4 py-2 text-sm font-medium cursor-pointer bg-gray-100 text-black rounded-full flex items-center gap-2"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <LogOut size={16} /> {t('nav.login')}
                            </motion.button>

                            {/* Avatar user */}
                            {/* <Avatar className="h-8 w-8 ml-4">
                                <AvatarFallback>JV</AvatarFallback>
                            </Avatar> */}

                            {/* Language Selector */}
                            <div className="relative" ref={languageDropdownRef}>
                                <motion.button
                                    onClick={() => setIsLanguageDropdownOpen(!isLanguageDropdownOpen)}
                                    className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-gray-300 hover:text-white transition-colors duration-200 rounded-lg hover:bg-white/[0.05]"
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    <Globe size={16} />
                                    <span className="hidden sm:inline">{getCurrentLanguage().flag}</span>
                                    <span className="hidden lg:inline">{getCurrentLanguage().label}</span>
                                    <ChevronDown
                                        size={14}
                                        className={`transition-transform duration-200 ${isLanguageDropdownOpen ? 'rotate-180' : ''
                                            }`}
                                    />
                                </motion.button>

                                <AnimatePresence>
                                    {isLanguageDropdownOpen && (
                                        <motion.div
                                            initial={{ opacity: 0, y: -10, scale: 0.95 }}
                                            animate={{ opacity: 1, y: 0, scale: 1 }}
                                            exit={{ opacity: 0, y: -10, scale: 0.95 }}
                                            transition={{ duration: 0.2 }}
                                            className="absolute top-14 right-0 mt-2 w-40 bg-white/[0.05] backdrop-blur-3xl border border-white/[0.3] rounded-sm shadow-lg z-50"
                                        >
                                            {languageOptions.map((languageOption) => (
                                                <motion.button
                                                    key={languageOption.code}
                                                    onClick={() => handleLanguageChange(languageOption.code)}
                                                    className={`w-full flex items-center gap-3 px-4 py-3 text-sm font-medium transition-colors duration-200 first:rounded-t-lg last:rounded-b-lg hover:bg-white/[0.1] ${language === languageOption.code
                                                        ? 'text-accent-primary bg-white/[0.05]'
                                                        : 'text-gray-300 hover:text-white'
                                                        }`}
                                                    whileHover={{ x: 4 }}
                                                >
                                                    <span className="text-base">{languageOption.flag}</span>
                                                    <span>{languageOption.label}</span>
                                                    {language === languageOption.code && (
                                                        <motion.div
                                                            layoutId="activeLanguage"
                                                            className="ml-auto w-2 h-2 bg-accent-primary rounded-full"
                                                        />
                                                    )}
                                                </motion.button>
                                            ))}
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
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
                                        className={`block w-full text-left px-3 py-2 text-lg font-medium transition-colors duration-200 ${activeSection === item.id
                                            ? 'text-accent-primary'
                                            : 'text-gray-300 hover:text-white'
                                            }`}
                                        whileHover={{ x: 10 }}
                                    >
                                        {item.label}
                                    </motion.button>
                                ))}

                                {/* Language Selector Mobile */}
                                <div className="relative mt-4">
                                    <motion.button
                                        onClick={() => setIsLanguageDropdownOpen(!isLanguageDropdownOpen)}
                                        className="w-full flex items-center justify-between px-4 py-3 text-lg font-medium text-gray-300 hover:text-white transition-colors duration-200 rounded-lg hover:bg-white/[0.05] border border-white/[0.1]"
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                    >
                                        <div className="flex items-center gap-3">
                                            <Globe size={20} />
                                            <span>{getCurrentLanguage().flag}</span>
                                            <span>{getCurrentLanguage().label}</span>
                                        </div>
                                        <ChevronDown
                                            size={16}
                                            className={`transition-transform duration-200 ${isLanguageDropdownOpen ? 'rotate-180' : ''
                                                }`}
                                        />
                                    </motion.button>

                                    <AnimatePresence>
                                        {isLanguageDropdownOpen && (
                                            <motion.div
                                                initial={{ opacity: 0, height: 0 }}
                                                animate={{ opacity: 1, height: 'auto' }}
                                                exit={{ opacity: 0, height: 0 }}
                                                className="mt-2 bg-white/[0.05] backdrop-blur-3xl border border-white/[0.3] rounded-lg overflow-hidden"
                                            >
                                                {languageOptions.map((languageOption) => (
                                                    <motion.button
                                                        key={languageOption.code}
                                                        onClick={() => handleLanguageChange(languageOption.code)}
                                                        className={`w-full flex items-center gap-3 px-4 py-3 text-lg font-medium transition-colors duration-200 hover:bg-white/[0.1] ${language === languageOption.code
                                                            ? 'text-accent-primary bg-white/[0.05]'
                                                            : 'text-gray-300 hover:text-white'
                                                            }`}
                                                        whileHover={{ x: 8 }}
                                                    >
                                                        <span className="text-xl">{languageOption.flag}</span>
                                                        <span>{languageOption.label}</span>
                                                        {language === languageOption.code && (
                                                            <motion.div
                                                                layoutId="activeLanguageMobile"
                                                                className="ml-auto w-2 h-2 bg-accent-primary rounded-full"
                                                            />
                                                        )}
                                                    </motion.button>
                                                ))}
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>

                                <motion.button
                                    onClick={handleLoginClick}
                                    className="w-full text-left px-3 py-2 text-lg font-medium cursor-pointer bg-gray-100 text-black rounded-full flex items-center justify-center gap-2 mt-4"
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    <LogOut size={20} /> {t('nav.login')}
                                </motion.button>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </motion.nav>
    );
}

export default Navigation