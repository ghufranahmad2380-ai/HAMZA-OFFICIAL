'use client';

import { motion } from 'framer-motion';
import { ArrowDown, Sparkles } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { siteConfig } from '../data/config';

export function Hero() {
  const { ref } = useScrollAnimation({ triggerOnce: true });

  const floatingVariants = {
    animate: {
      y: [0, -20, 0],
      opacity: [0.4, 0.7, 0.4],
      transition: { duration: 6, repeat: Infinity, ease: 'easeInOut' as const },
    },
  };

  const glowVariants = {
    animate: {
      scale: [1, 1.1, 1],
      opacity: [0.3, 0.5, 0.3],
      transition: { duration: 4, repeat: Infinity, ease: 'easeInOut' },
    },
  };

  const scrollIndicatorVariants = {
    animate: {
      y: [0, 10, 0],
      transition: { duration: 2, repeat: Infinity, ease: 'easeInOut' },
    },
  };

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ background: 'radial-gradient(ellipse at center, #FFE7F0 0%, #FFE7F0 50%, #FFF0F5 100%)' }}
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl"
          style={{ background: 'rgba(250, 105, 158, 0.15)' }}
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full blur-3xl"
          style={{ background: 'rgba(74, 221, 130, 0.15)' }}
          animate={{ scale: [1, 1.15, 1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full blur-3xl"
          style={{ background: 'rgba(255, 159, 199, 0.2)' }}
          animate={{ scale: [1, 1.1, 1], opacity: [0.4, 0.6, 0.4] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        />
{[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: Math.random() > 0.5 ? 'rgba(250, 105, 158, 0.8)' : 'rgba(74, 221, 130, 0.8)',
            }}
            animate={{
              scale: [0.5, 1, 0.5],
              opacity: [0.3, 1, 0.3],
              x: [0, (Math.random() - 0.5) * 100, 0],
              y: [0, (Math.random() - 0.5) * 100, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 4,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: Math.random() * 2,
            }}
          />
        ))}

        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border-2 rounded-full pointer-events-none"
          style={{ borderColor: 'rgba(250, 105, 158, 0.1)', borderStyle: 'dashed' }}
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] border-2 rounded-full pointer-events-none"
          style={{ borderColor: 'rgba(74, 221, 130, 0.1)', borderStyle: 'dashed' }}
          animate={{ rotate: -360 }}
          transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
        />
      </div>

      <div className="relative z-10 section-container px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            className="text-center lg:text-left"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
              className="inline-flex items-center gap-3 px-6 py-3 rounded-full mb-8"
              style={{ background: 'rgba(250, 105, 158, 0.1)', border: '1px solid rgba(250, 105, 158, 0.2)' }}
            >
              <Sparkles className="w-5 h-5" style={{ color: '#FA699E' }} />
              <span className="text-sm font-medium" style={{ color: '#FA699E' }}>
                Welcome to My Portfolio
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
              className="font-display text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight mb-6"
            >
              <span className="text-gray-900">{siteConfig.personalInfo.name}</span>
              <br />
              <span className="text-gradient">Creative Developer</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
              className="text-lg sm:text-xl text-gray-600 mb-10 max-w-xl leading-relaxed"
            >
              {siteConfig.personalInfo.bio}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5, ease: 'easeOut' }}
              className="flex flex-col sm:flex-row items-center sm:items-center justify-center lg:justify-start gap-4"
            >
              <a
                href="#about"
                className="btn-primary group"
              >
                <span>Discover More</span>
                <ArrowDown className="w-5 h-5 ml-2 transition-transform group-hover:translate-y-1" />
              </a>
              <a
                href="#gallery"
                className="px-8 py-4 text-primary-pink font-medium rounded-full border-2 transition-all duration-300 hover:bg-primary-pink hover:text-white"
                style={{ borderColor: '#FA699E' }}
              >
                View Gallery
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6, ease: 'easeOut' }}
              className="mt-16 flex flex-wrap items-center justify-center lg:justify-start gap-8 sm:gap-12"
            >
              <div className="text-center">
                <div className="text-3xl sm:text-4xl font-bold text-gradient">3+</div>
                <div className="text-sm text-gray-500 mt-1">Projects Completed</div>
              </div>
              <div className="w-px h-12 bg-gradient-to-b from-transparent via-primary-pink to-transparent"></div>
              <div className="text-center">
                <div className="text-3xl sm:text-4xl font-bold green-gradient">9</div>
                <div className="text-sm text-gray-500 mt-1">Photos in Gallery</div>
              </div>
              <div className="w-px h-12 bg-gradient-to-b from-transparent via-accent-green to-transparent"></div>
              <div className="text-center">
                <div className="text-3xl sm:text-4xl font-bold text-gradient">∞</div>
                <div className="text-sm text-gray-500 mt-1">Possibilities</div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 1, delay: 0.4, ease: 'easeOut' }}
            className="relative"
          >
            <div className="relative">
                <motion.div
                  className="absolute -inset-4 rounded-[50%]"
                  style={{
                    background: 'linear-gradient(135deg, rgba(250, 105, 158, 0.3), rgba(74, 221, 130, 0.3))',
                    filter: 'blur(30px)',
                  }}
                  animate={glowVariants}
                />

              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  className="absolute rounded-full"
                  style={{
                    width: 120 + i * 40,
                    height: 120 + i * 40,
                    top: '50%',
                    left: '50%',
                    marginTop: -60 - i * 20,
                    marginLeft: -60 - i * 20,
                    border: '2px dashed',
                    borderColor: i % 2 === 0 ? 'rgba(250, 105, 158, 0.2)' : 'rgba(74, 221, 130, 0.2)',
                  }}
                  animate={{
                    rotate: i % 2 === 0 ? 360 : -360,
                    borderRadius: ['50%', '30%', '50%', '30%', '50%'],
                  }}
                  transition={{
                    duration: 20 + i * 5,
                    repeat: Infinity,
                    ease: 'linear',
                  }}
                />
              ))}

              <div className="relative rounded-[50%] overflow-hidden">
                <img
                  src="/photos/WhatsApp Image 2026-11-10 at 10.55.37 PM.jpeg"
                  alt={siteConfig.personalInfo.name}
                  className="w-full h-auto block aspect-square object-cover"
                  style={{ width: '400px', height: '400px' }}
                />
                <div className="absolute inset-0 rounded-[50%] pointer-events-none"
                  style={{
                    boxShadow: 'inset 0 0 60px rgba(250, 105, 158, 0.3), 0 0 0 4px rgba(255, 255, 255, 0.5)',
                  }}
                />
              </div>

              <motion.div
                className="absolute -top-4 -right-4 w-20 h-20 rounded-2xl flex items-center justify-center"
                style={{ background: 'linear-gradient(135deg, #FA699E, #FF9FC7)' }}
                animate={floatingVariants}
              >
                <Sparkles className="w-8 h-8 text-white" />
              </motion.div>

              <motion.div
                className="absolute bottom-4 -left-4 w-16 h-16 rounded-2xl flex items-center justify-center"
                style={{ background: 'linear-gradient(135deg, #4ADD82, #22c55e)' }}
                animate={{
                  ...floatingVariants.animate,
                  transition: { ...floatingVariants.animate.transition, delay: 1 },
                }}
              >
                <span className="text-white font-bold text-xs">DEV</span>
              </motion.div>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-400"
          animate={scrollIndicatorVariants}
        >
          <span className="text-xs uppercase tracking-widest font-medium">Scroll to explore</span>
          <ArrowDown className="w-6 h-6" style={{ color: '#FA699E' }} />
        </motion.div>
      </div>
    </section>
  );
}
