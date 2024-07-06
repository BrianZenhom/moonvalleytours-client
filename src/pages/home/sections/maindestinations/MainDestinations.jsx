import PropTypes from 'prop-types'
import './maindestinations.css'
import Hooks from './../../../../hooks/useFetch'
import DestCard from './../../../../components/destcard/DestCard'
import { Link } from 'react-router-dom'

export default function MainDestinations({ type }) {
  const { data, error } = Hooks.useFetch(
    `http://localhost:1234/api/v1/cities?featured=true`
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
            : data?.data?.doc?.map(dest => (
                <div key={dest._id}>
                  <Link
                    to={`${dest.country.country.toLowerCase()}/${dest.city.toLowerCase()}`}
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
