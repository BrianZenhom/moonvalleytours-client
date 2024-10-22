import PropTypes from 'prop-types'
import './maindestinations.css'
import Hooks from './../../../../hooks/useFetch'
import DestCard from './../../../../components/destcard/DestCard'
import { Link } from 'react-router-dom'
import { Warning } from '../../../../assets/icons/AllIcons'

export default function MainDestinations({ type }) {
  const { data, loading, error } = Hooks.useFetch(
    `http://api.moonvalleytours.lat/api/v1/cities?featured=true`
  )

  return (
    <section className="maindestinations">
      <article className="maindestinations_content container">
        <header className="maindestinations_header">
          <h2>{type}</h2>
        </header>
        <div className="maindestinations_grid">
          {loading ? (
            <>
              <div className="card skeleton"></div>
              <div className="card skeleton"></div>
              <div className="card skeleton"></div>
            </>
          ) : error ? (
            <>
              <div className="card skeletonerror">
                <Warning />
                <br />
                Something went wrong!
              </div>
              <div className="card skeletonerror">
                <Warning />
                <br />
                Something went wrong!
                <br />
              </div>
              <div className="card skeletonerror">
                <Warning />
                <br />
                Something went wrong!
              </div>
            </>
          ) : (
            data?.data?.doc?.map(dest => (
              <div key={dest._id}>
                <Link
                  to={`${dest.country.country.toLowerCase()}/${dest.city.toLowerCase()}`}
                  state={{ dest: dest._id }}
                >
                  <DestCard key={dest._id} dest={dest} />
                </Link>
              </div>
            ))
          )}
        </div>
      </article>
    </section>
  )
}

MainDestinations.propTypes = {
  type: PropTypes.string.isRequired,
}
