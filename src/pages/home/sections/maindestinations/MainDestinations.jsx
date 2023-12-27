import PropTypes from 'prop-types'
import './maindestinations.css'
import useFetch from './../../../../hooks/useFetch'
import DestCard from './../../../../components/destcard/DestCard'

export default function MainDestinations({ type }) {
  const { data, loading, error } = useFetch(
    'http://localhost:3000/api/cities?limit=6'
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
            : data.map(dest => (
                <>
                  <DestCard
                    key={dest?.id}
                    dest={dest}
                    loading={loading}
                    error={error}
                  />
                </>
              ))}
        </div>
      </article>
    </section>
  )
}

MainDestinations.propTypes = {
  type: PropTypes.string.isRequired,
}
