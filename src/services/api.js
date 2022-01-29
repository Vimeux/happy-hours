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

const addBar = async (barInfos) => {
  try {
    const response = await api.post('/bars', barInfos)
    return {
      error: null,
      data: response.data
    }
  } catch (error) {
    console.error(error)
    return {
      error: error,
      data: null
    }
  }
}

const getDrinkByBar = async (barId) => {
  try {
    const response = await api.get(`/drinks?id=${barId}`)
    return response.data
  } catch (error) {
    console.log(error)
  }
}

const deleteBar = async (barId) => {
  try {
    const response = await api.delete(`/bars?id=${barId}`)
    return {
      error: null,
      data: response.data
    }
  } catch (error) {
    console.error(error)
    return {
      error: error,
      data: null
    }
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

const register = async (registerInfos) => {
  try {
    const response = await api.post('/auth/register', registerInfos)
    if (response.data && response.data.token) {
      window.localStorage.setItem('token', response.data.token)
    }
    return {
      error: null,
      data: response.data
    }
  } catch (error) {
    console.error(error)
    return {
      error: error,
      data: null
    }
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
  addBar,
  getDrinkByBar,
  deleteBar,
  login,
  getProfile,
  register
}
