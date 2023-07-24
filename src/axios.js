import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://qstnr.intvw.logodiffusion.com/api',
})

export default instance
