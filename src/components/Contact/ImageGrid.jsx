import React from 'react';
import './reviews.css';

const ImageGrid = ({ images }) => {
  return (
    <div className="image-grid">
      {images.map((image, index) => (
        <img
          key={index}
          src={image.src}
          alt={image.alt || `Image ${index + 1}`}
          className="image-item"
        />
      ))}
    </div>
  );
};

export default ImageGrid;
