import './city.css';
import { Link } from 'react-router-dom';
import CityCards from '../../components/citycards/CityCards';
import { useFetch } from '../../hooks/useFetch';
import { useParams } from 'react-router-dom';

export default function City() {
  const city = useParams();

  const { data, loading, errorCity } = useFetch(
    `https://moonvalleytours-api.1.ie-1.fl0.io/${city.country}/${city.city}`
  );

  console.log(data);
  return (
    <>
      {loading ? (
        ' '
      ) : (
        <section className="city">
          <article className="city_header">
            <div className="city_blackoverlay"></div>
            <img src={city.city_image} alt="" className="header-Img" />
            <header className="city_intro container">
              <div className="city_title">
                <Link to={'/' + city.country}>
                  <small className="country_name">{city.country}</small>
                </Link>
                <h1>{city.city}</h1>
              </div>
              <div className="city_details">
                <div className="reviews">
                  <h2>0</h2>
                  <span>tours</span>
                </div>
                <div className="reviews">
                  <h2>0</h2>
                  <span>travellers have enjoyed tours here</span>
                </div>
                <div className="reviews">
                  <h2>0</h2>
                  <span>real reviews</span>
                </div>
                <div className="reviews">
                  <h2>0</h2>
                  <span>This is how they rate us</span>
                </div>
              </div>
            </header>
          </article>
          <article className="city_content container">
            <aside className="city_content-sidebar">
              <span>Filter goes here</span>
            </aside>
            <div className="city_content-cards">
              <div className="city_content-desc">
                <span>0 of 0 activities and tours in Cairo</span>
              </div>
              {
                // data.map((item) => (
                //   <CityCards key={item.tour} item={item} />
              }
              <CityCards />
              <CityCards />
              <CityCards />
              <CityCards />
              <CityCards />
            </div>
          </article>
        </section>
      )}
    </>
  );
}
