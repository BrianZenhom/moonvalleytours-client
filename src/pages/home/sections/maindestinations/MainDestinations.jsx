import PropTypes from 'prop-types'
import './maindestinations.css'
import Hooks from './../../../../hooks/useFetch'
import DestCard from './../../../../components/destcard/DestCard'
import { Link } from 'react-router-dom'

export default function MainDestinations({ type }) {
  const { data, loading, error } = Hooks.useFetch(
    `http://localhost:1234/api/v1/cities`
  )

  return (
    <section className="maindestinations">
      <article className="maindestinations_content container">
        <header className="maindestinations_header">
          <h2>{type}</h2>
        </header>
        <div className="maindestinations_grid">
          {error
            ? 'Something Went Wrong!'
            : loading
            ? 'Loading...'
            : data?.data?.doc?.map(dest => (
                <div key={dest._id}>
                  <Link
                    to={`${dest.country.country}/${dest.city}`}
                    state={{ dest: dest._id }}
                  >
                    <DestCard key={dest._id} dest={dest} />
                  </Link>
                </div>
              ))}
        </div>
      </article>
    </section>
  )
}

MainDestinations.propTypes = {
  type: PropTypes.string.isRequired,
}
