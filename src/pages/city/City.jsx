import './city.css';
import img from './../../assets/images/image(4).webp';
import { Link } from 'react-router-dom';
import CityCards from '../../components/citycards/CityCards';

export default function City() {
  return (
    <section className="city">
      <article className="city_header">
        <div className="city_blackoverlay"></div>
        <img src={img} alt="" className="header-Img" />
        <header className="city_intro container">
          <div className="city_title">
            <Link to="/Egypt">
              <small className="country_name">Egypt</small>
            </Link>
            <h1>Cairo</h1>
          </div>
          <div className="city_details">
            <div className="reviews">
              <h2>28</h2>
              <span>tours and activities</span>
            </div>
            <div className="reviews">
              <h2>59,300</h2>
              <span>travellers have enjoyed tours here</span>
            </div>
            <div className="reviews">
              <h2>5,221</h2>
              <span>real reviews</span>
            </div>
            <div className="reviews">
              <h2>7.96 / 10</h2>
              <span>This is how they rate us</span>
            </div>
          </div>
        </header>
      </article>
      <article className="city_content container">
        <aside className="city_content-sidebar">
          <span>Filter goes here</span>
        </aside>
        <div className="city_content-cards">
          <div className="city_content-desc">
            <span>5 of 28 activities and tours in Cairo</span>
          </div>
          <CityCards />
          <CityCards />
          <CityCards />
          <CityCards />
          <CityCards />
        </div>
      </article>
    </section>
  );
}
