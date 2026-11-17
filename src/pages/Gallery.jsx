
import { useState } from 'react';
import { motion } from 'framer-motion';
import { X, ArrowUpRight } from 'lucide-react';
import '../styles/gallery.css';

const galleryImages = [
  {
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=900',
    title: 'Modern Gym',
    category: 'FACILITY',
  },
  {
    image: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=900',
    title: 'Strength Training',
    category: 'TRAINING',
  },
  {
    image: 'https://images.unsplash.com/photo-1534258936925-c58bed479fcb?w=900',
    title: 'Power Workout',
    category: 'WORKOUT',
  },
  {
    image: 'https://images.unsplash.com/photo-1579758629938-03607ccdbaba?w=900',
    title: 'Weight Training',
    category: 'TRAINING',
  },
  {
    image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=900',
    title: 'Personal Fitness',
    category: 'FITNESS',
  },
  {
    image: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=900',
    title: 'Gym Equipment',
    category: 'FACILITY',
  },
  {
    image: 'https://images.unsplash.com/photo-1599058917212-d750089bc07e?w=900',
    title: 'Daily Workout',
    category: 'WORKOUT',
  },
  {
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=900',
    title: 'Fitness Lifestyle',
    category: 'FITNESS',
  },
];

function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <main className="gallery-page">
      <section className="gallery-hero">
        <div className="container">
          <motion.p
            className="section-label"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            OUR GYM IN ACTION
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
          >
            THE <span>GALLERY</span>
          </motion.h1>

          <motion.p
            className="gallery-hero-description"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            A closer look at the training, equipment and energy
            that drive every fitness journey.
          </motion.p>
        </div>
      </section>

      <section className="gallery-section section-padding">
        <div className="container">
          <div className="gallery-heading">
            <div>
              <p className="section-label">INSIDE IRON CORE</p>
              <h2 className="section-heading">
                BUILT FOR <span className="gold-text">STRENGTH.</span>
              </h2>
            </div>

            <p className="gallery-count">
              08 <span>PHOTOS</span>
            </p>
          </div>

          <div className="gallery-grid">
            {galleryImages.map((item, index) => (
              <motion.button
                className="gallery-card"
                key={item.title}
                type="button"
                onClick={() => setSelectedImage(item)}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.07 }}
                aria-label={`View ${item.title}`}
              >
                <img src={item.image} alt={item.title} loading="lazy" />

                <div className="gallery-overlay">
                  <div>
                    <span>{item.category}</span>
                    <h3>{item.title}</h3>
                  </div>
                  <ArrowUpRight size={22} />
                </div>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {selectedImage && (
        <div
          className="gallery-lightbox"
          onClick={() => setSelectedImage(null)}
          role="presentation"
        >
          <button
            className="gallery-close"
            type="button"
            onClick={() => setSelectedImage(null)}
            aria-label="Close image"
          >
            <X size={28} />
          </button>

          <img
            src={selectedImage.image}
            alt={selectedImage.title}
            onClick={(event) => event.stopPropagation()}
          />

          <p>{selectedImage.title}</p>
        </div>
      )}
    </main>
  );
}

export default Gallery;
