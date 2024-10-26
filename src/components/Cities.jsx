export function ListOfCities({ cities }) {
  return (
    <ul className="hero_search_list">
      {/* {data?.data?.doc?.map(loc => {
                  return (
                    <li key={loc?._id} title={loc?.country}>
                      <Link
                        to={`${loc?.country?.country.toLowerCase()}`}
                        state={{ country: loc?.country?._id }}
                      >
                        <span className="a-light">Turkiye</span>
                      </Link>
                      <Link
                        to={`${loc?.country?.country.toLowerCase()}/${loc?.city.toLowerCase()}`}
                        state={{ dest: loc?._id }}
                      >
                        <span className="a-heavy">{loc?.city}</span>
                      </Link>
                    </li>
                  )
                })} */}
      {hasCities
        ? mappedCities?.map(city => (
            <li key={city.id}>
              <h3>{city.city}</h3>
            </li>
          ))
        : ''}
    </ul>
  )
}

export function Cities() {
  return (
  
)}
