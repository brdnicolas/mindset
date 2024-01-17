import axios from 'axios'

export const api = axios.create({ baseURL: 'https://applifyai.onrender.com/api' })

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token')

    if (token) {
      config.headers.Authorization = `Bearer ${token}`
      config.headers['Content-Type'] = 'multipart/form-data'
    }

    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)
