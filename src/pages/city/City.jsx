import './city.css';
import img from './../../assets/images/image(4).webp';
import { Link } from 'react-router-dom';

export default function City() {
  return (
    <section className="city">
      <article className="city_header_main">
        <article className="city_header_content">
          <img src={img} alt="" className="headerImg" />
          <div className="city_blackoverlay"></div>
          <header className="city_header container">
            <div className="city_header-title">
              <div className="tags">
                <Link to="/Egypt">
                  <small>Egypt</small>
                </Link>
              </div>
              <h1>Cairo</h1>
            </div>
            <footer>
              <div className="city_destinations-amount">
                <h2>28</h2>
                <span>tours and activities</span>
              </div>
              <div className="city_destinations-amount">
                <h2>96,642</h2>
                <span>travellers have enjoyed tours here</span>
              </div>
              <div className="city_destinations-amount">
                <h2>5,207</h2>
                <span>real reviews</span>
              </div>
              <div className="city_destinations-amount">
                <h2>7.96 / 10</h2>
                <span>This is how they rate us</span>
              </div>
            </footer>
          </header>
          <div className="city_content container">
            <span>3 of 28 activities and tours in Cairo</span>
          </div>
        </article>
      </article>
    </section>
  );
}
