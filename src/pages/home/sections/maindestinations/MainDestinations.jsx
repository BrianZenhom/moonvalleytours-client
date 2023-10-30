import './maindestinations.css';
import img from './../../../../assets/images/image(1).webp';
import img2 from './../../../../assets/images/image(4).webp';
import img3 from './../../../../assets/images/image(3).webp';
import { DestGrid } from '../../../../components/destgrid/DestGrid';

const maindestinations = [
  {
    id: 1,
    title: 'Madrid',
    img: img3,
    tours: 46,
    travellers: 304980,
    reviews: 52,
    rating: 9.2,
  },
  {
    id: 2,
    title: 'Cairo',
    img: img2,
    tours: 20,
    travellers: 2125283,
    reviews: 225,
    rating: 8.7,
  },
  {
    id: 3,
    title: 'Barcelona',
    img: img,
    tours: 63,
    travellers: 204680,
    reviews: 55,
    rating: 9.4,
  },
  {
    id: 4,
    title: 'Istambul',
    img: img,
    tours: 33,
    travellers: 2774323,
    reviews: 195,
    rating: 9.4,
  },
  {
    id: 5,
    title: 'Buenos Aires',
    img: img,
    tours: 86,
    travellers: 3676633,
    reviews: 292,
    rating: 9.4,
  },
  {
    id: 6,
    title: 'New York',
    img: img,
    tours: 53,
    travellers: 524468,
    reviews: 495,
    rating: 8.2,
  },
];

export default function MainDestinations() {
  return (
    <section className="maindestinations">
      <article className="maindestinations_content container">
        <header className="maindestinations_header">
          <h2>Main Destinations</h2>
        </header>
        <DestGrid whichdestinations={maindestinations} />
        <div className="showmore_button">
          <button>show more</button>
        </div>
      </article>
    </section>
  );
}
