import React, { useState } from 'react';
import Slider from 'react-slick';

const ImageSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0); // State untuk melacak slide aktif

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    afterChange: (current) => setActiveIndex(current), // Update activeIndex setelah slide berubah
  };

  return (
    <div style={{ position: 'relative', maxWidth: '600px', margin: 'auto' }}>
      <Slider {...settings}>
        <div>
          <img src="https://via.placeholder.com/600x300?text=Slide+1" alt="Slide 1" />
        </div>
        <div>
          <img src="https://via.placeholder.com/600x300?text=Slide+2" alt="Slide 2" />
        </div>
        <div>
          <img src="https://via.placeholder.com/600x300?text=Slide+3" alt="Slide 3" />
        </div>
      </Slider>
      
      {/* Indikator */}
      <div style={{
        position: 'absolute',
        bottom: '10px',
        left: '50%',
        transform: 'translateX(-50%)',
        display: 'flex',
      }}>
        {['Slide 1', 'Slide 2', 'Slide 3'].map((_, index) => (
          <div
            key={index}
            style={{
              width: '10px',
              height: '10px',
              margin: '0 5px',
              borderRadius: '50%',
              backgroundColor: activeIndex === index ? 'blue' : 'gray',
              cursor: 'pointer',
            }}
            onClick={() => setActiveIndex(index)} // Navigasi ke slide saat indikator diklik
          />
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
