import './maindestinations.css';
import img from './../../../../assets/images/image(1).webp';
import img2 from './../../../../assets/images/image(4).webp';
import img3 from './../../../../assets/images/image(3).webp';

const maindestinations = [
  {
    id: 1,
    title: 'Madrid',
    img: img3,
    tours: 46,
    travellers: '304,980',
    reviews: 52,
    rating: 9.2,
  },
  {
    id: 2,
    title: 'Cairo',
    img: img2,
    tours: 20,
    travellers: '2,125,283',
    reviews: 225,
    rating: 8.7,
  },
  {
    id: 3,
    title: 'Barcelona',
    img: img,
    tours: 63,
    travellers: '204,680',
    reviews: 55,
    rating: 9.4,
  },
  {
    id: 4,
    title: 'Istambul',
    img: img,
    tours: 33,
    travellers: '2,774,323',
    reviews: 195,
    rating: 9.4,
  },
  {
    id: 5,
    title: 'Buenos Aires',
    img: img,
    tours: 86,
    travellers: '3,676,633',
    reviews: 292,
    rating: 9.4,
  },
  {
    id: 6,
    title: 'New York',
    img: img,
    tours: 53,
    travellers: '524,468',
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
        <div className="maindestinations_grid">
          {maindestinations.map((dest) => {
            return (
              <div key={dest.id} className="list_card-item">
                <div className="maindestinations_card">
                  <img src={dest.img} alt="" />
                  <div className="maindestination_title">
                    <h3>{dest.title}</h3>
                  </div>
                  <div className="maindestination_details">
                    <div className="left">
                      <div className="tours">
                        <h3>{dest.tours}</h3>
                        <small>tours</small>
                      </div>
                      <div className="travellers">
                        <h3>{dest.travellers}</h3>
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
              </div>
            );
          })}
        </div>
        <div className="showmore_button">
          <button>show more</button>
        </div>
      </article>
    </section>
  );
}
