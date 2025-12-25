'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Navigation from '@/components/Navigation';
import FloatingActionButton from '@/components/FloatingActionButton';
import Footer from '@/components/Footer';
import GalleryLightbox from '@/components/GalleryLightbox';

// Placeholder gallery images - in production, these would come from CMS
const PLACEHOLDER_IMAGES = {
  'Students & Classes': [
    { id: 1, url: 'https://images.unsplash.com/photo-1427504494785-cdec8f6f153a?w=600&h=400&fit=crop', alt: 'Students in classroom', caption: 'Engaged learning environment' },
    { id: 2, url: 'https://images.unsplash.com/photo-1509909756405-857d804268e9?w=600&h=700&fit=crop', alt: 'Student interaction', caption: 'Collaborative learning' },
    { id: 3, url: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=600&h=500&fit=crop', alt: 'Class activity', caption: 'Interactive sessions' },
  ],
  'Facilities': [
    { id: 4, url: 'https://images.unsplash.com/photo-1427504494785-cdec8f6f153a?w=600&h=500&fit=crop', alt: 'Library', caption: 'Well-equipped library' },
    { id: 5, url: 'https://images.unsplash.com/photo-1574075016382-a032ec10a01e?w=600&h=600&fit=crop', alt: 'Computer lab', caption: 'Modern tech facilities' },
    { id: 6, url: 'https://images.unsplash.com/photo-1517150846452-9e1c73e0eee5?w=600&h=700&fit=crop', alt: 'Sports ground', caption: 'Recreational facilities' },
  ],
  'Events': [
    { id: 7, url: 'https://images.unsplash.com/photo-1505628346881-b72b27e84530?w=600&h=400&fit=crop', alt: 'School event', caption: 'Annual celebration' },
    { id: 8, url: 'https://images.unsplash.com/photo-1516627145497-ae6968895b2e?w=600&h=500&fit=crop', alt: 'Community gathering', caption: 'School community event' },
    { id: 9, url: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=600&h=600&fit=crop', alt: 'Performance', caption: 'Student performance' },
  ],
  'Activities': [
    { id: 10, url: 'https://images.unsplash.com/photo-1514306688772-36e039afdf32?w=600&h=500&fit=crop', alt: 'Sports activity', caption: 'Sports engagement' },
    { id: 11, url: 'https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=600&h=400&fit=crop', alt: 'Art activity', caption: 'Creative expression' },
    { id: 12, url: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600&h=700&fit=crop', alt: 'Outdoor activity', caption: 'Outdoor learning' },
  ],
};

export default function GalleryPage() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('Students & Classes');
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);
  const [allImages, setAllImages] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('/api/gallery');
        if (!response.ok) throw new Error('Failed to fetch');
        const json = await response.json();
        setData(json);
      } catch (err) {
        console.error('Error fetching gallery data:', err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  useEffect(() => {
    if (data) {
      const gallery = data.gallery || data;
      const categoryData = gallery.categories?.find(
        (cat) => cat.name === selectedCategory
      );
      if (categoryData?.images && categoryData.images.length > 0) {
        setAllImages(categoryData.images);
      } else {
        // Use local images if no API images
        setAllImages([
          { id: 1, url: '/images/IMG-20251223-WA0064.jpg', alt: 'School event 1', caption: 'Vibrant school life' },
          { id: 2, url: '/images/IMG-20251223-WA0065.jpg', alt: 'School event 2', caption: 'Engaged students' },
          { id: 3, url: '/images/IMG-20251223-WA0066.jpg', alt: 'School event 3', caption: 'Memorable moments' },
          { id: 4, url: '/images/IMG-20251223-WA0073.jpg', alt: 'School event 4', caption: 'Fun activities' },
          { id: 5, url: '/images/IMG-20251223-WA0074.jpg', alt: 'School event 5', caption: 'Campus vibrancy' },
          { id: 6, url: '/images/IMG-20251223-WA0076.jpg', alt: 'School event 6', caption: 'Learning moments' },
          { id: 7, url: '/images/IMG-20251223-WA0077.jpg', alt: 'School event 7', caption: 'Team activities' },
          { id: 8, url: '/images/IMG-20251223-WA0078.jpg', alt: 'School event 8', caption: 'Student engagement' },
        ]);
      }
    } else {
      setAllImages([
        { id: 1, url: '/images/IMG-20251223-WA0064.jpg', alt: 'School event 1', caption: 'Vibrant school life' },
        { id: 2, url: '/images/IMG-20251223-WA0065.jpg', alt: 'School event 2', caption: 'Engaged students' },
        { id: 3, url: '/images/IMG-20251223-WA0066.jpg', alt: 'School event 3', caption: 'Memorable moments' },
        { id: 4, url: '/images/IMG-20251223-WA0073.jpg', alt: 'School event 4', caption: 'Fun activities' },
        { id: 5, url: '/images/IMG-20251223-WA0074.jpg', alt: 'School event 5', caption: 'Campus vibrancy' },
        { id: 6, url: '/images/IMG-20251223-WA0076.jpg', alt: 'School event 6', caption: 'Learning moments' },
        { id: 7, url: '/images/IMG-20251223-WA0077.jpg', alt: 'School event 7', caption: 'Team activities' },
        { id: 8, url: '/images/IMG-20251223-WA0078.jpg', alt: 'School event 8', caption: 'Student engagement' },
      ]);
    }
  }, [selectedCategory, data]);

  if (loading) {
    return (
      <div className="min-h-screen bg-neutral-50 dark:bg-neutral-900 flex items-center justify-center">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-primary-200 border-t-primary-600 rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-neutral-600 dark:text-neutral-400">Loading...</p>
        </div>
      </div>
    );
  }

  const gallery = data?.gallery || data;
  const categories = gallery?.categories?.map((cat) => cat.name) || Object.keys(PLACEHOLDER_IMAGES);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 }
    }
  };

  const imageItem = {
    hidden: { opacity: 0, scale: 0.8 },
    show: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.4 }
    }
  };

  return (
    <>
      <Navigation />

      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative pt-24 pb-20 px-4 md:px-6 lg:px-8 bg-gradient-to-br from-primary-600 via-primary-500 to-primary-600 text-white overflow-hidden"
      >
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-emerald-300 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight bg-gradient-to-r from-emerald-500 via-blue-500 to-emerald-500 dark:from-emerald-400 dark:via-blue-400 dark:to-emerald-400 bg-clip-text text-transparent"
          >
            {gallery?.hero?.title || 'Gallery'}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto"
          >
            {gallery?.hero?.subtitle || 'Explore our vibrant school community'}
          </motion.p>
        </div>
      </motion.section>

      {/* Gallery Content */}
      <div className="bg-white dark:bg-neutral-900 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-16 md:py-24">
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="space-y-12"
          >
            {/* Category Filter */}
            <motion.div variants={item} className="space-y-6">
              <div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-emerald-600 to-blue-600 dark:from-emerald-400 dark:to-blue-400 bg-clip-text text-transparent mb-2">
                  Our Moments
                </h2>
                <div className="w-16 h-1 bg-gradient-to-r from-emerald-600 to-blue-600"></div>
              </div>

              <div className="flex flex-wrap gap-3">
                {categories.map((category) => (
                  <motion.button
                    key={category}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => {
                      setSelectedCategory(category);
                      setSelectedImageIndex(null);
                    }}
                    className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
                      selectedCategory === category
                        ? 'bg-gradient-to-r from-primary-600 to-primary-600 text-white shadow-lg'
                        : 'bg-neutral-200 dark:bg-neutral-700 text-neutral-900 dark:text-slate-100 hover:bg-neutral-300 dark:hover:bg-neutral-600'
                    }`}
                  >
                    {category}
                  </motion.button>
                ))}
              </div>
            </motion.div>

            {/* Masonry Grid */}
            <motion.div
              key={selectedCategory}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4"
            >
              {allImages.map((image, index) => (
                <motion.div
                  key={image.id}
                  variants={imageItem}
                  whileHover={{ y: -4 }}
                  onClick={() => setSelectedImageIndex(index)}
                  className="break-inside-avoid cursor-pointer group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300"
                >
                  <div className="relative h-auto">
                    <img
                      src={image.url}
                      alt={image.alt}
                      className="w-full h-auto block rounded-lg object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                      {image.caption && (
                        <p className="text-white text-sm font-semibold">
                          {image.caption}
                        </p>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Empty State */}
            {allImages.length === 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-16"
              >
                <p className="text-neutral-600 dark:text-neutral-400 text-lg">
                  No images available in this category yet.
                </p>
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>

      {/* Lightbox */}
      {selectedImageIndex !== null && (
        <GalleryLightbox
          images={allImages}
          initialIndex={selectedImageIndex}
          onClose={() => setSelectedImageIndex(null)}
        />
      )}

      <Footer />
      <FloatingActionButton />
    </>
  );
}
