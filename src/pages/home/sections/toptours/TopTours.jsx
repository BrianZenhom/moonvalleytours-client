import TourCard from '../../../../components/tourscard/TourCard'
import Hooks from './../../../../hooks/useFetch'
import './toptours.css'

export default function TopTours() {
  const { data, loading, error } = Hooks.useFetch(
    'http://localhost:1234/api/v1/tours'
  )

  return (
    <section className="toptours">
      <article className="toptours_content container">
        <div className="toptours_header">
          <h2>Prominent tours</h2>
        </div>
        <div className="toptours_grid">
          {error
            ? 'something went wrong!'
            : loading
            ? 'Loading...'
            : data?.data?.doc?.map(tour => {
                return (
                  <>
                    <TourCard key={tour._id} tour={tour} />
                  </>
                )
              })}
        </div>
      </article>
    </section>
  )
}
