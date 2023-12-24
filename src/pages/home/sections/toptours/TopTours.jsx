// import TourCard from '../../../../components/tourscard/TourCard'
import './toptours.css'

export default function TopTours() {
  return (
    <section className="toptours">
      <article className="toptours_content container">
        <div className="toptours_header">
          <h2>Top Tours</h2>
        </div>
        <div className="toptours_grid">
          {/* {error
            ? 'something went wrong!'
            : loading
            ? 'loading'
            : data.map(tour => {
                let cityWithHyphens = tour.city
                  .replace(/\s/g, '-')
                  .toLowerCase()
                let tourWithHyphens = tour.tour
                  .replace(/\s/g, '-')
                  .toLowerCase()
                return (
                  <>
                    <TourCard
                      key={tour.tour}
                      tourLink={tourWithHyphens}
                      tourName={tour.tour}
                      city={cityWithHyphens}
                      tourPrice={tour.tour_price}
                      tourImage={tour.tour_image}
                      tourDescription={tour.tour_description}
                    />
                  </>
                )
              })} */}
        </div>
      </article>
    </section>
  )
}
