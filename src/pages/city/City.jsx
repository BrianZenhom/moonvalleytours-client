import './city.css';
import img from './../../assets/images/image(4).webp';

export default function City() {
  return (
    <section className="city">
      <article className="city_header">
        <div className="city_blackoverlay"></div>
        <img src={img} alt="" className="header-Img" />
        <header className="city_intro container">
          <div className="city_title">
            <div className="tags">
              <small>Egypt</small>
            </div>
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
      <div className="city_content container">
        <span>3 of 28 activities and tours in Cairo</span>
      </div>
    </section>
  );
}
