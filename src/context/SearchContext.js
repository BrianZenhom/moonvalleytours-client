import { createContext, useReducer } from 'react'
import PropTypes from 'prop-types'

const INITIAL_STATE = {
  city: undefined,
  country: undefined,
}

export const SearchContext = createContext(INITIAL_STATE)

const SearchReducer = (state, action) => {
  switch (action.type) {
    case 'NEW_SEARCH':
      return action.payload
    case 'RESET_SEARCH':
      return INITIAL_STATE
    default:
      return state
  }
}

export const SearchContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(SearchReducer, INITIAL_STATE)

  return (
    <SearchContext.Provider
      value={{ city: state.city, country: state.country, dispatch }}
    >
      {children}
    </SearchContext.Provider>
  )
}

// props validation
SearchContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
}
