import axios from 'axios'

const api = axios.create({
  baseURL: 'http://localhost:4000',
  headers: {
    'Content-Type': 'application/json'
  },
  timeout: 10000
})

const getBars = async () => {
  try {
    const response = await api.get('/bars')
    return response.data
  } catch (error) {
    console.error(error)
  }
}

// méthode pour se connecter
const login = async (credentials) => {
  try {
    const response = await api.post('/auth/login', credentials)
    return response.data
  } catch (error) {
    throw new Error(error.message)
  }
}

// Récupération du profil
const getProfile = async () => {
  try {
    const token = window.localStorage.getItem('token')
    if (token) {
      const response = await api.get('/me', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      return response.data
    }
  } catch (error) {
    console.error(error)
  }
}

export {
  getBars,
  login,
  getProfile
}
