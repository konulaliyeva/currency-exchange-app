import axios from 'axios'

const axiosInstance = axios.create({
  baseURL: 'https://api.apilayer.com/exchangerates_data/',
  timeout: 0,
  headers: {
    'Content-Type': 'application/json',
    apikey: 'KkQKEgAuQnaZ5BIKR2oVzRHFzU1LQ6fk',
  },
})

axiosInstance.interceptors.request.use((config) => {
  axios.defaults.headers.apikey = 'KkQKEgAuQnaZ5BIKR2oVzRHFzU1LQ6fk'

  return config
})

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    const { config } = error.response
    return new Promise((resolve, reject) => {
      axios
        .request(config)
        .then((response) => resolve(response))
        .catch((error) => reject(error))
    })
  }
)

export default axiosInstance