import './destcard.css';
import img from './../../assets/images/image(4).webp';

export default function DestCard() {
  return (
    <div className="list_card-item">
      <div className="maindestinations_card">
        <img src={img} alt="" />
        <div className="maindestination_title">
          <h3>city</h3>
        </div>
        <div className="maindestination_details">
          <div className="left">
            <div className="tours">
              <h3>91</h3>
              <small>tours</small>
            </div>
            <div className="travellers">
              <h3>1,300,043</h3>
              <small>travellers</small>
            </div>
          </div>
          <div className="right">
            <div className="reviews">
              <h3>3440</h3>
              <small>reviews</small>
            </div>
            <div className="rating">
              <h3>9.50/10</h3>
              <small>rating</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
