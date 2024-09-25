import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

export default function TourCard({ tour }) {
  const city = tour.city.city.toLowerCase()
  const country = tour.city.country.country.toLowerCase()
  return (
    <div className="toptours_card-item">
      <Link
        to={`/${country}/${city}/${tour.slug}`}
        state={{ id: tour._id, country: country, city: tour.city }}
      >
        <div className="toptours_card">
          <img
            src={`http://localhost:1234/public/img/tours/${tour.tourThumbnail}`}
            alt={tour.title}
          />
          <footer className="toptours_card_details">
            <div className="toptours_details-previous bg">
              <div className="toptours_details">
                <h4>{tour.title}</h4>
                <span>
                  <strong>{tour.ratingsAverage}/5</strong>
                  {tour.ratingsQuantity} reviews
                </span>
              </div>
              <div className="toptours_tourprice">
                <div className="price_tour">
                  <span>&euro;</span>
                  <h4> {tour.price}</h4>
                </div>
              </div>
            </div>
            <div className="toptours_description">
              <div className="toptours_description_title">
                <h3>{tour.title}</h3>
                <div className="toptours_description_details">
                  <div className="rating-tours">
                    <strong>{tour.ratingsAverage}/5</strong>
                    <span className="toptours_description_rating">
                      <div className="stars">
                        <strong>***</strong>
                        <strong className="opacity">*</strong>
                        <strong>*</strong>
                      </div>
                      {tour.reviewsQuantity} Difficulty
                    </span>
                  </div>
                  <p>{tour.shortDesc}</p>
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
