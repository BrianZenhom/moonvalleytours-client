import { BusIcon, LanguageIcon } from './../../assets/icons/TourIcons'
import PropTypes from 'prop-types'

export default function CityCards({
  title,
  desc,
  price,
  img,
  language,
  reviews,
  rating,
  travellers,
}) {
  return (
    <div className="city_card">
      <div className="city_card-wrapper">
        <img src={img} alt="" />
        <div className="city_card-content">
          <div className="city_card-title">
            <h3>{title}</h3>
            <div className="city_card-details">
              <strong>{rating}/5</strong>
              <small>
                {reviews} reviews | {travellers} travellers
              </small>
              <strong>Free cancellation</strong>
            </div>
          </div>
          <div className="city_card-desc">{desc}</div>
        </div>
      </div>
      <div className="city_card-quality-tags">
        <div className="city_card-tag">
          <small>
            <LanguageIcon /> {language}
          </small>
          <small>
            <BusIcon />
            Tour package
          </small>
        </div>
        <div className="city_card-price">
          <h3>&euro; {price}</h3>
        </div>
      </div>
    </div>
  )
}

// props validation
CityCards.propTypes = {
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  img: PropTypes.string.isRequired,
  language: PropTypes.string.isRequired,
  reviews: PropTypes.number.isRequired,
  rating: PropTypes.number.isRequired,
  travellers: PropTypes.number.isRequired,
}
