import { useState, useRef } from 'react'
import './hero.css'
import CustomerSupport from '../../../../assets/icons/CustomerSupport'
import HiddenFees from '../../../../assets/icons/HiddenFees'
import Accommodation from '../../../../assets/icons/Accommodation'
import Flights from '../../../../assets/icons/Flights'
import Hooks from '../../../../hooks/useFetch'
import { Link } from 'react-router-dom'
import Button from '../../../../components/button/Button'
// import data from '../../../../mocks/cities.json'
import { useClickOutside } from '../../../../hooks/ClickOutside'

export default function Hero() {
  const data = Hooks.useFetch(
    `https://api.moonvalleytours.lat/api/v1/countries`
  )

  const searchSuggestionsRef = useRef(null)
  const [openSuggestion, setOpenSuggestion] = useState(false)

  useClickOutside(searchSuggestionsRef, () => setOpenSuggestion(false))

  const handleOpenSuggestion = () => {
    setOpenSuggestion(true)
  }

  const handleSearchClick = () => {
    searchSuggestionsRef.current.scrollIntoView({
      behavior: 'smooth',
      block: 'end',
    })
    setOpenSuggestion(true)
  }

  const handleSubmit = e => {
    e.preventDefault()
    const fields = new FormData(e.target)
    const search = fields.get('search')
    console.log(search)
  }

  return (
    <section className="hero">
      <article className="hero_content">
        <header className="hero_header container">
          <div className="hero_title_header">
            <h1>
              Travel and tour, <br />
              around the world.
            </h1>
            <p>
              Allow us to make your <strong>dream trip</strong>, perfect.
            </p>
          </div>
          <div className="search_hero_wrapper">
            <form className="hero_search" onSubmit={handleSubmit}>
              <input
                className="search_bar_input"
                placeholder="Where are you travelling to?"
                aria-label="search"
                type="text"
                onClick={handleSearchClick}
                ref={searchSuggestionsRef}
                onFocus={handleOpenSuggestion}
                autoComplete="off"
                autoCorrect="off"
                autoCapitalize="off"
                spellCheck="false"
                name="search"
              />
              <button aria-label="submit search">Search</button>
            </form>
            <div
              className={
                openSuggestion
                  ? 'hero_search_suggestions suggestions_visible'
                  : 'hero_search_suggestions'
              }
              ref={searchSuggestionsRef}
            >
              <div className="hero_search_suggestion_title">
                <strong>Popular destinations</strong>
              </div>
              <ul className="hero_search_list">
                {data?.data?.doc?.map(loc => {
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
                })}
              </ul>
              <div className="showmore_button_suggestion">
                <Button name="Show all destinations" />
              </div>
            </div>
          </div>
        </header>
        <aside className="benefits_content container">
          <div className="benefits">
            <div className="heroicons">
              <CustomerSupport />
              <span>Distinctive Support</span>
            </div>
            <div className="heroicons">
              <HiddenFees />
              <span>No Hidden Fees</span>
            </div>
            <div className="heroicons">
              <Accommodation />
              <span>Best Accommodations</span>
            </div>
            <div className="heroicons">
              <Flights />
              <span>Handpicked Flights</span>
            </div>
          </div>
        </aside>
      </article>
    </section>
  )
}
