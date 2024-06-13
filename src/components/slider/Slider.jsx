import React from 'react'
import {
  FilledIconDot,
  IconDot,
  IconLeft,
  IconRight,
} from '../../assets/icons/SliderIcons'
import './slider.css'
import PropTypes from 'prop-types'

export default function Slider({ images }) {
  const [imageIndex, setImageIndex] = React.useState(1)

  function showNextImage() {
    setImageIndex(index => {
      if (index === images.length - 1) return 0
      return index + 1
    })
  }

  function showPrevImage() {
    setImageIndex(index => {
      if (index === 0) return images.length - 1
      return index - 1
    })
  }

  console.log('test')

  return (
    <div className="slider_images">
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          overflow: 'hidden',
        }}
      >
        {images.map(({ url, alt }) => (
          <img
            key={url}
            src={url}
            alt={alt}
            className="img-slider-img"
            style={{
              translate: `${-100 * imageIndex}%`,
            }}
          />
        ))}
      </div>
      <button
        onClick={showPrevImage}
        className="img-slider-btn left"
        aria-label="View Previous Image"
      >
        <IconLeft />
      </button>
      <button
        onClick={showNextImage}
        className="img-slider-btn right"
        aria-label="View Next Image"
      >
        <IconRight />
      </button>
      <div
        style={{
          position: 'absolute',
          bottom: '0.5rem',
          left: '50%',
          translate: '-50%',
          display: 'flex',
          gap: '0.25rem',
        }}
      >
        {images.map((_, index) => (
          <button
            key={index}
            className="img-slider-dot-btn"
            onClick={() => setImageIndex(index)}
            aria-label={`View Image number ${index + 1}`}
          >
            {index === imageIndex ? (
              <FilledIconDot aria-hidden />
            ) : (
              <IconDot aria-hidden />
            )}
          </button>
        ))}
      </div>
    </div>
  )
}

Slider.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      url: PropTypes.string.isRequired,
      alt: PropTypes.string.isRequired,
    })
  ).isRequired,
}
