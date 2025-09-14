import React, { useState, useEffect } from 'react';
import './Gallery.css';
import { portfolioItems } from '../../data/portfolioData';

const Gallery = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleItemClick = (item) => {
    setSelectedItem(item);
    setCurrentImageIndex(0); //Reset à la 1ere image
    document.body.classList.add('portfolio-open');
    };
  

  const handleCloseClick = () => {
    setSelectedItem(null);
    setCurrentImageIndex(0);
    document.body.classList.remove('portfolio-open'); 
  };

  //Carousel button handlers
  const nextImage = () => {
    setCurrentImageIndex(prev => 
      prev < selectedItem.image.length - 1 ? prev + 1 : prev
    );
  };

  const prevImage = () => {
    setCurrentImageIndex(prev => prev > 0 ? prev - 1 : prev);
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
    };

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
              <div className="carousel-container">
                  <div 
                    className="carousel-wrapper" 
                    style={{transform: `translateX(-${currentImageIndex * 100}%)`}}
                  >
                    {selectedItem.image.map((img, index) => (
                      <img key={index} src={img} alt={`${selectedItem.title} ${index + 1}`} />
                    ))}
                  </div>
                
                  {selectedItem.image.length > 1 && (
                    <>
                      <button className="carousel-btn prev" onClick={prevImage}>‹</button>
                      <button className="carousel-btn next" onClick={nextImage}>›</button>
                      <div className="carousel-dots">
                        {selectedItem.image.map((_, index) => (
                          <span 
                            key={index} 
                            className={`dot ${index === currentImageIndex ? 'active' : ''}`}
                            onClick={() => setCurrentImageIndex(index)}
                          />
                        ))}
                      </div>
                    </>
                  )}
                </div>
            </div>
          </div>
        )}
      </section>
    </>
  );
};

export default Gallery;
