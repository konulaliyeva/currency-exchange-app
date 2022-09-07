import axios from 'axios'

const axiosInstance = axios.create({
  baseURL: 'https://api.apilayer.com/exchangerates_data/',
  timeout: 0,
  headers: {
    'Content-Type': 'application/json',
    apikey: '04IcXrzw9lncM0q3afqndVF0FBNC2WdM',
  },
})

axiosInstance.interceptors.request.use((config) => {
  axios.defaults.headers.apikey = '04IcXrzw9lncM0q3afqndVF0FBNC2WdM'

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