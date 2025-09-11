import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { X } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

interface AuthPageProps {
    isModal?: boolean;
    onClose?: () => void;
}

const AuthPage = ({ isModal = false, onClose }: AuthPageProps) => {

    // States
    const [isSignUp, setIsSignUp] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [message, setMessage] = useState<string | null>(null);
    const [name, setName] = useState('');
    const navigate = useNavigate();
    const { t } = useLanguage();

    // Handle auth function
    const handleAuth = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError(null);
        setMessage(null);

        try {
            // Simulate loading time
            await new Promise(resolve => setTimeout(resolve, 1000));

            if (isSignUp) {
                // Sign up logic without database
                console.log('Sign up attempt:', { email, password, name });
                setMessage(t('auth.signupSuccess') || 'Account created successfully!');
            } else {
                // Sign in logic without database
                console.log('Sign in attempt:', { email, password });
                setMessage(t('auth.signinSuccess') || 'Welcome back!');
            }

            // Close modal after success if in modal mode
            if (isModal && onClose) {
                setTimeout(() => {
                    onClose();
                }, 1500);
            } else {
                // Navigate to home if not in modal mode
                setTimeout(() => {
                    navigate('/');
                }, 1500);
            }
        } catch (err) {
            setError(t('auth.error') || 'Something went wrong. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    const handleClose = () => {
        if (isModal && onClose) {
            onClose();
        } else {
            navigate('/');
        }
    };

    return (
        <div className={isModal ? "flex items-center justify-center min-h-full p-4" : "min-h-screen flex items-center justify-center p-4 relative"}>
            {/* Background with blur effect */}
            {!isModal && (
                <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom right, #0F0E0E 0%, #0F0E0E 60%, #F3F2EC 320%)' }}>
                    <div className="absolute inset-0 backdrop-blur-sm bg-black/10" />
                </div>
            )}
            
            <motion.div
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                className="w-full max-w-md bg-dark-200/90 backdrop-blur-xl border border-gray-600/50 rounded-2xl p-8 relative z-10"
            >
                <motion.button
                    onClick={handleClose}
                    className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
                    aria-label="Close"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                >
                    <X size={24} />
                </motion.button>

                <h2 className="text-3xl font-bold text-center mb-2 text-white">
                    {isSignUp ? (t('auth.createAccount') || 'Create Account') : (t('auth.welcomeBack') || 'Welcome Back')}
                </h2>
                <p className="text-center text-gray-400 mb-8">
                    {isSignUp ? (t('auth.joinCommunity') || 'Join the community') : (t('auth.signInToContinue') || 'Sign in to continue')}
                </p>

                {/* Message Errors and Messages Success */}
                {error && <p className="bg-red-500/20 text-red-400 p-3 rounded-lg mb-4 text-center">{error}</p>}
                {message && <p className="bg-green-500/20 text-green-400 p-3 rounded-lg mb-4 text-center">{message}</p>}

                {/* Form */}
                <form onSubmit={handleAuth} className="space-y-6">
                    {/* Name Field - Only for Sign Up */}
                    {isSignUp && (
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                                {t('auth.name') || 'Name'}
                            </label>
                            <input
                                type="text"
                                id="name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                                className="w-full px-4 py-3 bg-dark-200 border border-gray-600 rounded-lg focus:ring-2 focus:ring-accent-primary focus:border-transparent transition-colors text-white placeholder-gray-400"
                                placeholder={t('auth.namePlaceholder') || 'Your full name'}
                            />
                        </div>
                    )}

                    {/* Email Field */}
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                            {t('auth.email') || 'Email'}
                        </label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="w-full px-4 py-3 bg-dark-200 border border-gray-600 rounded-lg focus:ring-2 focus:ring-accent-primary focus:border-transparent transition-colors text-white placeholder-gray-400"
                            placeholder={t('auth.emailPlaceholder') || 'your.email@example.com'}
                        />
                    </div>

                    {/* Password Field */}
                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-2">
                            {t('auth.password') || 'Password'}
                        </label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            className="w-full px-4 py-3 bg-dark-200 border border-gray-600 rounded-lg focus:ring-2 focus:ring-accent-primary focus:border-transparent transition-colors text-white placeholder-gray-400"
                            placeholder={t('auth.passwordPlaceholder') || '••••••••'}
                        />
                    </div>

                    {/* Submit Button */}
                    <motion.button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-white hover:bg-accent-secondary disabled:opacity-50 disabled:cursor-not-allowed text-black font-semibold py-3 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center cursor-pointer"
                        whileHover={{ scale: loading ? 1 : 1.02 }}
                        whileTap={{ scale: loading ? 1 : 0.98 }}
                    >
                        {loading ? (
                            <div className="flex items-center gap-2">
                                <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                {t('auth.loading') || 'Loading...'}
                            </div>
                        ) : (
                            isSignUp ? (t('auth.createAccount') || 'Create Account') : (t('auth.signIn') || 'Sign In')
                        )}
                    </motion.button>
                </form>

                {/* Toggle between Sign In and Sign Up */}
                <div className="mt-6 text-center">
                    <button
                        type="button"
                        onClick={() => {
                            setIsSignUp(!isSignUp);
                            setError(null);
                            setMessage(null);
                        }}
                        className="text-accent-primary hover:text-accent-secondary transition-colors duration-200 cursor-pointer"
                    >
                        {isSignUp 
                            ? (t('auth.alreadyHaveAccount') || 'Already have an account? Sign in') 
                            : (t('auth.dontHaveAccount') || "Don't have an account? Sign up")
                        }
                    </button>
                </div>
            </motion.div>
        </div>
    );
}

export default AuthPage;