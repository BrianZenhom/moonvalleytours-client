import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
// import img from '../../assets/images/image(1).webp';

export default function TourCard({ tour }) {
  console.log('test')
  const city = tour.city.city.toLowerCase()
  const country = tour.city.country.country.toLowerCase()
  return (
    <div className="toptours_card-item">
      <Link
        to={`/${country}/${city}/${tour.slug}`}
        state={{ id: tour._id, country: country, city: tour.city }}
      >
        <div className="toptours_card">
          <img src={tour.tourThumbnail} alt={tour.title} />
          <footer className="toptours_card_details">
            <div className="toptours_details-previous bg">
              <div className="toptours_details">
                <h4>{tour.title}</h4>
                <span>
                  <strong>{tour.reviewsRating} 4.74/5</strong>
                  {tour.reviewsQuantity}1,426 reviews
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
                    <strong>{tour.reviewsRating}Hard</strong>
                    <span className="toptours_description_rating">
                      <div className="stars">
                        <strong>***</strong>
                        <strong className="opacity">*</strong>
                        <strong>*</strong>
                      </div>
                      {tour.reviewsQuantity} Difficulty
                    </span>
                  </div>
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
