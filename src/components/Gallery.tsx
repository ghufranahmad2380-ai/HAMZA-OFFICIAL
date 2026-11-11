'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { Expand, ChevronLeft, ChevronRight, X, Camera, Sparkles } from 'lucide-react';
import { useState } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { siteConfig } from '../data/config';

export function Gallery() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const handleImageClick = (index: number) => setSelectedImage(index);
  const handleClose = () => setSelectedImage(null);
  const handleNext = () => selectedImage !== null && selectedImage < siteConfig.galleryImages.length - 1 && setSelectedImage(selectedImage + 1);
  const handlePrev = () => selectedImage !== null && selectedImage > 0 && setSelectedImage(selectedImage - 1);

  const gridLayout = [
    { cols: 'col-span-2 row-span-2', index: 0 },
    { cols: 'col-span-1 row-span-1', index: 1 },
    { cols: 'col-span-1 row-span-1', index: 2 },
    { cols: 'col-span-2 row-span-1', index: 3 },
    { cols: 'col-span-1 row-span-2', index: 4 },
    { cols: 'col-span-1 row-span-2', index: 5 },
    { cols: 'col-span-2 row-span-1', index: 6 },
    { cols: 'col-span-1 row-span-1', index: 7 },
    { cols: 'col-span-1 row-span-1', index: 8 },
  ];

  return (
    <section ref={ref} id="gallery" className="relative py-24 lg:py-32 px-6" style={{ background: '#FFE7F0' }}>
<motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full text-sm font-medium mb-4"
            style={{ background: 'rgba(250, 105, 158, 0.1)', color: '#FA699E' }}>
            My Gallery
          </span>
          <h2 className="section-title font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900">
            Captured Moments
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            A collection of my favorite photographs and creative captures
          </p>
        </motion.div>

        <div className="relative">
          <motion.div
            className="grid grid-cols-2 gap-4 lg:grid-cols-6 lg:grid-rows-4"
            style={{ gridAutoFlow: 'dense' }}
          >
            {gridLayout.map((item, i) => (
              <motion.div
                key={item.index}
                className={`${item.cols} relative group`}
                initial={{ opacity: 0, scale: 0.9, y: 30 }}
                animate={isVisible ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.9, y: 30 }}
                transition={{ duration: 0.6, delay: 0.1 + i * 0.08, ease: 'easeOut' }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="relative aspect-square lg:aspect-[4/3] overflow-hidden rounded-2xl">
                  <img
                    src={siteConfig.galleryImages[item.index].src}
                    alt={siteConfig.galleryImages[item.index].alt}
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-4 left-4 right-4 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-between">
                    <div className="flex items-center gap-2 text-white">
                      <Camera className="w-4 h-4" />
                      <span className="text-sm font-medium">{siteConfig.galleryImages[item.index].alt}</span>
                    </div>
                    <button
                      onClick={() => handleImageClick(item.index)}
                      className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/30 transition-colors"
                      aria-label="View full size"
                    >
                      <Expand className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="absolute -bottom-8 -right-8 w-32 h-32 rounded-2xl flex items-center justify-center pointer-events-none"
            style={{ background: 'linear-gradient(135deg, #FA699E, #FF9FC7)' }}
            animate={{ scale: [1, 1.1, 1], rotate: [0, 3, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
          >
            <Sparkles className="w-10 h-10 text-white" />
          </motion.div>
        </div>
      </div>
<AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm"
            onClick={handleClose}
            role="dialog"
            aria-modal="true"
            aria-label="Image preview"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-5xl max-h-[90vh] w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={siteConfig.galleryImages[selectedImage].src}
                alt={siteConfig.galleryImages[selectedImage].alt}
                className="w-full h-auto max-h-[80vh] object-contain rounded-xl shadow-2xl"
              />
              <button
                onClick={handleClose}
                className="absolute -top-14 right-0 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/20 transition-colors"
                aria-label="Close"
              >
                <X className="w-6 h-6" />
              </button>
              {selectedImage > 0 && (
                <button
                  onClick={handlePrev}
                  className="absolute left-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/20 transition-colors"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
              )}
              {selectedImage < siteConfig.galleryImages.length - 1 && (
                <button
                  onClick={handleNext}
                  className="absolute right-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/20 transition-colors"
                  aria-label="Next image"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              )}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center text-white"
              >
                <p className="font-medium">{siteConfig.galleryImages[selectedImage].alt}</p>
                <p className="text-sm opacity-60 mt-1">
                  {selectedImage + 1} of {siteConfig.galleryImages.length}
                </p>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}