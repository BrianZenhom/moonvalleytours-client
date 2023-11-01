import './country.css';
import img1 from '../../assets/images/image(4).webp';
import MainDestinations from '../home/sections/maindestinations/MainDestinations';

// const egyptdestinations = [
//   {
//     id: 1,
//     city: 'Cairo',
//     img: img1,
//     tours: 46,
//     travellers: 304980,
//     reviews: 52,
//     rating: 9.2,
//   },
//   {
//     id: 2,
//     city: 'Alexandria',
//     img: img1,
//     tours: 20,
//     travellers: 2125283,
//     reviews: 225,
//     rating: 8.7,
//   },
//   {
//     id: 3,
//     city: 'Luxor',
//     img: img1,
//     tours: 63,
//     travellers: 204680,
//     reviews: 55,
//     rating: 9.4,
//   },
//   {
//     id: 4,
//     city: 'Aswan',
//     img: img1,
//     tours: 33,
//     travellers: 2774323,
//     reviews: 195,
//     rating: 9.4,
//   },
//   {
//     id: 5,
//     city: 'Sharm El Sheikh',
//     img: img1,
//     tours: 86,
//     travellers: 3676633,
//     reviews: 292,
//     rating: 9.4,
//   },
//   {
//     id: 6,
//     city: 'Hurghada',
//     img: img1,
//     tours: 53,
//     travellers: 524468,
//     reviews: 495,
//     rating: 8.2,
//   },
// ];

export default function Country() {
  return (
    <section className="country">
      <article className="country_header">
        <div className="country_blackoverlay"></div>
        <img src={img1} alt="" className="header-Img" />
        <header className="country_intro container">
          <div className="country_title">
            <h1>Egypt</h1>
          </div>
          <div className="country_details">
            <div className="destinations">
              <h2>9</h2>
              <span>destinations</span>
            </div>
            <div className="destinations">
              <h2>118</h2>
              <span>tours & activities</span>
            </div>
            <div className="destinations">
              <h2>96,706</h2>
              <span>travellers have enjoyed tours here</span>
            </div>
            <div className="destinations">
              <h2>7.53 / 10</h2>
              <span>7,949 reviews</span>
            </div>
          </div>
        </header>
      </article>
      <div className="country_content container">
        <MainDestinations type={`Main destinations in Egypt`} />
      </div>
    </section>
  );
}
