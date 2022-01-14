import { createContext, useContext, useEffect, useReducer } from 'react'
import { login } from '../services/api'

// création du context
const AuthContext = createContext()

// création des actionTypes
const actionTypes = {
  LOGIN: 'LOGIN',
  LOGOUT: 'LOGOUT',
  ERROR: 'ERROR'
}

// état initial
// on charge l'état sauvegarder dans le localStorage ou on initialise les valeurs à null
const initialState = JSON.parse(window.localStorage.getItem('AUTH')) || {
  token: null,
  user: null,
  error: null,
  loading: false
}

// hook qui renvoie l’état local actuel accompagné d’une méthode dispatch
const AuthReducer = (state, action) => {
  switch (action.type) {
    case actionTypes.LOGIN:
      // on en enregistre les données de login dans la state
      return {
        ...initialState, token: action.data.token, user: action.data.user
      }
    case actionTypes.ERROR:
      // on retourne une erreur si la connexion échoue
      return {
        ...initialState, error: action.data.error
      }
    case actionTypes.LOGOUT:
      // on supprime les données de login du storage
      window.localStorage.removeItem('AUTH')
      return initialState
    default:
      throw new Error(`Unhandled action type : ${action.type}`)
  }
}

// composant Provider qui permet de passer l'état entre les composants
const AuthProvider = ({ children }) => {
  // on utilise le reducer qu'on a créé
  const [state, dispatch] = useReducer(AuthReducer, initialState)
  // Enregistre automatiquement l'état dans le localStorage à chaque changement
  useEffect(() => {
    window.localStorage.setItem('AUTH', JSON.stringify(state))
    window.localStorage.setItem('token', state.token)
  }, [state])

  // On retourne le composant
  return <AuthContext.Provider value={{ state, dispatch }}>{children}</AuthContext.Provider>
}

const useAuth = () => {
  // hook pour utilisé le context
  const context = useContext(AuthContext)
  // si il n'y a pas de context, on renvoie une erreur
  if (!context) {
    throw new Error('useAuth must be used inside a AuthProvider')
  }
  return context
}

// fonction pour logger un user
const loginUser = async (credentials, dispatch) => {
  try {
    const data = await login(credentials)
    dispatch({
      type: actionTypes.LOGIN,
      data: { user: data.user, token: data.token }
    })
  } catch (error) {
    dispatch({
      type: actionTypes.ERROR,
      data: { error: error.message }
    })
  }
}

export {
  AuthProvider,
  useAuth,
  actionTypes,
  loginUser
}
