import React from 'react';
import { IconLeft, IconRight } from '../../assets/icons/SliderIcons';
import './slider.css';
import PropTypes from 'prop-types';

export default function Slider({ imageUrls }) {
  const [imageIndex, setImageIndex] = React.useState(1);

  function showNextImage() {
    setImageIndex((index) => {
      if (index === imageUrls.length - 1) return 0;
      return index + 1;
    });
  }

  function showPrevImage() {
    setImageIndex((index) => {
      if (index === 0) return imageUrls.length - 1;
      return index - 1;
    });
  }

  return (
    <div className="slider_images">
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
        }}
      >
        {imageUrls.map((url) => (
          <img
            key={url}
            src={url}
            className="img-slider-img"
            style={{
              translate: `${-100 * imageIndex}%`,
            }}
          />
        ))}
      </div>
      <button onClick={showPrevImage} className="img-slider-btn left">
        <IconLeft />
      </button>
      <button onClick={showNextImage} className="img-slider-btn right">
        <IconRight />
      </button>
    </div>
  );
}

Slider.propTypes = {
  imageUrls: PropTypes.arrayOf(PropTypes.string).isRequired,
};
