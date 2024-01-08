import './city.css'
import { Link } from 'react-router-dom'
import CityCards from '../../components/citycards/CityCards'
import Hooks from '../../hooks/useFetch'
import { useParams } from 'react-router-dom'

export default function City() {
  const country = useParams()
  const { data } = Hooks.useFetch(
    `http://localhost:8080/api/cities/${country.city}`
  )

  const { dataCity, loadingCity, errorCity } = Hooks.useCityFetch(
    `http://localhost:8080/api/tours/in/${country.city}`
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
              <h2>{data.travellers}</h2>
              <span>travellers have enjoyed tours here</span>
            </div>
            <div className="reviews">
              <h2>{data.ratingsQuantity}</h2>
              <span>real reviews</span>
            </div>
            <div className="reviews">
              <h2>{data.ratingsAverage}</h2>
              <span>This is how they rate us</span>
            </div>
          </div>
        </header>
      </article>
      <article className="city_content container">
        <aside className="city_content-sidebar">
          <div className="category">
            <h4>Categories</h4>
            <div className="category_list">
              <div className="category_list-item">
                <label>
                  <input type="checkbox" name="Nature" />
                  Nature
                </label>
              </div>
              <div className="category_list-item">
                <label>
                  <input type="checkbox" name="Food" />
                  Food
                </label>
              </div>
              <div className="category_list-item">
                <label>
                  <input type="checkbox" name="Culture" />
                  Culture
                </label>
              </div>
              <div className="category_list-item">
                <label>
                  <input type="checkbox" name="History" />
                  History
                </label>
              </div>
              <div className="category_list-item">
                <label>
                  <input type="checkbox" name="Adventure" />
                  Adventure
                </label>
              </div>
              <div className="category_list-item">
                <label>
                  <input type="checkbox" name="Relax" />
                  Relax
                </label>
              </div>
            </div>
          </div>
          <div className="features">
            <h4>Features</h4>
            <div className="features_list">
              <div className="features_list-item">
                <label>
                  <input type="checkbox" name="English only" />
                  English only
                </label>
              </div>
              <div className="features_list-item">
                <label>
                  <input type="checkbox" name="Free cancellation" />
                  Free cancellation
                </label>
              </div>
              <div className="features_list-item">
                <label>
                  <input type="checkbox" name="Wheelchair accessible" />
                  Wheelchair accessible
                </label>
              </div>
            </div>
          </div>
          <div className="price">
            <h4>Price</h4>
            <div className="range-slider">
              <input
                className="slider"
                type="range"
                min="0"
                max="6000"
                value="30"
              />
              <div className="slider-thumb">
                <div className="tooltip"></div>
              </div>
              <div className="progress"></div>
            </div>
          </div>
        </aside>
        <div className="city_content-cards">
          <div className="city_content-desc">
            <span>0 of 0 activities and tours in {data.city}</span>
          </div>
          {errorCity
            ? 'Something went wrong!'
            : loadingCity
            ? 'Loading'
            : dataCity.map(item => {
                return (
                  <>
                    <Link to={`/${country}/${item.city}/${item._id}`}>
                      <CityCards item={item} />
                    </Link>
                  </>
                )
              })}
        </div>
      </article>
    </section>
  )
}
