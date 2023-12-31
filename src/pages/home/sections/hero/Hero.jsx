import { useState, useRef, useEffect } from 'react'
import './hero.css'
import CustomerSupport from '../../../../assets/icons/CustomerSupport'
import HiddenFees from '../../../../assets/icons/HiddenFees'
import Accommodation from '../../../../assets/icons/Accommodation'
import Flights from '../../../../assets/icons/Flights'
import Hooks from '../../../../hooks/useFetch'
import { Link } from 'react-router-dom'

export default function Hero() {
  const { data } = Hooks.useFetch('http://localhost:8080/api/cities')

  const searchSuggestionsRef = useRef(null)
  const [openSuggestion, setOpenSuggestion] = useState(false)

  useEffect(() => {
    const handleClickOutside = event => {
      if (
        searchSuggestionsRef.current &&
        !searchSuggestionsRef.current.contains(event.target)
      ) {
        setOpenSuggestion(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [searchSuggestionsRef])

  const handleOpenSuggestion = () => {
    setOpenSuggestion(true)
  }

  const handleSearchClick = () => {
    searchSuggestionsRef.current.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    })
    setOpenSuggestion(true)
  }

  return (
    <section className="hero">
      <article className="hero_content">
        <header className="hero_header container">
          <div className="hero_title_header">
            <h1>
              Travel & Tour, <br />
              around the world.
            </h1>
            <p>
              Allow us to make your <strong>dream trip</strong>, perfect.
            </p>
          </div>
          <div className="search_hero_wrapper">
            <div className="hero_search">
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
              />
              <button aria-label="submit search">Search</button>
            </div>
            <div
              className={
                openSuggestion
                  ? 'hero_search_suggestions suggestions_visible'
                  : 'hero_search_suggestions'
              }
              ref={searchSuggestionsRef}
            >
              <div className="hero_search_suggestion_title">
                <h1>Top destinations</h1>
              </div>
              <ul className="hero_search_list">
                {data.map(loc => {
                  return (
                    <li key={loc?._id} title={loc?.country}>
                      <Link to={`${loc?.country}/${loc?.city}`}>
                        <span className="a-heavy">{loc?.city}</span>
                      </Link>
                      <Link to={`${loc?.country}`}>
                        <span className="a-light">{loc?.country}</span>
                      </Link>
                    </li>
                  )
                })}
              </ul>
              <div className="showmore_button_suggestion">
                <button>Show all destinations</button>
              </div>
            </div>
          </div>
        </header>
        <aside className="benefits_content container">
          <div className="benefits">
            <span>
              <CustomerSupport />
              Best Customer Service
            </span>
            <span>
              <HiddenFees />
              No Hidden Fees
            </span>
            <span>
              <Accommodation />
              Exclusive Accommodations
            </span>
            <span>
              <Flights />
              Selected Flights
            </span>
          </div>
        </aside>
      </article>
    </section>
  )
}
