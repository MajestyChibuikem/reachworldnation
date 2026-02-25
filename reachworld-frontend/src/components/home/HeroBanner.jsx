import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronLeft, FaChevronRight, FaChevronDown } from 'react-icons/fa';

const HeroBanner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      titleLine1: "He was next in line",
      titleLine2: "Until Everything Changed...",
      subtitle: 'As the first son of a traditional priest, his path seemed predetermined — until grace rewrote his story.',
      image: '/story/before-after.jpg',
      cta: 'Read His Story',
      duration: 7000
    },
    {
      titleLine1: 'A Life Transformed',
      titleLine2: 'by Grace',
      subtitle: 'He walked away from everything he knew — the traditions, the rituals, the inheritance — and answered the call of God.',
      image: '/story/traditional-old.jpg',
      cta: 'Watch His Testimony',
      duration: 5000
    },
    {
      titleLine1: 'Now Reaching',
      titleLine2: '150+ Nations',
      subtitle: '30+ books published. Thousands of lives transformed. A global ministry born from one man\'s obedience.',
      image: '/ministry/preaching.jpg',
      cta: 'Explore the Ministry',
      duration: 5000
    },
    {
      titleLine1: 'Your Transformation',
      titleLine2: 'Awaits',
      subtitle: 'If God could take a dibia\'s son and make him a minister to nations, imagine what He can do with your story.',
      image: '/ministry/david-in-church.jpg',
      cta: 'Begin Your Journey',
      duration: 5000
    }
  ];

  const goToNext = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, [slides.length]);

  useEffect(() => {
    const timer = setTimeout(goToNext, slides[currentSlide].duration);
    return () => clearTimeout(timer);
  }, [currentSlide, goToNext, slides]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative h-[600px] md:h-[700px] overflow-hidden">
      {/* Slides */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7 }}
        >
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center opacity-60"
            style={{
              backgroundImage: `url(${slides[currentSlide].image})`,
            }}
          >
            <div className="absolute inset-0 bg-primary-blue/50"></div>
          </div>

          {/* Content */}
          <div className="relative z-10 container mx-auto px-4 h-full flex items-center justify-center text-center text-neutral-white">
            <div className="max-w-6xl">
              <motion.h1
                className="text-5xl md:text-7xl font-display font-black mb-8 leading-none tracking-tight"
                initial={{ y: 100, opacity: 0, scale: 0.9 }}
                animate={{ y: 0, opacity: 1, scale: 1 }}
                transition={{
                  delay: 0.2,
                  duration: 0.8,
                  type: "spring",
                  stiffness: 100
                }}
              >
                <span className="block text-neutral-white">{slides[currentSlide].titleLine1}</span>
                <span className="block text-primary-gold mt-2">
                  {slides[currentSlide].titleLine2}
                </span>
              </motion.h1>

              <motion.p
                className="text-xl md:text-3xl mb-10 font-light text-neutral-cream max-w-4xl mx-auto leading-relaxed"
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                {slides[currentSlide].subtitle}
              </motion.p>

              <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              >
                <motion.button
                  className="bg-primary-gold text-neutral-dark text-xl font-bold px-10 py-5 rounded-xl shadow-2xl hover:bg-primary-gold-light transition-all duration-300"
                  whileHover={{ scale: 1.05, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="relative z-10">{slides[currentSlide].cta}</span>
                </motion.button>
                <motion.button
                  className="bg-neutral-white text-primary-blue text-xl font-semibold px-10 py-5 rounded-xl hover:bg-neutral-cream transition-all duration-300 shadow-lg"
                  whileHover={{ scale: 1.05, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Learn More
                </motion.button>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Arrows */}
      <button
        onClick={goToPrevious}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-primary-gold hover:bg-primary-gold-light text-neutral-dark p-4 rounded-full transition-all duration-300 shadow-lg"
      >
        <FaChevronLeft className="text-xl" />
      </button>

      <button
        onClick={() => { goToNext(); }}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-primary-gold hover:bg-primary-gold-light text-neutral-dark p-4 rounded-full transition-all duration-300 shadow-lg"
      >
        <FaChevronRight className="text-xl" />
      </button>

      {/* Scroll Down Indicator */}
      <motion.div
        className="absolute bottom-20 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <FaChevronDown className="text-primary-gold text-2xl" />
      </motion.div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? 'bg-primary-gold w-8'
                : 'bg-neutral-white/70 hover:bg-neutral-white w-3'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroBanner;
