import { BusIcon, LanguageIcon } from './../../assets/icons/TourIcons';
import PropTypes from 'prop-types';

export default function CityCards({ title, desc, price, img }) {
  return (
    <div className="city_card">
      <div className="city_card-wrapper">
        <img src={img} alt="" />
        <div className="city_card-content">
          <div className="city_card-title">
            <h3>{title}</h3>
            <div className="city_card-details">
              <strong>9.40/10</strong>
              <small>7 reviews | 70 travellers</small>
              <strong>Free cancellation</strong>
            </div>
          </div>
          <div className="city_card-desc">{desc}</div>
        </div>
      </div>
      <div className="city_card-quality-tags">
        <div className="city_card-tag">
          <small>
            <LanguageIcon /> English
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
  );
}

// props validation
CityCards.propTypes = {
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  img: PropTypes.string.isRequired,
};
