import { BusIcon, LanguageIcon } from './../../assets/icons/TourIcons';
import img from './../../assets/images/image(4).webp';

export default function CityCards() {
  return (
    <div className="city_card">
      <div className="city_card-wrapper">
        <img src={img} alt="" />
        <div className="city_card-content">
          <div className="city_card-title">
            <h3>Cairo Camel Ride</h3>
            <div className="city_card-details">
              <strong>9.40/10</strong>
              <small>7 reviews | 70 travellers</small>
              <strong>Free cancellation</strong>
            </div>
          </div>
          <div className="city_card-desc">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat
            unde tempora voluptates, ullam suscipit excepturi! Doloremque dolore
            eveniet laborum repellat.
          </div>
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
          <h3>&euro; 1,796</h3>
        </div>
      </div>
    </div>
  );
}
