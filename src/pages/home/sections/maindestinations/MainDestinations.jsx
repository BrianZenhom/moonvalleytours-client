import PropTypes from 'prop-types'
import './maindestinations.css'
import Hooks from './../../../../hooks/useFetch'
import DestCard from './../../../../components/destcard/DestCard'

export default function MainDestinations({ type }) {
  const { data, loading, error } = Hooks.useFetch(
    `https://moonvalleytours-api-1.onrender.com/api/v1/cities`
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
            : data?.cities?.map(dest => (
                <DestCard key={dest._id} dest={dest} />
              ))}
        </div>
      </article>
    </section>
  )
}

MainDestinations.propTypes = {
  type: PropTypes.string.isRequired,
}
