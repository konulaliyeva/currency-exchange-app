import api from './axios'

class Server {
  async getSymbols(params){
    return await api
      .get(`/latest`, {params})
      .then((response) => response.data)
  }

  async getConvert(params) {
    return await api
      .get(`/convert`, { params })
      .then((response) => response.data)
  }

  async getSwap(params) {
    return await api
      .get(`/convert`, { params })
      .then((response) => response.data)
  }
}

export default new Server()