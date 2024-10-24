import { Warning } from '../../../../assets/icons/AllIcons'
import TourCard from '../../../../components/tourscard/TourCard'
import Hooks from './../../../../hooks/useFetch'
import './toptours.css'

export default function TopTours() {
  const { data, loading, error } = Hooks.useFetch(
    'https://api.moonvalleytours.lat/api/v1/tours'
  )

  return (
    <section className="toptours">
      <article className="toptours_content container">
        <div className="toptours_header">
          <h2>Top tours</h2>
        </div>
        <div className="toptours_grid">
          {loading ? (
            <>
              <div className="toptours_card-item skeleton"></div>
              <div className="toptours_card-item skeleton"></div>
              <div className="toptours_card-item skeleton"></div>
            </>
          ) : error ? (
            <>
              <div className="toptours_card-item skeletonerror">
                <Warning />
                <br />
                Something went wrong!
              </div>
              <div className="toptours_card-item skeletonerror">
                <Warning />
                <br />
                Something went wrong!
                <br />
              </div>
              <div className="toptours_card-item skeletonerror">
                <Warning />
                <br />
                Something went wrong!
              </div>
            </>
          ) : loading ? (
            'Loading...'
          ) : (
            data?.data?.doc?.map(tour => {
              return (
                <>
                  <TourCard key={tour._id} tour={tour} />
                </>
              )
            })
          )}
        </div>
      </article>
    </section>
  )
}
