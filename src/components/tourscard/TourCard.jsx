import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
// import img from '../../assets/images/image(1).webp';

export default function TourCard({ tour, country }) {
  return (
    <div className="toptours_card-item">
      <Link to={`/${country}/${tour.city}/${tour._id}`}>
        <div className="toptours_card">
          <img src={tour.image} alt={tour.title} />
          <footer className="toptours_card_details">
            <div className="toptours_details-previous bg">
              <div className="toptours_details">
                <h3>{tour.title}</h3>
                {tour.reviewsRating && tour.reviewsQuantity && (
                  <span>
                    <strong>{tour.reviewsRating}</strong>
                    {tour.reviewsQuantity} reviews
                  </span>
                )}
              </div>
              <div className="toptours_tourprice">
                <h4>&euro; {tour.price}</h4>
              </div>
            </div>
            <div className="toptours_description">
              <div className="toptours_description_title">
                <h3>{tour.title}</h3>
                <div className="toptours_description_details">
                  <div className="rating-tours">
                    <strong>{tour.reviewsRating}</strong>
                    <span className="toptours_description_rating">
                      <div className="stars">
                        <strong>****</strong>
                        <strong className="opacity">*</strong>
                      </div>
                      {tour.reviewsQuantity} reviews
                    </span>
                  </div>
                  <br />
                  <span>{tour.desc}</span>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </Link>
    </div>
  )
}

// prop validations
TourCard.propTypes = {
  tour: PropTypes.object.isRequired,
  country: PropTypes.string.isRequired,
}
