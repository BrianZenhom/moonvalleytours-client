import './city.css'
import { Link } from 'react-router-dom'
import CityCards from '../../components/citycards/CityCards'
import Hooks from '../../hooks/useFetch'
import { useParams } from 'react-router-dom'

export default function City() {
  const country = useParams()
  const { data, error, loading } = Hooks.useFetch(
    `https://moonvalleytours-api-1.onrender.com/api/v1/cities/${country.city}`
  )

  // We need to use the ID of the tour and the name of its CITY to send the DELETE METHOD.

  return (
    <section className="city">
      <article className="city_header">
        <div className="city_blackoverlay"></div>
        {error ? (
          'Something went wrong!'
        ) : loading ? (
          ' loading'
        ) : (
          <img src={data?.data?.cityCover} alt="" className="header-Img" />
        )}
        <header className="city_intro container">
          <div className="city_title">
            <Link to={'/' + data?.country}>
              <small className="country_name">
                {data?.data?.country?.country}
              </small>
            </Link>
            <h1>{data?.data?.city}</h1>
          </div>
          <div className="city_details">
            <div className="reviews">
              <h2>{data?.data?.tours?.length}</h2>
              <span>tours</span>
            </div>
            <div className="reviews">
              <h2>{data?.data?.travellers}</h2>
              <span>travellers have enjoyed tours here</span>
            </div>
            <div className="reviews">
              <h2>{data?.data?.ratingsQuantity}</h2>
              <span>real reviews</span>
            </div>
            <div className="reviews">
              <h2>{data?.data?.ratingsAverage}</h2>
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
          {error
            ? 'Something went wrong!'
            : loading
            ? 'Loading'
            : data?.data?.tours?.map(item => {
                return (
                  <Link
                    key={item._id}
                    to={`/${item.country}/${item.city}/${item._id}`}
                  >
                    <CityCards item={item} />
                  </Link>
                )
              })}
        </div>
      </article>
    </section>
  )
}
