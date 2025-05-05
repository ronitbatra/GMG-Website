import React, { useState, useEffect } from 'react';
import './Gallery.css';

// Dynamically import all images from assets/gallery
const importAll = (r) =>
  r.keys().map((key) => {
    const mod = r(key);
    return mod && mod.default ? mod.default : mod;
  });
const images = importAll(require.context('../assets/gallery', false, /\.(jpe?g|png|svg)$/));

const Gallery = () => {
  const [loadedImages, setLoadedImages] = useState([]);
  
  // Track which images have loaded
  useEffect(() => {
    const imageLoadPromises = images.map((src, index) => {
      return new Promise((resolve) => {
        const img = new Image();
        img.src = src;
        img.onload = () => resolve({ src, index, loaded: true });
        img.onerror = () => resolve({ src, index, loaded: false });
      });
    });
    
    Promise.all(imageLoadPromises).then(results => {
      setLoadedImages(results.filter(img => img.loaded).map(img => img.src));
    });
  }, []);
  
  return (
    <div className="gallery-page">
      <div className="page-header">
        <div className="container">
          <h1>Gallery</h1>
        </div>
      </div>

      <section className="gallery-section">
        <div className="container">
          <div className="gallery-grid">
            {images.map((src, idx) => (
              <div className="gallery-item" key={idx}>
                {loadedImages.includes(src) ? (
                  <img 
                    src={src} 
                    alt="Gallery item" 
                    className="gallery-image" 
                    loading="lazy"
                  />
                ) : (
                  <div className="image-loading-skeleton"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;