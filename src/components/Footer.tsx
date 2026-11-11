'use client';

import { motion } from 'framer-motion';
import { 
  Mail, 
  Heart, Sparkles, Code, Palette, Camera
} from 'lucide-react';
import { GithubIcon, LinkedinIcon, InstagramIcon, TwitterIcon } from './BrandIcons';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { siteConfig } from '../data/config';

export function Footer() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  const socialIcons: Record<string, React.ComponentType<{ className?: string }>> = {
    Github: GithubIcon,
    Linkedin: LinkedinIcon,
    Instagram: InstagramIcon,
    Twitter: TwitterIcon,
    Mail,
  };

  return (
    <footer
      ref={ref}
      className="relative py-20 lg:py-24 px-6"
      style={{ background: 'linear-gradient(180deg, #FFE7F0 0%, #FFF0F5 100%)' }}
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] border-2 rounded-full"
          style={{ borderColor: 'rgba(250, 105, 158, 0.05)', borderStyle: 'dashed' }}
          animate={{ rotate: 360 }}
          transition={{ duration: 80, repeat: Infinity, ease: 'linear' }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] border-2 rounded-full"
          style={{ borderColor: 'rgba(74, 221, 130, 0.05)', borderStyle: 'dashed' }}
          animate={{ rotate: -360 }}
          transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
        />
      </div>

      <div className="relative z-10 section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full mb-6"
            style={{ background: 'rgba(250, 105, 158, 0.1)', border: '1px solid rgba(250, 105, 158, 0.2)' }}
          >
            <Heart className="w-5 h-5" style={{ color: '#FA699E' }} />
            <Sparkles className="w-5 h-5" style={{ color: '#4ADD82' }} />
            <Code className="w-5 h-5" style={{ color: '#FA699E' }} />
            <Palette className="w-5 h-5" style={{ color: '#4ADD82' }} />
            <Camera className="w-5 h-5" style={{ color: '#FA699E' }} />
          </div>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Let&apos;s Create Something
            <br />
            <span className="text-gradient">Beautiful Together</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            I&apos;m always open to new projects, collaborations, and interesting conversations. 
            Feel free to reach out!
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {siteConfig.socialLinks.map((social, i) => {
            const Icon = socialIcons[social.icon];
            return (
            <motion.a
              key={social.platform}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 + i * 0.08, ease: 'easeOut' }}
              whileHover={{ scale: 1.1, y: -3 }}
              whileTap={{ scale: 0.95 }}
              className="w-14 h-14 rounded-2xl flex items-center justify-center text-white transition-all duration-300 group"
              style={{ 
                background: `linear-gradient(135deg, ${i % 2 === 0 ? '#FA699E' : '#4ADD82'}, ${i % 2 === 0 ? '#FF9FC7' : '#22c55e'})`,
                boxShadow: `0 8px 25px -5px ${i % 2 === 0 ? 'rgba(250, 105, 158, 0.4)' : 'rgba(74, 221, 130, 0.4)'}`,
              }}
              aria-label={social.platform}
            >
              <Icon className="w-7 h-7" />
            </motion.a>
            );
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
          className="border-t border-primary-pink/20 pt-8 text-center"
        >
          <p className="text-gray-600 mb-4">
            Crafted with <Heart className="inline w-4 h-4 align-middle" style={{ color: '#FA699E' }} /> 
            by {siteConfig.personalInfo.name} using React, TypeScript & Tailwind CSS
          </p>
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} {siteConfig.personalInfo.name}. All rights reserved.
          </p>
          <div className="mt-6 flex justify-center gap-8 text-sm text-gray-500">
            <a href="#hero" className="hover:text-primary-pink transition-colors">Back to Top</a>
            <a href="#about" className="hover:text-primary-pink transition-colors">About</a>
            <a href="#gallery" className="hover:text-primary-pink transition-colors">Gallery</a>
            <a href="#personal" className="hover:text-primary-pink transition-colors">Personal</a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
