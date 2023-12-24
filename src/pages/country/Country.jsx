import './country.css'
// import { useFetch, useFetchCountry } from '../../hooks/useFetch';
// import { useParams } from 'react-router-dom';
// import DestCard from '../../components/destcard/DestCard'

export default function Country() {
  // const country = useParams();

  // const { data, loading, error } = useFetch(
  //   `https://moonvalleytours-api.1.ie-1.fl0.io/${country.country}`
  // );

  // const { dataCountry, loadingCountry, errorCountry } = useFetchCountry(
  //   `https://moonvalleytours-api.1.ie-1.fl0.io/cities/united-arab-emirates`
  // );

  // console.log(dataCountry);

  return (
    <section className="country">
      <article className="country_header">
        <div className="country_blackoverlay"></div>
        {/* <img src={data.country_image} alt="" className="header-Img" /> */}
        <header className="country_intro container">
          <div className="country_title">
            <h1>
              {/* {error ? 'Something went wrong!' : loading ? '' : data.country} */}
            </h1>
          </div>
          <div className="country_details">
            <div className="destinations">
              {/* <h2>{loadingCountry ? '' : dataCountry?.length}</h2>
              <span>destinations</span> */}
            </div>
            <div className="destinations">
              <h2>0</h2>
              <span>tours & activities</span>
            </div>
            <div className="destinations">
              <h2>0</h2>
              <span>travellers have enjoyed tours here</span>
            </div>
            <div className="destinations">
              <h2>10/10</h2>
              <span>0 reviews</span>
            </div>
          </div>
        </header>
      </article>
      <div className="country_content container">
        <section className="maindestinations">
          <article className="maindestinations_content container">
            <header className="maindestinations_header">
              {/* <h2>Main destinations in {data.country}</h2> */}
            </header>
            <div className="maindestinations_grid">
              {/* {errorCountry
                ? 'Something went wrong!'
                : loadingCountry
                ? 'loading'
                : dataCountry.map(dest => (
                    <DestCard key={dest.city} dest={dest} />
                  ))} */}
            </div>
          </article>
        </section>
      </div>
    </section>
  )
}
