import PropTypes from 'prop-types';
import './maindestinations.css';
import DestCard from './../../../../components/destcard/DestCard';

import { useFetch } from '../../../../hooks/useFetch';

export default function MainDestinations({ type }) {
  const { data, loading, error } = useFetch(
    'https://moonvalleytours-api.1.ie-1.fl0.io/cities'
  );

  return (
    <section className="maindestinations">
      <article className="maindestinations_content container">
        <header className="maindestinations_header">
          <h2>{type}</h2>
        </header>
        <div className="maindestinations_grid">
          {error
            ? 'Something went wrong!'
            : loading
            ? 'Loading...'
            : data.map((dest) => <DestCard key={dest.city} dest={dest} />)}
        </div>
      </article>
    </section>
  );
}

MainDestinations.propTypes = {
  type: PropTypes.string.isRequired,
};
