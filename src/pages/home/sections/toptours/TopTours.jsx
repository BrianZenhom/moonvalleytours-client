import TourCard from '../../../../components/tourscard/TourCard'
import Hooks from './../../../../hooks/useFetch'
import './toptours.css'

export default function TopTours() {
  const { data, loading, error } = Hooks.useFetch(
    'http://localhost:8080/api/tours'
  )
  console.log(data)
  return (
    <section className="toptours">
      <article className="toptours_content container">
        <div className="toptours_header">
          <h2>Top Tours</h2>
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
                      key={tour?._id}
                      city={tour.city}
                      country={tour.country}
                      tourName={tour.title}
                      tourPrice={tour.price}
                      tourImage={tour.tourThumbnail}
                      tourDescription={tour.desc}
                      tourReviews={tour.ratingsAverage}
                      tourRating={tour.ratingsQuantity}
                      tourLink={tour._id}
                    />
                  </>
                )
              })}
        </div>
      </article>
    </section>
  )
}
