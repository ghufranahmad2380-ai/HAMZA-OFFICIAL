'use client';

import { motion } from 'framer-motion';
import { 
  MapPin, Heart, Coffee, Music, BookOpen, Camera, Gamepad2, PenTool, UtensilsCrossed,
  Palette, Wrench, Layers, Lightbulb, Sparkles, Target, Brain, Smile
} from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { siteConfig } from '../data/config';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  MapPin, Heart, Coffee, Music, BookOpen, Camera, Gamepad2, PenTool, UtensilsCrossed,
  Palette, Wrench, Layers, Lightbulb, Sparkles, Target, Brain, Smile
};

const cards = [
  { title: 'Location', icon: 'MapPin', color: 'primary-pink', content: siteConfig.personalInfo.location, desc: 'Where I call home' },
  { title: 'Interests', icon: 'Heart', color: 'primary-pink', content: siteConfig.interests.map(i => i.title).join(', '), desc: 'Things that spark curiosity' },
  { title: 'Hobbies', icon: 'Coffee', color: 'accent-green', content: siteConfig.hobbies.map(h => h.title).join(', '), desc: 'How I spend free time' },
  { title: 'Personality', icon: 'Smile', color: 'primary-pink', content: siteConfig.personalityTraits.map(p => p.title).join(', '), desc: 'Traits that define me' },
  { title: 'Favorites', icon: 'Sparkles', color: 'accent-green', content: siteConfig.favoriteThings.map(f => f.category).join(', '), desc: 'My go-to choices' },
];

export function PersonalInfo() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section ref={ref} id="personal" className="relative py-24 lg:py-32 px-6" style={{ background: '#FFE7F0' }}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full text-sm font-medium mb-4"
            style={{ background: 'rgba(250, 105, 158, 0.1)', color: '#FA699E' }}>
            Personal Info
          </span>
          <h2 className="section-title font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900">
            More About Me
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={isVisible ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 30, scale: 0.95 }}
              transition={{ duration: 0.6, delay: 0.1 + i * 0.1, ease: 'easeOut' }}
              className="card group p-6 relative overflow-hidden"
            >
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5"
                  style={{ background: card.color === 'primary-pink' ? 'rgba(250, 105, 158, 0.1)' : 'rgba(74, 221, 130, 0.1)' }}
                >
                  <iconMap[card.icon] className="w-7 h-7" style={{ color: card.color === 'primary-pink' ? '#FA699E' : '#4ADD82' }} />
                </div>
                <h3 className="font-display text-xl font-bold text-gray-900 mb-2">{card.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{card.desc}</p>
                <div className="text-gray-900 font-medium leading-relaxed">{card.content}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}