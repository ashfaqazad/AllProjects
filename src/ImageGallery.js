// src/components/ImageGallery.js
import React from 'react';

const ImageGallery = () => {
  // Images ka array create karte hain
  const images = [
    { src: "https://images.unsplash.com/photo-1645177628172-a94c1f96e6db?ixlib=rb-…/300", alt: "Image 1" },
    { src: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?ixlib=rb-…/300", alt: "Image 2" },
    { src: "https://cdn.pixabay.com/photo/2018/03/23/08/27/thai-fried-rice-3253027-…/300", alt: "Image 3" },
    { src: "https://media.istockphoto.com/photos/paneer-tikka-kabab-in-red-sauce-i…/300", alt: "Image 4" },
  ];

  return (
    <div className="container mt-4">
      <div className="row">
        {images.map((image, index) => (
          <div key={index} className="col-sm-6 col-md-4 col-lg-3 mb-4">
            <div className="card h-100">
              <img
                src={image.src}
                className="card-img-top"
                alt={image.alt}
                style={{ height: '200px', objectFit: 'cover' }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;
