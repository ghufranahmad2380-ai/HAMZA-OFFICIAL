'use client';

import { motion } from 'framer-motion';
import { MapPin, Heart, Star, Sparkles } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { siteConfig } from '../data/config';

export function About() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.15 });

  return (
    <section
      ref={ref}
      id="about"
      className="relative py-24 lg:py-32 px-6"
      style={{ background: '#FFE7F0' }}
    >
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full text-sm font-medium mb-4"
            style={{ background: 'rgba(250, 105, 158, 0.1)', color: '#FA699E' }}>
            About Me
          </span>
          <h2 className="section-title font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900">
            Get to Know Me Better
          </h2>
        </motion.div>

<motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden">
              <img
                src="/photos/WhatsApp Image 2026-11-10 at 10.55.38 PM.jpeg"
                alt={siteConfig.personalInfo.name}
                className="w-full h-auto object-cover"
                style={{ height: '500px' }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <h3 className="font-display text-2xl font-bold mb-2">{siteConfig.personalInfo.name}</h3>
                <p className="flex items-center gap-2 opacity-90">
                  <MapPin className="w-4 h-4" />
                  {siteConfig.personalInfo.location}
                </p>
              </div>
            </div>

            <motion.div
              className="absolute -bottom-6 -left-6 w-24 h-24 rounded-2xl flex items-center justify-center"
              style={{ background: 'linear-gradient(135deg, #FA699E, #FF9FC7)' }}
              animate={{ scale: [1, 1.05, 1], rotate: [0, 2, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            >
              <Heart className="w-8 h-8 text-white" />
            </motion.div>

            <motion.div
              className="absolute -top-4 -right-4 w-20 h-20 rounded-2xl flex items-center justify-center"
              style={{ background: 'linear-gradient(135deg, #4ADD82, #22c55e)' }}
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
            >
              <Star className="w-8 h-8 text-white" />
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: 40 }}
            transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
            className="space-y-8"
          >
<div className="prose max-w-none">
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                {siteConfig.personalInfo.bio}
              </p>
              <p className="text-gray-600 leading-relaxed">
                Based in {siteConfig.personalInfo.location}, I specialize in creating modern, 
                responsive, and visually stunning websites using React, TypeScript, and Tailwind CSS. 
                My passion lies in crafting delightful user experiences through thoughtful design 
                and smooth animations.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 pt-4 border-t border-primary-pink/20">
              <div className="flex items-center gap-3 p-4 rounded-2xl bg-white/60 backdrop-blur-sm border border-white/20">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ background: 'rgba(250, 105, 158, 0.1)' }}>
                  <MapPin className="w-6 h-6" style={{ color: '#FA699E' }} />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Location</p>
                  <p className="font-medium text-gray-900">{siteConfig.personalInfo.location}</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 rounded-2xl bg-white/60 backdrop-blur-sm border border-white/20">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ background: 'rgba(74, 221, 130, 0.1)' }}>
                  <Sparkles className="w-6 h-6" style={{ color: '#4ADD82' }} />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Specialty</p>
                  <p className="font-medium text-gray-900">Web Development</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 rounded-2xl bg-white/60 backdrop-blur-sm border border-white/20">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ background: 'rgba(255, 159, 199, 0.2)' }}>
                  <Heart className="w-6 h-6" style={{ color: '#FA699E' }} />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Focus</p>
                  <p className="font-medium text-gray-900">UI/UX & Animation</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 rounded-2xl bg-white/60 backdrop-blur-sm border border-white/20">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ background: 'rgba(74, 221, 130, 0.1)' }}>
                  <Star className="w-6 h-6" style={{ color: '#4ADD82' }} />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Status</p>
                  <p className="font-medium text-gray-900">Available for Projects</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">