import './country.css';
import img1 from '../../assets/images/image(4).webp';
import { DestGrid } from '../../components/destgrid/DestGrid';

const egyptdestinations = [
  {
    id: 1,
    title: 'Cairo',
    img: img1,
    tours: 46,
    travellers: 304980,
    reviews: 52,
    rating: 9.2,
  },
  {
    id: 2,
    title: 'Alexandria',
    img: img1,
    tours: 20,
    travellers: 2125283,
    reviews: 225,
    rating: 8.7,
  },
  {
    id: 3,
    title: 'Luxor',
    img: img1,
    tours: 63,
    travellers: 204680,
    reviews: 55,
    rating: 9.4,
  },
  {
    id: 4,
    title: 'Aswan',
    img: img1,
    tours: 33,
    travellers: 2774323,
    reviews: 195,
    rating: 9.4,
  },
  {
    id: 5,
    title: 'Sharm El Sheikh',
    img: img1,
    tours: 86,
    travellers: 3676633,
    reviews: 292,
    rating: 9.4,
  },
  {
    id: 6,
    title: 'Hurghada',
    img: img1,
    tours: 53,
    travellers: 524468,
    reviews: 495,
    rating: 8.2,
  },
];

export default function Country() {
  return (
    <section className="country">
      <article className="country_header_main">
        <article className="country_header_content">
          <img src={img1} alt="" className="headerImg" />
          <div className="country_blackoverlay"></div>
          <header className="country_header container">
            <div className="country_header-title">
              <h1>Egypt</h1>
            </div>
            <footer>
              <div className="country_destinations-amount">
                <h2>9</h2>
                <span>destinations</span>
              </div>
              <div className="country_destinations-amount">
                <h2>118</h2>
                <span>tours and activities</span>
              </div>
              <div className="country_destinations-amount">
                <h2>96,642</h2>
                <span>travellers have enjoyed tours here</span>
              </div>
              <div className="country_destinations-amount">
                <h2>7.54/10</h2>
                <span>7,935 reviews</span>
              </div>
            </footer>
          </header>
          <div className="country_content container">
            <h2>Main destinations in Egypt</h2>
            <DestGrid whichdestinations={egyptdestinations} />
          </div>
        </article>
      </article>
    </section>
  );
}
