import './city.css'
import { Link } from 'react-router-dom'
// import CityCards from '../../components/citycards/CityCards'
import Hooks from '../../hooks/useFetch'
import { useParams } from 'react-router-dom'

export default function City() {
  const country = useParams()
  const { data, loading, error } = Hooks.useFetch(
    `http://localhost:8080/api/cities/${country.city}`
  )

  return (
    <section className="city">
      <article className="city_header">
        <div className="city_blackoverlay"></div>
        {/* {error ? (
          'Something went wrong!'
        ) : loading ? (
          ' loading'
        ) : (
          <img
            src={data && data[0] ? data[0].city_header_image : ' '}
            alt=""
            className="header-Img"
          />
        )} */}
        <header className="city_intro container">
          <div className="city_title">
            <Link to={'/' + data.country}>
              <small className="country_name">{data.country}</small>
            </Link>
            <h1>{data.city}</h1>
          </div>
          <div className="city_details">
            <div className="reviews">
              <h2>{data?.tours?.length}</h2>
              <span>tours</span>
            </div>
            <div className="reviews">
              <h2>0</h2>
              <span>travellers have enjoyed tours here</span>
            </div>
            <div className="reviews">
              <h2>0</h2>
              <span>real reviews</span>
            </div>
            <div className="reviews">
              <h2>0</h2>
              <span>This is how they rate us</span>
            </div>
          </div>
        </header>
      </article>
      <article className="city_content container">
        <aside className="city_content-sidebar">
          <span>Filter goes here</span>
        </aside>
        <div className="city_content-cards">
          <div className="city_content-desc">
            <span>0 of 0 activities and tours in Cairo</span>
          </div>
          {/* {error
            ? 'Something went wrong!'
            : loading
            ? 'Loading'
            : data.map(item => {
                return (
                  <>
                    <CityCards
                      title={item.tour}
                      desc={item.tour_description}
                      price={item.tour_price}
                      img={item.tour_image}
                      item={item}
                    />
                  </>
                )
              })} */}
        </div>
      </article>
    </section>
  )
}
