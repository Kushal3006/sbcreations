import React from 'react';
import { motion } from 'framer-motion';
import { Instagram } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

const InstagramFeed: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0
    }
  };

  const instagramPosts = [
    {
      id: 1,
      image: '/p1.jpg',
      likes: 234,
      comments: 12
    },
    {
      id: 2,
      image: '/p2.jpg',
      likes: 187,
      comments: 8
    },
    {
      id: 3,
      image: '/p3.jpg',
      likes: 342,
      comments: 15
    },
    {
      id: 4,
      image: '/p4.jpg',
      likes: 156,
      comments: 6
    }
  ];

  return (
    <section className="py-20 px-4 md:px-8 bg-white">
      <div className="container mx-auto">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-800 mb-4">
            Follow Our Journey
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            Get inspired by our latest creations and behind-the-scenes moments on Instagram.
          </p>
          <a
            href="https://instagram.com/_sbcreation22"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 text-teal-600 hover:text-teal-700 font-medium"
          >
            <Instagram size={24} />
            <span>@_sbcreation22</span>
          </a>
        </motion.div>

        <motion.div
          variants={containerVariants}
          className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4"
        >
          {instagramPosts.map((post) => (
            <motion.div
              key={post.id}
              variants={itemVariants}
              className="relative group overflow-hidden rounded-lg"
            >
              <img
                src={post.image}
                alt="Instagram post"
                className="w-full aspect-square object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={containerVariants}
          className="text-center mt-12"
        >
          <a
            href="https://instagram.com/_sbcreation22"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-[#8B7355] to-[#A0937D] text-white rounded-full hover:from-[#7A6449] hover:to-[#8B7355] transition-all duration-300 shadow-lg hover:shadow-xl font-serif font-medium tracking-wide"
          >
            <Instagram size={20} className="mr-2" />
            Follow Us on Instagram
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default InstagramFeed;