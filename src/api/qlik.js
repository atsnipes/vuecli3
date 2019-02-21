import axios from 'axios'
import { ENV } from '@config/env'

const qlikAxios = bearer => axios.create({
  baseURL: `https://${ENV.qlik.host}${ENV.qlik.prefix}`,
  headers: {
    'Authorization': `Bearer ${bearer}`
  },
  withCredentials: true,
})

export default {
  /**
   * @description fetches the beacon image thus initiating the qlik session
   * @param {string} bearer - Qlik Sense JWT Bearer Token
   * @returns {Promise}
   */
  getBeaconImage(bearer) {
    const qlikClient = qlikAxios(bearer)
    const requestConfig = {
      method: 'get',
      url: `${ENV.qlik.beaconUri}`,
    }
    return qlikClient.request(requestConfig)
  }
}
