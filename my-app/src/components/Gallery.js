import React from 'react';
import './Gallery.css';

// Dynamically import all images from assets/gallery
const importAll = (r) =>
  r.keys().map((key) => {
    const mod = r(key);
    return mod && mod.default ? mod.default : mod;
  });
const images = importAll(require.context('../assets/gallery', false, /\.(jpe?g|png|svg)$/));

const Gallery = () => (
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
              <img src={src} alt="Gallery item" className="gallery-image" />
            </div>
          ))}
        </div>
      </div>
    </section>
  </div>
);

export default Gallery;