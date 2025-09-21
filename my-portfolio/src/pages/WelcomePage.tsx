import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import FullScreenLoader from '../components/ui/FullScreenLoader.tsx';
import { useLanguage } from '../contexts/LanguageContext.tsx';

// Apply backend URL from env variables
const backendUrl = import.meta.env.VITE_BACKEND_URL;

const WelcomePage = () => {
    
    // Hooks
    const navigate = useNavigate();
    const { t } = useLanguage();

    // States
    const [user, setUser] = useState({ name: "", email: "" });
    const [isLoading, setIsLoading] = useState(true);
    const [showDeleteLoader, setShowDeleteLoader] = useState(false);
    const [loaderMessage, setLoaderMessage] = useState(t('welcome.processing'));

    // Check if the user is logged in
    useEffect(() => {
        const token = localStorage.getItem("authToken");
        const user = localStorage.getItem("user");
        if (token && user) {
            setUser(JSON.parse(user));
            setIsLoading(false);
        } else {
            // Add a small delay to prevent flickering
            setTimeout(() => {
                navigate("/auth");
            }, 100);
        }
    }, [navigate]);

    // Logout/Delete Account with API call
    const handleDeleteAccount = async () => {
        const token = localStorage.getItem("authToken");
        
        if (!token) {
            alert(t('welcome.userNotAuthenticated'));
            navigate("/auth");
            return;
        }

        // Show confirmation dialog
        const confirmDelete = window.confirm(
            t('welcome.deleteConfirmation')
        );
        
        if (!confirmDelete) {
            return;
        }

        // Activate loading spinner
        setLoaderMessage(t('welcome.deletingAccount'));
        setShowDeleteLoader(true);

        try {
            console.log('Attempting to delete account...');
            
            // Make API call to delete account
            const response = await fetch(`${backendUrl}/api/auth/account`, {
                method: 'DELETE',
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json'
                }
            });

            console.log('Delete response status:', response.status);
            
            if (!response.ok) {
                let errorMessage = 'Failed to delete account';
                try {
                    const errorData = await response.json();
                    errorMessage = errorData.message || errorMessage;
                } catch (jsonError) {
                    console.log('Response is not JSON, using status text:', response.statusText);
                    errorMessage = response.statusText || errorMessage;
                }
                throw new Error(errorMessage);
            }

            // Handle successful response - check if response has content
            let result = null;
            const contentType = response.headers.get('content-type');
            
            if (contentType && contentType.includes('application/json')) {
                try {
                    result = await response.json();
                    console.log('Account deleted successfully:', result);
                } catch (jsonError) {
                    console.log('Response successful but empty JSON, account likely deleted');
                    result = { message: 'Account deleted successfully' };
                }
            } else {
                console.log('Response successful but not JSON, account likely deleted');
                result = { message: 'Account deleted successfully' };
            }

            // Clear localStorage after successful deletion
            localStorage.removeItem("authToken");
            localStorage.removeItem("user");
            
            // Show success message and redirect
            const successMessage = result?.message || t('welcome.accountDeletedSuccess');
            alert(successMessage);
            
            setTimeout(() => {
                setShowDeleteLoader(false);
                navigate("/");
            }, 2000);

        } catch (error) {
            console.error("Error deleting account:", error);
            const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
            alert(t('welcome.deleteError').replace('{error}', errorMessage));
            setShowDeleteLoader(false);
        }
    };

    // Handle back to home with loader
    const handleBackToHome = () => {
        setLoaderMessage(t('welcome.returningToHome'));
        setShowDeleteLoader(true);
        setTimeout(() => {
            navigate("/");
        }, 1000);
    };

    return (
        <>
            {/* Full Screen Loader for delete/logout actions */}
            {showDeleteLoader && (
                <FullScreenLoader 
                    message={loaderMessage} 
                    variant="fancy" 
                />
            )}

            <div className="min-h-screen flex items-center justify-center p-4 relative overflow-hidden">
                {/* Animated Background Elements */}
                <div className="absolute inset-0">
                    {[...Array(80)].map((_, i) => (
                        <motion.div
                            key={i}
                            className="absolute w-1 h-1 bg-white/80 rounded-full"
                            initial={{
                                x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1200),
                                y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800),
                                opacity: 0
                            }}
                            animate={{
                                opacity: [0, 1, 0],
                                scale: [0, 1, 0],
                            }}
                            transition={{
                                duration: Math.random() * 3 + 2,
                                repeat: Infinity,
                                delay: Math.random() * 2,
                            }}
                        />
                    ))}
                </div>

                {isLoading ? (
                    <div className="text-gray-300 text-xl relative z-10">{t('welcome.loading')}</div>
                ) : (
                    <div className="user-information w-[500px] mt-10 p-6 rounded-lg bg-black/20 backdrop-blur-sm border border-white/10 relative z-10">
                        <h2 className="text-2xl text-gray-300 font-bold mb-4">{t('welcome.title').replace('{name}', user.name)}</h2>
                        <p className="text-gray-100 mb-2">{t('welcome.email')} <span className="font-medium">{user.email}</span></p>
                        <p className="text-gray-200 mb-6">{t('welcome.protectedRoute')}</p>

                        {/* Action buttons */}
                        <div className="flex flex-col gap-4 m-4">
                            <button 
                                className="bg-[#FFF2D7] text-black font-semibold py-2 px-4 rounded-full cursor-pointer hover:bg-[#FFF2D7]/80 transition-colors w-full" 
                                onClick={handleBackToHome}
                            >
                                {t('welcome.backToHome')}
                            </button>
                            <button 
                                className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-full cursor-pointer transition-colors w-full" 
                                onClick={handleDeleteAccount}
                            >
                                {t('welcome.deleteAccount')}
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
}

export default WelcomePage;
