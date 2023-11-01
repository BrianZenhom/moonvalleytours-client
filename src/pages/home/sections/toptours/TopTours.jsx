import TourCard from '../../../../components/tourscard/TourCard';
import './toptours.css';

export default function TopTours() {
  return (
    <section className="toptours">
      <article className="toptours_content container">
        <div className="toptours_header">
          <h2>Top Tours</h2>
        </div>
        <div className="toptours_grid">
          <TourCard />
          <TourCard />
          <TourCard />
          <TourCard />
          <TourCard />
          <TourCard />
        </div>
      </article>
    </section>
  );
}
