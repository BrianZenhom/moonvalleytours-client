import './country.css'
import Hooks from '../../hooks/useFetch'
import { Link, useLocation } from 'react-router-dom'
import DestCard from '../../components/destcard/DestCard'

export default function Country() {
  const location = useLocation()

  const { data, loading, error } = Hooks.useFetch(
    `http://api.moonvalleytours.lat/api/v1/countries/${location?.state?.country}`
  )

  return (
    <section className="country">
      <article className="country_header">
        <div className="country_blackoverlay"></div>
        <img
          src={data.data.countryCover}
          alt={data.data.country}
          className="header-Img"
        />
        <header className="country_intro container">
          <div className="country_title">
            <strong>
              {error
                ? 'Something went wrong!'
                : loading
                ? ''
                : data.data.country}
            </strong>
          </div>
        </header>
      </article>
      <div className="country_details-wrapper">
        <div className="country_details">
          <div className="destinations">
            <h2>{loading ? '' : data.data.cities.length}</h2>
            <span>destinations</span>
          </div>

          <div className="destinations">
            <h2>{data.data.travellers}</h2>
            <span>travellers</span>
          </div>
          <div className="destinations">
            <h2>
              {data.ratingsAverage}
              {data.data.ratingsAverage}/5
            </h2>
            <span>{data.data.ratingsQuantity} reviews</span>
          </div>
        </div>
      </div>
      <div className="country_content container">
        <section className="maindestinations">
          <article className="maindestinations_content container">
            <header className="maindestinations_header">
              <h2>Main destinations in {data.data.country}</h2>
            </header>
            <div className="maindestinations_grid">
              {data.data.cities.map(dest => {
                return (
                  <div key={dest._id}>
                    <Link
                      to={`${location.pathname}/${dest.city.toLowerCase()}`}
                      state={{ dest: dest._id }}
                    >
                      <DestCard dest={dest} />
                    </Link>
                  </div>
                )
              })}
            </div>
          </article>
        </section>
      </div>
    </section>
  )
}
