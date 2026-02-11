import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { FaCalendarAlt, FaMapMarkerAlt, FaClock } from 'react-icons/fa';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const EventsCarousel = () => {
  const events = [
    {
      title: 'Supernatural Visitation',
      date: 'January 7-9, 2023',
      time: '8:00 AM - 8:00 PM',
      location: 'Enugu, Nigeria',
      description: 'A Ministers Conference and Evening Rally Crusade with Apostle David Okeke and other anointed ministers.',
      image: '/events/visitation-flyer.jpg',
      featured: true
    },
    {
      title: 'Atmosphere of Miracles',
      date: 'October 22, 2021',
      time: '12:00 PM',
      location: 'Owerri, Imo State',
      description: 'Experience signs, wonders, and the miraculous power of God with David S. Okeke and other ministers.',
      image: '/events/atmosphere-of-miracles-flyer.jpg',
      featured: false
    },
    {
      title: 'Wake Up The Mighty Men',
      date: 'May 20-23, 2020',
      time: '10:00 AM - 5:30 PM',
      location: 'Imo State, Nigeria',
      description: 'Revival Crusade & Ministers Conference with David S. Okeke and Apostle Uche Oruche.',
      image: '/events/revival-flyer.jpg',
      featured: false
    },
    {
      title: 'Awakening Service',
      date: 'May 2, 2020',
      time: '10:00 AM',
      location: 'Assemblies of God Church, Imo State',
      description: 'A powerful service of spiritual awakening featuring guest minister David S. Okeke.',
      image: '/events/awakening-flyer.jpg',
      featured: false
    },
    {
      title: 'Rejuvenate The Youth',
      date: 'September 29, 2020',
      time: '6:30 PM - 9:30 PM',
      location: 'Virtual (Zoom)',
      description: 'An international youth Zoom call bringing together young ministers from Nigeria, India, USA, and Myanmar.',
      image: '/events/zoomcall-flyer.jpg',
      featured: false
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-deep-charcoal mb-4">
            Upcoming Events
          </h2>
          <p className="text-xl text-gray-600">
            Join us for life-changing conferences and gatherings
          </p>
        </motion.div>

        {/* Carousel */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              640: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            className="pb-12"
          >
            {events.map((event, index) => (
              <SwiperSlide key={index}>
                <div className="bg-gradient-to-br from-gray-50 to-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 h-full">
                  {/* Event Image */}
                  <div className="h-48 relative overflow-hidden">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
                    />
                    {event.featured && (
                      <div className="absolute top-4 right-4 bg-brand-gold text-deep-charcoal px-3 py-1 rounded-full text-sm font-semibold shadow-lg">
                        Featured
                      </div>
                    )}
                  </div>

                  {/* Event Details */}
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-deep-charcoal mb-3">
                      {event.title}
                    </h3>

                    <div className="space-y-2 mb-4">
                      <div className="flex items-center text-gray-600">
                        <FaCalendarAlt className="mr-2 text-royal-blue" />
                        <span>{event.date}</span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <FaClock className="mr-2 text-royal-blue" />
                        <span>{event.time}</span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <FaMapMarkerAlt className="mr-2 text-royal-blue" />
                        <span>{event.location}</span>
                      </div>
                    </div>

                    <p className="text-gray-700 mb-4">
                      {event.description}
                    </p>

                    <button className={`w-full ${
                      event.featured ? 'btn-primary' : 'btn-secondary'
                    } text-center`}>
                      Register Now
                    </button>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>

        {/* View All Events Button */}
        <motion.div
          className="text-center mt-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <a
            href="/events"
            className="inline-block text-royal-blue font-semibold text-lg hover:text-brand-gold transition-colors duration-300"
          >
            View All Events →
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default EventsCarousel;
