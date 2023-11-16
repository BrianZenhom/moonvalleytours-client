import PropTypes from 'prop-types';
import './destcard.css';
import img from './../../assets/images/image(4).webp';
import { Link } from 'react-router-dom';

export default function DestCard({ dest }) {
  return (
    <Link to={`/${dest.country}/${dest.city}`}>
      <div className="list_card-item">
        <div className="maindestinations_card">
          <img src={dest.city_image} alt="" />
          <div className="maindestination_title">
            <h3>{dest.city}</h3>
          </div>
          <div className="maindestination_details">
            <div className="left">
              <div className="tours">
                <h3>5</h3>
                <small>tours</small>
              </div>
              <div className="travellers">
                <h3>0</h3>
                <small>travellers</small>
              </div>
            </div>
            <div className="right">
              <div className="reviews">
                <h3>0</h3>
                <small>reviews</small>
              </div>
              <div className="rating">
                <h3>10/10</h3>
                <small>rating</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

DestCard.propTypes = {
  dest: PropTypes.object.isRequired,
};
