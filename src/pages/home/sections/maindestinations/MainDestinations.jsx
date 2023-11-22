import PropTypes from 'prop-types';
import './maindestinations.css';
import DestCard from './../../../../components/destcard/DestCard';
import { useState } from 'react';
import { useEffect } from 'react';
// import { useFetch } from '../../../../hooks/useFetch';

export default function MainDestinations({ type }) {
  // const { data, loading, error } = useFetch(
  //   'https://moonvalleytours-api.1.ie-1.fl0.io/cities'
  // );

  // console.log(data);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://moonvalleytours-api.1.ie-1.fl0.io/cities')
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

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
