import PropTypes from 'prop-types'
import './maindestinations.css'
import Hooks from './../../../../hooks/useFetch'
import DestCard from './../../../../components/destcard/DestCard'
import { Link } from 'react-router-dom'

export default function MainDestinations({ type }) {
  const { data, loading, error } = Hooks.useFetch(
    `http://localhost:1234/api/cities?limit=6`
  )

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
            : data?.cities?.map(dest => (
                <Link key={dest._id} to={`${dest.country}/${dest.city}`}>
                  <DestCard dest={dest} loading={loading} error={error} />
                </Link>
              ))}
        </div>
      </article>
    </section>
  )
}

MainDestinations.propTypes = {
  type: PropTypes.string.isRequired,
}
