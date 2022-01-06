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

export {
  getBars
}
