import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export const DestGrid = ({ whichdestinations }) => {
  return (
    <div className="maindestinations_grid">
      {whichdestinations.map((dest) => {
        return (
          <div key={dest.id} className="list_card-item">
            <Link to={`${dest.country}/${dest.city}`}>
              <div className="maindestinations_card">
                <img src={dest.img} alt="" />
                <div className="maindestination_title">
                  <h3>{dest.city}</h3>
                </div>
                <div className="maindestination_details">
                  <div className="left">
                    <div className="tours">
                      <h3>{dest.tours}</h3>
                      <small>tours</small>
                    </div>
                    <div className="travellers">
                      <h3>{dest.travellers.toLocaleString('en-EN')}</h3>
                      <small>travellers</small>
                    </div>
                  </div>
                  <div className="right">
                    <div className="reviews">
                      <h3>{dest.reviews}</h3>
                      <small>reviews</small>
                    </div>
                    <div className="rating">
                      <h3>{dest.rating}</h3>
                      <small>rating</small>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

DestGrid.propTypes = {
  whichdestinations: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      img: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      tours: PropTypes.number.isRequired,
      travellers: PropTypes.number.isRequired,
      reviews: PropTypes.number.isRequired,
      rating: PropTypes.number.isRequired,
    })
  ).isRequired,
};
