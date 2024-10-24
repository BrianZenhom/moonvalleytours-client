import './city.css'
import { Link } from 'react-router-dom'
import CityCards from '../../components/citycards/CityCards'
import Hooks from '../../hooks/useFetch'
import { useParams, useLocation } from 'react-router-dom'
import { useState } from 'react'
import Filter from '../../assets/icons/Filter'
import Sort from '../../assets/icons/Sort'

export default function City() {
  const [showCategories, setShowCategories] = useState(false)
  const { country } = useParams()
  const location = useLocation()
  const id = location?.state?.dest

  const handleShowCategories = () => {
    setShowCategories(!showCategories)
  }

  const { data, loading, error } = Hooks.useFetch(
    `https://api.moonvalleytours.lat/api/v1/cities/${id}`
  )

  const CategoryItems = [
    'Nature',
    'Food',
    'Culture',
    'History',
    'Adventure',
    'Relax',
  ]

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
            <Link
              to={'/' + country}
              state={{ country: data?.data?.country?._id }}
            >
              <span className="country_name">
                {data?.data?.country?.country}
              </span>
            </Link>
            <strong>{data?.data?.city}</strong>
          </div>
        </header>
      </article>
      <div className="city_stats">
        <div className="city_details">
          <div className="reviews">
            <h2>{data?.data?.tours?.length}</h2>
            <span>Tours</span>
          </div>
          <div className="reviews">
            <h2>{data?.data?.travellers}</h2>
            <span>Travellers</span>
          </div>
          <div className="reviews">
            <h2>{data?.data?.ratingsQuantity}</h2>
            <span>Reviews</span>
          </div>
          <div className="reviews">
            <h2>{data?.data?.ratingsAverage} / 5</h2>
            <span>Rate</span>
          </div>
        </div>
      </div>
      <article className="city_content container">
        <span className="showCategories">
          <span>
            <Sort /> Sort
          </span>
          <span onClick={handleShowCategories}>
            <Filter />
            Filter
          </span>
          <span>
            <Filter />
            Map
          </span>
        </span>
        <aside
          className={
            showCategories
              ? 'city_content-sidebar city_content-sidebar-shown'
              : 'city_content-sidebar'
          }
        >
          <div className="filters">
            <div className="category">
              <h4>Categories</h4>
              <div className="category_list">
                {CategoryItems.map(item => {
                  return (
                    <div key={item} className="category_list-item">
                      <label>
                        <input type="checkbox" name={item} />
                        {item}
                      </label>
                    </div>
                  )
                })}
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
          </div>
        </aside>
        <div className="city_content-cards">
          {error
            ? 'Something went wrong!'
            : loading
            ? 'Loading'
            : data?.data?.tours?.map(item => {
                console.log(item.id)
                return (
                  <Link
                    key={item._id}
                    to={`/${data?.data?.country?.country.toLowerCase()}/${data?.data?.city?.toLowerCase()}/${
                      item.slug
                    }`}
                    state={{
                      id: item._id,
                      country: item.country,
                      city: item.city,
                    }}
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
