import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { FaHeart, FaPrayingHands, FaGlobeAmericas, FaFire, FaArrowRight } from 'react-icons/fa';

const StorySection = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  const storyBeats = [
    {
      icon: FaHeart,
      title: "The Dibia's Son",
      description: "Born into tradition",
      accentColor: '#dc2626',
      image: '/story/traditional-old.jpg',
      detail: "David S. Okeke was born as the first son of a renowned native doctor in Arondizuogu, Imo State, Nigeria. He grew up immersed in the practices and rituals of his father and was groomed to carry on the family's traditional legacy"
    },
    {
      icon: FaPrayingHands,
      title: "The Encounter",
      description: "God reached in",
      accentColor: '#7c3aed',
      image: '/story/traditional-old4.jpg',
      detail: "In the midst of a life defined by tradition and darkness, God reached in with an unmistakable call. David heard the voice of God — a call so strong, so clear, it could not be ignored."
    },
    {
      icon: FaFire,
      title: "The Transformation",
      description: "Everything changed",
      accentColor: '#d4af37',
      image: '/story/traditional-old5.jpg',
      detail: "David walked away from everything he knew — the shrine, the rituals, the inheritance — and surrendered his life fully to Christ. He was born again, delivered, and set ablaze for the Gospel."
    },
    {
      icon: FaGlobeAmericas,
      title: "The Mission",
      description: "Reaching the nations",
      accentColor: '#0d9488',
      image: '/ministry/old-podium.jpg',
      detail: "Today, David S. Okeke leads Reachworld Nation Ministries — with 30+ books published, crusades across continents, and a ministry impacting over 150 nations for the kingdom of God."
    }
  ];

  const galleryImages = [
    { src: '/story/traditional-old4.jpg', label: 'Early Years' },
    { src: '/story/traditional-old5.jpg', label: 'The Old Life' },
    { src: '/ministry/old-podium.jpg', label: 'Early Years in the Ministry' },
    { src: '/ministry/david-studying.jpg', label: 'Mission Driven' },
    { src: '/ministry/preaching.jpg', label: 'Today' },
    { src: '/ministry/david-in-church.jpg', label: 'Service in Ministry' },
  ];

  return (
    <section ref={ref} className="relative py-32 text-neutral-white">
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          style={{ y, opacity }}
        >
          <motion.h2
            className="text-5xl md:text-6xl font-black mb-6 leading-none"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            From Darkness
            <br />
            <span className="text-primary-gold">
              Into His Light
            </span>
          </motion.h2>
          <motion.p
            className="text-2xl md:text-3xl text-neutral-cream max-w-3xl mx-auto font-light"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            The story of how a dibia's first son became a minister to nations.
          </motion.p>
        </motion.div>

        {/* Side-by-Side Transformation Comparison */}
        <motion.div
          className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-4 mb-20 max-w-4xl mx-auto"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          {/* Before */}
          <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-red-500/30 w-full md:w-[45%]">
            <img
              src="/story/traditional-old.jpg"
              alt="David S. Okeke — Before Christ"
              className="w-full h-72 object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-4 text-center">
              <p className="text-red-400 font-bold text-lg">The Dibia's Son</p>
            </div>
          </div>

          {/* Arrow */}
          <motion.div
            className="flex-shrink-0"
            animate={{ x: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="bg-primary-gold rounded-full p-4 shadow-lg">
              <FaArrowRight className="text-3xl text-neutral-dark md:rotate-0 rotate-90" />
            </div>
          </motion.div>

          {/* After */}
          <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-primary-gold/30 w-full md:w-[45%]">
            <img
              src="/ministry/david-in-church.jpg"
              alt="David S. Okeke — God's Minister"
              className="w-full h-72 object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-4 text-center">
              <p className="text-primary-gold font-bold text-lg">God's Minister</p>
            </div>
          </div>
        </motion.div>

        {/* Story Journey Cards with Images */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {storyBeats.map((beat, index) => (
            <motion.div
              key={index}
              className="relative group"
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              {/* Connection Line */}
              {index < storyBeats.length - 1 && (
                <div className="hidden lg:block absolute top-24 left-full w-full h-1 bg-gradient-to-r from-neutral-white/30 to-transparent -translate-x-4 z-0"></div>
              )}

              {/* Card */}
              <div className="relative bg-neutral-white rounded-2xl overflow-hidden h-full shadow-2xl hover:shadow-primary-gold/30 transition-all duration-500 group-hover:scale-105 border-2 border-neutral-light">
                {/* Card Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={beat.image}
                    alt={beat.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  {/* Step Number */}
                  <div
                    className="absolute top-4 right-4 w-12 h-12 text-neutral-white rounded-full flex items-center justify-center font-black text-xl shadow-lg"
                    style={{ backgroundColor: beat.accentColor }}
                  >
                    {index + 1}
                  </div>
                  {/* Icon overlay */}
                  <div className="absolute bottom-4 left-4">
                    <beat.icon className="text-3xl text-white drop-shadow-lg" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col items-center text-center space-y-3">
                  <h3 className="text-2xl font-black tracking-tight text-primary-blue">{beat.title}</h3>
                  <p className="text-lg font-semibold text-neutral-gray">{beat.description}</p>
                  <p className="text-sm text-neutral-gray leading-relaxed">{beat.detail}</p>
                </div>

                {/* Bottom Accent */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-primary-gold group-hover:h-2 transition-all duration-300"></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Photo Gallery Strip */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-2xl font-bold text-center text-neutral-cream mb-8">Moments Along the Journey</h3>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-3">
            {galleryImages.map((img, index) => (
              <motion.div
                key={index}
                className="relative group rounded-xl overflow-hidden shadow-lg aspect-square"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <img
                  src={img.src}
                  alt={img.label}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all duration-300 flex items-end justify-center">
                  <p className="text-white text-sm font-semibold p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {img.label}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <p className="text-xl text-neutral-cream mb-6 italic">
            "If He did it for me, He'll do it for you."
          </p>
          <motion.button
            className="bg-primary-gold text-neutral-dark text-2xl font-black px-12 py-6 rounded-2xl shadow-2xl hover:bg-primary-gold-light transition-all duration-300"
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10">Begin Your Journey</span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default StorySection;
