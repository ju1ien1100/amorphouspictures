import React, { useState } from 'react';

const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (images.length === 0) {
    return (
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg?20200913095930"
        alt="carousel-image"
        className="w-44 h-44"
      />
    )
  }

  const prevImage = () => {
    setCurrentIndex(prev => (prev - 1 + images.length) % images.length);
  }

  const nextImage = () => {
    setCurrentIndex(prev => (prev + 1) % images.length);
  }

  return (
    <div className="w-full relative">

      {images.map((imageItem, index) => (
        <div
          key={imageItem.id}
          className={`carousel-item w-full absolute top-0 transition-opacity duration-300 ${currentIndex === index ? 'opacity-100' : 'opacity-0'}`}
        >
          <img
            src={imageItem.image}
            className="w-full object-fit"
            alt={`carousel-item-${index}`}
          />
        </div>
      ))}
      
      <button onClick={prevImage} className="absolute left-0 top-1/2 transform -translate-x-12 translate-y-32 p-2 rounded-full">
        {"<"}
      </button>
      <button onClick={nextImage} className="absolute right-0 top-1/2 transform translate-x-12 translate-y-32 p-2 rounded-full">
        {">"}
      </button>
    </div>
  )
}

export default Carousel;
