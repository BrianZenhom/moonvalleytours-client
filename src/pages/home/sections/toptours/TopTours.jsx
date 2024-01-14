import TourCard from '../../../../components/tourscard/TourCard'
import Hooks from './../../../../hooks/useFetch'
import './toptours.css'

export default function TopTours() {
  const { data, loading, error } = Hooks.useFetch(
    'http://localhost:1234/api/tours'
  )
  return (
    <section className="toptours">
      <article className="toptours_content container">
        <div className="toptours_header">
          <h2>Popular tours</h2>
        </div>
        <div className="toptours_grid">
          {error
            ? 'something went wrong!'
            : loading
            ? 'Loading...'
            : data.map(tour => {
                return (
                  <>
                    <TourCard
                      key={tour._id}
                      tour={tour}
                      country={tour.country}
                    />
                  </>
                )
              })}
        </div>
      </article>
    </section>
  )
}
