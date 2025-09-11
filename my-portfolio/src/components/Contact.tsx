import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter } from 'lucide-react';
import { Badge } from './ui/badge';
import { useLanguage } from '../contexts/LanguageContext';


const Contact = () => {

    const { t } = useLanguage();

    // States
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<{ success: boolean; message: string } | null>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus(null);

        const formElement = e.currentTarget;
        const formDataToSend = new FormData(formElement);
        formDataToSend.append("access_key", "845a2812-a0f1-4ee8-a424-465c92a26ee0");

        try {
            const res = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formDataToSend,
            });

            const json = await res.json();
            console.log(json); // debug

            if (json.success) {
                setSubmitStatus({
                    success: true,
                    message: t('contact.successMessage'),
                });
                formElement.reset();
                setFormData({ name: "", email: "", subject: "", message: "" });
            } else {
                setSubmitStatus({
                    success: false,
                    message:
                        json.message || t('contact.errorMessage'),
                });
            }
        } catch (error) {
            console.error("Form submission error:", error);
            setSubmitStatus({
                success: false,
                message:
                    t('contact.unexpectedError'),
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    const contactInfo = [
        {
            icon: Mail,
            title: t('contact.email.title'),
            value: 'jose.vitor@example.com',
            href: 'mailto:jose.vitor@example.com'
        },
        {
            icon: Phone,
            title: t('contact.phone.title'),
            value: '+1 (555) 123-4567',
            href: 'tel:+15551234567'
        },
        {
            icon: MapPin,
            title: t('contact.location.title'),
            value: t('contact.location.value'),
            href: '#'
        }
    ];

    const socialLinks = [
        { icon: Github, href: '#', label: 'GitHub' },
        { icon: Linkedin, href: '#', label: 'LinkedIn' },
        { icon: Twitter, href: '#', label: 'Twitter' },
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

    return (
        <section id="contact" className='py-20 bg-background'>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >

                    <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                        {t('contact.title')} <span className="gradient-text">{t('contact.titleHighlight')}</span>
                    </h2>
                    <div className="w-20 h-1 bg-white rounded-full mx-auto mb-8"></div>

                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        {t('contact.subtitle')}
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-14">
                    {/* Contact form */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >

                        <div className='glass-effect rounded-2xl p-4 sm:p-6 md:p-8'>
                            <h3 className="text-2xl font-semibold mb-6">{t('contact.sendMessage')}</h3>
                            {submitStatus && (
                                <div
                                    className={`p-3 rounded-lg mb-4 text-center ${submitStatus.success ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'
                                        }`}
                                >
                                    {submitStatus.message}
                                </div>
                            )}

                            {/* Form */}
                            <form onSubmit={handleSubmit} className="space-y-6 rounded-lg border border-gray-600 p-6 sm:p-8 md:p-10">
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                                            {t('contact.name')}
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-ring focus:border-transparent transition-colors text-foreground placeholder-muted-foreground"
                                            placeholder={t('contact.namePlaceholder')}
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                                            {t('contact.email')}
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-ring focus:border-transparent transition-colors text-foreground placeholder-muted-foreground"
                                            placeholder={t('contact.emailPlaceholder')}
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                                        {t('contact.subject')}
                                    </label>
                                    <input
                                        type="text"
                                        id="subject"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-ring focus:border-transparent transition-colors text-foreground placeholder-muted-foreground"
                                        placeholder={t('contact.subjectPlaceholder')}
                                    />
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                                        {t('contact.message')}
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        rows={6}
                                        className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-ring focus:border-transparent transition-colors text-foreground placeholder-muted-foreground resize-none"
                                        placeholder={t('contact.messagePlaceholder')}
                                    />
                                </div>

                                <motion.button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full px-6 py-3 bg-primary text-primary-foreground cursor-pointer hover:bg-primary/90 disabled:bg-muted font-medium rounded-lg transition-colors flex items-center justify-center gap-2"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    {isSubmitting ? (
                                        <>
                                            <div className="w-5 h-5 border-2 border-border/30 border-t-primary rounded-full animate-spin"></div>
                                            {t('contact.sending')}
                                        </>
                                    ) : (
                                        <>
                                            <Send size={20} />
                                            {t('contact.sendMessageBtn')}
                                        </>
                                    )}
                                </motion.button>
                            </form>
                        </div>
                    </motion.div>

                    {/* Contact information */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="space-y-8"
                    >

                        <motion.div variants={itemVariants}>
                            <h3 className="text-2xl font-semibold mb-6">{t('contact.contactInfo')}</h3>
                            <div className="space-y-6">
                                {contactInfo.map((info, index) => (
                                    <motion.a
                                        key={index}
                                        href={info.href}
                                        className="flex items-center gap-4 p-4 glass-effect rounded-xl hover:bg-white/10 transition-all duration-300 group"
                                        whileHover={{ x: 5 }}
                                    >
                                        <div className="w-12 h-12 bg-accent-primary/20 rounded-lg flex items-center justify-center group-hover:bg-accent-primary/30 transition-colors">
                                            <info.icon className="w-6 h-6 text-accent-primary" />
                                        </div>
                                        <div className="border-l-2 border-border pl-4">
                                            <div className="text-sm text-muted-foreground">{info.title}</div>
                                            <div className="font-medium text-foreground">{info.value}</div>
                                        </div>
                                    </motion.a>
                                ))}
                            </div>
                        </motion.div>

                        <motion.div variants={itemVariants}>
                            <h4 className="text-xl font-semibold mb-4">{t('contact.followMe')}</h4>
                            <div className="flex gap-4">
                                {socialLinks.map((link, index) => (
                                    <motion.a
                                        key={index}
                                        href={link.href}
                                        className="w-12 h-12 glass-effect rounded-lg flex items-center justify-center hover:bg-accent-primary/20 transition-colors group"
                                        whileHover={{ scale: 1.1, rotate: 5 }}
                                        whileTap={{ scale: 0.9 }}
                                        aria-label={link.label}
                                    >
                                        <link.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                                    </motion.a>
                                ))}
                            </div>
                        </motion.div>

                        <motion.div variants={itemVariants} className="glass-effect rounded-xl p-6 border border-border">
                            <h4 className="text-xl font-semibold mb-3">{t('contact.workTogether')}</h4>
                            <p className="text-muted-foreground mb-4">
                                {t('contact.workTogetherDesc')}
                            </p>
                            <div className="flex flex-wrap gap-2">
                                {['React', 'TypeScript', 'JavaScript', 'Node.js', 'Python', 'MySQL', 'MongoDB'].map((skill) => (
                                    <Badge
                                        key={skill}
                                        variant="default"
                                    >
                                        {skill}
                                    </Badge>
                                ))}
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default Contact;