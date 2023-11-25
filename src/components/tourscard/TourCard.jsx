import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
// import img from '../../assets/images/image(1).webp';

export default function TourCard({
  city,
  tourName,
  tourPrice,
  tourLink,
  tourImage,
  tourDescription,
}) {
  return (
    <div className="toptours_card-item">
      <Link to={`/tour/${city}/${tourLink}`}>
        <div className="toptours_card">
          <img src={tourImage} alt={tourName} />
          <footer className="toptours_card_details">
            <div className="toptours_details-previous bg">
              <div className="toptours_details">
                <h3>{tourName}</h3>
                <span>
                  <strong>8.9/10</strong> 1.649 reviews
                </span>
              </div>
              <div className="toptours_tourprice">
                <h4>&euro; {tourPrice}</h4>
              </div>
            </div>
            <div className="toptours_description">
              <div className="toptours_description_title">
                <h3>{tourName}</h3>
                <div className="toptours_description_details">
                  <div className="rating-tours">
                    <strong>4.9</strong>
                    <span className="toptours_description_rating">
                      <div className="stars">
                        <strong>****</strong>
                        <strong className="opacity">*</strong>
                      </div>
                      1.649 reviews
                    </span>
                  </div>
                  <br />
                  <span>{tourDescription}</span>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </Link>
    </div>
  );
}

// prop validations
TourCard.propTypes = {
  city: PropTypes.string.isRequired,
  tourName: PropTypes.string.isRequired,
  tourPrice: PropTypes.number.isRequired,
  tourLink: PropTypes.string.isRequired,
  tourImage: PropTypes.string.isRequired,
  tourDescription: PropTypes.string.isRequired,
};
