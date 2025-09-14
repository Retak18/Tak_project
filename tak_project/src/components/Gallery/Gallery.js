import React, { useState, useEffect } from 'react';
import './Gallery.css';
import { portfolioItems } from '../../data/portfolioData';

const Gallery = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleItemClick = (item) => {
    setSelectedItem(item);
    document.body.classList.add('portfolio-open');
    };
  

  const handleCloseClick = () => {
    setSelectedItem(null);
    document.body.classList.remove('portfolio-open'); 
  };

  // Handle escape key
  useEffect(() => {
    const handleEscKey = (event) => {
      if (event.key === 'Escape') {
        setSelectedItem(null);
      }
    };

    if (selectedItem) {
      document.addEventListener('keydown', handleEscKey);
    }
        document.addEventListener('keydown', handleEscKey);

    return () => {
      document.removeEventListener('keydown', handleEscKey);
      document.body.style.overflow = 'auto';
    };
  }, [selectedItem]);

  return (
    <>
      <div id="top"></div>
      <section className="gallery">
        <div className="row">
          <ul className={selectedItem ? 'item_open' : ''}>
            <button 
              className="close" 
              onClick={handleCloseClick}
              aria-label="Close"
            ></button>
            {portfolioItems.map((item) => (
              <li key={item.id}>
                <button
                  className="image-link"
                  onClick={() => handleItemClick(item)}
                  aria-label={`View ${item.title}`}
                >
                  <img src={item.thumbnail} alt={item.title} />
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Portfolio Item Detail */}
        {selectedItem && (
          <div className={`port item_open`}>
            <div className="row">
              <div className="description">
                <h1>{selectedItem.title}</h1>
                <p>{selectedItem.description}</p>
              </div>
              <img src={selectedItem.image} alt={selectedItem.title} />
            </div>
          </div>
        )}
      </section>
    </>
  );
};

export default Gallery;
