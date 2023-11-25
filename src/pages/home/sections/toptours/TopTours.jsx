import TourCard from '../../../../components/tourscard/TourCard';
import { useFetch } from '../../../../hooks/useFetch';
import './toptours.css';

export default function TopTours() {
  const { data } = useFetch(`https://moonvalleytours-api.1.ie-1.fl0.io/tours`);

  return (
    <section className="toptours">
      <article className="toptours_content container">
        <div className="toptours_header">
          <h2>Top Tours</h2>
        </div>
        <div className="toptours_grid">
          {data.map((tour) => {
            let cityWithHyphens = tour.city.replace(/\s/g, '-').toLowerCase();
            let tourWithHyphens = tour.tour.replace(/\s/g, '-').toLowerCase();
            return (
              <>
                <TourCard
                  tourLink={tourWithHyphens}
                  tourName={tour.tour}
                  city={cityWithHyphens}
                  tourPrice={tour.tour_price}
                  tourImage={tour.tour_image}
                  tourDescription={tour.tour_description}
                />
              </>
            );
          })}
        </div>
      </article>
    </section>
  );
}
