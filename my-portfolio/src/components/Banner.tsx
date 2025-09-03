// Imports
// import React from 'react'
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Download, ChevronDown, Volume2, VolumeX } from 'lucide-react';
import Comp412 from './ui/comp-412';
// import Comp296 from './ui/comp-296';
// import React, { useState } from 'react';

interface BannerProps {
  isPlaying: boolean;
  setIsPlaying: (playing: boolean) => void;
}

const Banner = ({ isPlaying, setIsPlaying }:BannerProps) => {
  // const [showChangelogNotification, setShowChangelogNotification] = useState(true);

  // const handleCloseChangelog = () => {
  //   setShowChangelogNotification(false);
  // };

  // Social Links for Banner
  const socialLinks = [
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Mail, href: '#contact', label: 'Email' },
  ];

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id='home' className='min-h-screen flex items-center justify-center relative overflow-hidden'>

      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {[...Array(100)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white/60 rounded-full"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
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

      <div className="relative z-10 max-w-4xl mt-8 px-4 sm:px-6 lg:px-8 text-center">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >

          {/* Headline H1 Text */}
          <motion.h1
            className="text-3xl text-gray-400 sm:text-5xl lg:text-4xl font-bold mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Olá, eu sou{' '}
            <span className="text-gray-100"> José Vitor </span>
            <motion.button
              onClick={() => setIsPlaying(!isPlaying)}
              className="ml-2 p-1 rounded-full text-gray-400 hover:text-accent-primary transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-gray-600 focus:ring-opacity-75"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label={isPlaying ? 'Pausar música' : 'Tocar música'}
            >
              {isPlaying ? <Volume2 size={24} /> : <VolumeX size={24} />}
            </motion.button>
          </motion.h1>

          {/* Headline p Text */}
          <motion.p
            className="text-lg sm:text-xl text-gray-300 mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Desenvolvedor Web Pleno, apaixonado por criar experiências digitais bonitas, funcionais e centradas no usuário.
          </motion.p>

          {/* Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <motion.button
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-2 bg-accent-primary hover:bg-accent-secondary text-dark-100 font-medium rounded-lg transition-all duration-200 glow-border cursor-pointer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Ver Meus Projetos
            </motion.button>

            <motion.button
              className="px-8 py-3 border border-gray-600 hover:border-accent-primary text-gray-300 hover:text-accent-primary font-medium rounded-lg transition-all duration-200 flex items-center gap-2 cursor-pointer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Download size={20} />
              Baixar CV
            </motion.button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            className="flex justify-center space-x-4 space-y-0"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            {socialLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.href}
                className="p-3 text-gray-400 hover:text-accent-primary transition-colors duration-200 glass-effect rounded-full"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                aria-label={link.label}
              >
                <link.icon size={24} />
              </motion.a>
            ))}
          </motion.div>

          {/* Trusted by */}
          <motion.div
            className="flex items-center justify-center mt-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <Comp412 />
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-gray-400 hover:text-accent-primary transition-colors"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ChevronDown size={32} />
      </motion.button>
    </section>
  )
}

export default Banner;