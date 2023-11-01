import { Link } from 'react-router-dom';
import img from '../../assets/images/image(1).webp';

export default function TourCard() {
  return (
    <div className="toptours_card-item">
      <Link to="/country/city/123">
        <div className="toptours_card">
          <img src={img} alt="" />
          <footer className="toptours_card_details">
            <div className="toptours_details-previous bg">
              <div className="toptours_details">
                <h3>Camel Ride In Giza</h3>
                <span>
                  <strong>4.9/5</strong> 1.649 reviews
                </span>
              </div>
              <div className="toptours_tourprice">
                <h4>&euro; 25</h4>
              </div>
            </div>
            <div className="toptours_description">
              <div className="toptours_description_title">
                <h3>Camel Ride In the Pyramids of Giza</h3>
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
                  <span>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Praesentium aperiam quibusdam consequuntur, iure itaque
                    quisquam impedit enim suscipit vitae optio voluptatum eos
                    odit architecto quos reprehenderit! Quaerat unde voluptate
                    dicta quos saepe nostrum eos nisi nulla praesentium
                    doloremque illo quod ex nesciunt incidunt et aspernatur,
                    exercitationem reiciendis commodi maiores voluptatibus.
                  </span>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </Link>
    </div>
  );
}
