import { createContext, useReducer } from 'react'
import PropTypes from 'prop-types'

const INITIAL_STATE = {
  city: undefined,
  country: undefined,
}

export const AuthContext = createContext(INITIAL_STATE)

const AuthReducer = (state, action) => {
  switch (action.type) {
    case 'NEW_AUTH':
      return action.payload
    case 'RESET_AUTH':
      return INITIAL_STATE
    default:
      return state
  }
}

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE)

  return (
    <AuthContext.Provider
      value={{ city: state.city, country: state.country, dispatch }}
    >
      {children}
    </AuthContext.Provider>
  )
}

// props validation
AuthContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
}
