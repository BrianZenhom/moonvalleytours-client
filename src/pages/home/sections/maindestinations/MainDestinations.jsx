import PropTypes from 'prop-types';
import './maindestinations.css';
// import img from './../../../../assets/images/image(1).webp';
// import img2 from './../../../../assets/images/image(4).webp';
// import img3 from './../../../../assets/images/image(3).webp';
import DestCard from './../../../../components/destcard/DestCard';
import { useEffect } from 'react';
import { useState } from 'react';
import { fetchCities } from '../../../../services/api';

export default function MainDestinations({ type }) {
  // const data = [
  //   {
  //     id: 1,
  //     city: 'Dubai',
  //     country: 'United Arab Emirates',
  //     img: img3,
  //     tours: 46,
  //     travellers: 304980,
  //     reviews: 52,
  //     rating: 9.2,
  //   },
  //   {
  //     id: 2,
  //     city: 'Cairo',
  //     country: 'Egypt',
  //     img: img2,
  //     tours: 20,
  //     travellers: 2125283,
  //     reviews: 225,
  //     rating: 8.7,
  //   },
  //   {
  //     id: 3,
  //     city: 'Istanbul',
  //     country: 'Turkiye',
  //     img: img,
  //     tours: 63,
  //     travellers: 204680,
  //     reviews: 55,
  //     rating: 9.4,
  //   },
  //   {
  //     id: 3,
  //     city: 'Fethiye',
  //     country: 'Turkiye',
  //     img: img,
  //     tours: 63,
  //     travellers: 204680,
  //     reviews: 55,
  //     rating: 9.4,
  //   },
  //   {
  //     id: 3,
  //     city: 'Luxor',
  //     country: 'Egypt',
  //     img: img,
  //     tours: 63,
  //     travellers: 204680,
  //     reviews: 55,
  //     rating: 9.4,
  //   },
  //   {
  //     id: 3,
  //     city: 'Rome',
  //     country: 'Turkiye',
  //     img: img,
  //     tours: 63,
  //     travellers: 204680,
  //     reviews: 55,
  //     rating: 9.4,
  //   },
  // ];

  const [data, setData] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const data = await fetchCities();
      setData(data);
    };

    getData();
  }, []);

  console.log(data);
  return (
    <section className="maindestinations">
      <article className="maindestinations_content container">
        <header className="maindestinations_header">
          <h2>{type}</h2>
        </header>
        <div className="maindestinations_grid">
          {data.map((dest) => (
            <DestCard key={dest.city} dest={dest} />
          ))}
        </div>
      </article>
    </section>
  );
}

MainDestinations.propTypes = {
  type: PropTypes.string.isRequired,
};
