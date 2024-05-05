import './country.css'
import Hooks from '../../hooks/useFetch'
import { Link, useLocation } from 'react-router-dom'
import DestCard from '../../components/destcard/DestCard'

export default function Country() {
  const location = useLocation()

  const { data, loading, error } = Hooks.useFetch(
    `https://moonvalleytours-api-1.onrender.com/api/v1/countries${location.pathname}`
  )

  return (
    <section className="country">
      <article className="country_header">
        <div className="country_blackoverlay"></div>
        <img
          src={data?.data?.countryCover}
          alt={data?.country}
          className="header-Img"
        />
        <header className="country_intro container">
          <div className="country_title">
            <h1>
              {error
                ? 'Something went wrong!'
                : loading
                ? ''
                : data?.data?.country}
            </h1>
          </div>
          <div className="country_details">
            <div className="destinations">
              <h2>{loading ? '' : data?.data?.cities?.length}</h2>
              <span>destinations</span>
            </div>

            <div className="destinations">
              <h2>{data?.data?.travellers}</h2>
              <span>travellers have enjoyed tours here</span>
            </div>
            <div className="destinations">
              <h2>
                {data.ratingsAverage}
                {data?.data?.ratingsAverage}/5
              </h2>
              <span>{data?.data?.ratingsQuantity} reviews</span>
            </div>
          </div>
        </header>
      </article>
      <div className="country_content container">
        <section className="maindestinations">
          <article className="maindestinations_content container">
            <header className="maindestinations_header">
              <h2>Main destinations in {data?.data?.country}</h2>
            </header>
            <div className="maindestinations_grid">
              {data?.data?.cities?.map(dest => {
                return (
                  <>
                    <Link
                      key={dest._id}
                      to={`${location.pathname}/${dest.city}`}
                    >
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
