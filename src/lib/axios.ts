import axios from 'axios'

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || 'https://api.example.com',
})

api.interceptors.request.use((config) => {
  // Add token logic if needed
  return config
})

export default api
