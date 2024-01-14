import './country.css'
import Hooks from '../../hooks/useFetch'
import { Link, useLocation } from 'react-router-dom'
import DestCard from '../../components/destcard/DestCard'

export default function Country() {
  const location = useLocation()

  const { data, loading, error } = Hooks.useFetch(
    `http://localhost:1234/api/countries${location.pathname}`
  )

  const { dataCity } = Hooks.useCityFetch(
    `http://localhost:1234/api/cities/in${location.pathname}`
  )

  const toursLength = dataCity
    ?.flatMap(city => city.tours.length)
    .reduce((a, b) => a + b, 0)

  return (
    <section className="country">
      <article className="country_header">
        <div className="country_blackoverlay"></div>
        {/* <img src={data.country_image} alt="" className="header-Img" /> */}
        <header className="country_intro container">
          <div className="country_title">
            <h1>
              {error ? 'Something went wrong!' : loading ? '' : data.country}
            </h1>
          </div>
          <div className="country_details">
            <div className="destinations">
              <h2>{loading ? '' : data.cities?.length}</h2>
              <span>destinations</span>
            </div>
            <div className="destinations">
              <h2>{loading ? '' : toursLength}</h2>
              <span>tours & activities</span>
            </div>
            <div className="destinations">
              <h2>{data.travellers}</h2>
              <span>travellers have enjoyed tours here</span>
            </div>
            <div className="destinations">
              <h2>{data.ratingsAverage}/5</h2>
              <span>{data.ratingsQuantity} reviews</span>
            </div>
          </div>
        </header>
      </article>
      <div className="country_content container">
        <section className="maindestinations">
          <article className="maindestinations_content container">
            <header className="maindestinations_header">
              <h2>Main destinations in {data.country}</h2>
            </header>
            <div className="maindestinations_grid">
              {dataCity.map(dest => {
                return (
                  <>
                    <Link to={`${location.pathname}/${dest.city}`}>
                      <DestCard key={dest?._id} dest={dest} />
                    </Link>
                  </>
                )
              })}
            </div>
          </article>
        </section>
      </div>
    </section>
  )
}
