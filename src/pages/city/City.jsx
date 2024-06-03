import './city.css'
import { Link } from 'react-router-dom'
import CityCards from '../../components/citycards/CityCards'
// import Hooks from '../../hooks/useFetch'
import { useParams, useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Filter from '../../assets/icons/Filter'
import Sort from '../../assets/icons/Sort'

export default function City() {
  const [showCategories, setShowCategories] = useState(false)
  const { country, city } = useParams()
  const location = useLocation()
  const id = location?.state?.dest

  const handleShowCategories = () => {
    setShowCategories(!showCategories)
  }

  const [destination, setDestination] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    if (!id) {
      setError('No destination ID provided')
      setLoading(false)
      return
    }

    const fetchDestination = async () => {
      try {
        const response = await fetch(
          `http://localhost:1234/api/v1/cities/${id}`
        )
        if (!response.ok) {
          throw new Error('Failed to fetch destination')
        }
        const data = await response.json()
        setDestination(data)
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    fetchDestination()
  }, [id])

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
          <img
            src={destination?.data?.cityCover}
            alt=""
            className="header-Img"
          />
        )}
        <header className="city_intro container">
          <div className="city_title">
            <Link to={'/' + country}>
              <small className="country_name">{country}</small>
            </Link>
            <h1>{city}</h1>
          </div>
          <div className="city_details">
            <div className="reviews">
              <h2>{destination?.data?.tours?.length}</h2>
              <span>tours</span>
            </div>
            <div className="reviews">
              <h2>{destination?.data?.travellers}</h2>
              <span>travellers have enjoyed tours here</span>
            </div>
            <div className="reviews">
              <h2>{destination?.data?.ratingsQuantity}</h2>
              <span>real reviews</span>
            </div>
            <div className="reviews">
              <h2>{destination?.data?.ratingsAverage}</h2>
              <span>This is how they rate us</span>
            </div>
          </div>
        </header>
      </article>
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
            : destination?.data?.tours?.map(item => {
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
