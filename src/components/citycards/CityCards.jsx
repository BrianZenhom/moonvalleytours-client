import { BusIcon, LanguageIcon } from './../../assets/icons/TourIcons'
import PropTypes from 'prop-types'
import img from '../../assets/images/image(3).webp'

export default function CityCards({ item }) {
  return (
    <>
      <div className="city_card">
        <div className="city_card-wrapper">
          <img src={img} alt="city image" />
          <div className="city_card-content">
            <div className="city_card-title">
              <h3>{item.title}</h3>
              <div className="city_card-details">
                <strong>{item.ratingsAverage}/5</strong>

                <small>
                  {item.ratingsQuantity} reviews | {item.travellers} travellers
                </small>
                {item.cancellation ? (
                  <span className="free">Free cancellation</span>
                ) : (
                  <span className="non">Non refundable</span>
                )}
              </div>
            </div>
            <div className="city_card-desc">{item.desc}</div>
          </div>
        </div>
        <div className="city_card-quality-tags">
          <div className="city_card-tag">
            <small>
              <LanguageIcon />
              {item.language}
            </small>
            <small>
              <BusIcon />
              Tour package
            </small>
          </div>
          <div className="city_card-price">
            &euro;<h3> {item.price}</h3>
          </div>
        </div>
      </div>
    </>
  )
}

// props validation
CityCards.propTypes = {
  item: PropTypes.object.isRequired,
}
