import { useState, useRef, useEffect } from 'react';
import './hero.css';
import CustomerSupport from '../../../../assets/icons/CustomerSupport';
import HiddenFees from '../../../../assets/icons/HiddenFees';
import Accommodation from '../../../../assets/icons/Accommodation';
import Flights from '../../../../assets/icons/Flights';

// Temporary suggestions list

export const Suggestions = [
  {
    country: 'Italy',
    city: 'Rome',
  },
  {
    country: 'Spain',
    city: 'Madrid',
  },
  {
    country: 'Egypt',
    city: 'Cairo',
  },
  {
    country: 'Turkiye',
    city: 'Istambul',
  },
  {
    country: 'Spain',
    city: 'Barcelona',
  },
  {
    country: 'United Arab Emirates',
    city: 'Dubai',
  },
  {
    country: 'The United States',
    city: 'New York',
  },
  {
    country: 'France',
    city: 'Paris',
  },
  {
    country: 'United Kingdom',
    city: 'London',
  },
  {
    country: 'Thailand',
    city: 'Bangkok',
  },
  {
    country: 'India',
    city: 'Agra',
  },
  {
    country: 'China',
    city: 'Hong Kong',
  },
  {
    country: 'Colombia',
    city: 'Medellin',
  },
  {
    country: 'Indonesia',
    city: 'Bali',
  },
  {
    country: 'Japan',
    city: 'Tokyo',
  },
  {
    country: 'Italy',
    city: 'Venice',
  },
  {
    country: 'Netherlands',
    city: 'Amsterdam',
  },
  {
    country: 'Greece',
    city: 'Athens',
  },
  {
    country: 'Italy',
    city: 'Florence',
  },
  {
    country: 'Portugal',
    city: 'Lisbon',
  },
];

export default function Hero() {
  const searchSuggestionsRef = useRef(null);
  const [openSuggestion, setOpenSuggestion] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        searchSuggestionsRef.current &&
        !searchSuggestionsRef.current.contains(event.target)
      ) {
        setOpenSuggestion(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [searchSuggestionsRef]);

  const handleOpenSuggestion = () => {
    setOpenSuggestion(true);
  };

  const handleSearchClick = () => {
    searchSuggestionsRef.current.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
    setOpenSuggestion(true);
  };

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
                {Suggestions.map((loc) => {
                  return (
                    <li key={loc.city} title={loc.city}>
                      <a href={`/${loc.city}`}>
                        <span className="a-heavy">{loc.city}</span>
                      </a>
                      <a href={`${loc.country}`}>
                        <span className="a-light">{loc.country}</span>
                      </a>
                    </li>
                  );
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
  );
}
