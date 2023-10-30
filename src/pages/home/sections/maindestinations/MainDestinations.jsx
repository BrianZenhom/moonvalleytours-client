import './maindestinations.css';
import img from './../../../../assets/images/image(1).webp';
import img2 from './../../../../assets/images/image(4).webp';
import img3 from './../../../../assets/images/image(3).webp';
import { DestGrid } from '../../../../components/destgrid/DestGrid';

const maindestinations = [
  {
    id: 1,
    city: 'Madrid',
    country: 'Spain',
    img: img3,
    tours: 46,
    travellers: 304980,
    reviews: 52,
    rating: 9.2,
  },
  {
    id: 2,
    city: 'Cairo',
    country: 'Egypt',
    img: img2,
    tours: 20,
    travellers: 2125283,
    reviews: 225,
    rating: 8.7,
  },
  {
    id: 3,
    city: 'Barcelona',
    country: 'Spain',
    img: img,
    tours: 63,
    travellers: 204680,
    reviews: 55,
    rating: 9.4,
  },
  {
    id: 4,
    city: 'Istambul',
    country: 'Turkey',
    img: img,
    tours: 33,
    travellers: 2774323,
    reviews: 195,
    rating: 9.4,
  },
  {
    id: 5,
    city: 'Buenos Aires',
    country: 'Argentina',
    img: img,
    tours: 86,
    travellers: 3676633,
    reviews: 292,
    rating: 9.4,
  },
  {
    id: 6,
    city: 'New York',
    country: 'USA',
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
