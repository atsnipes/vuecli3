import axios from "./client";
import ENV from "../config/ENV";
import store from "../store";

export default class arstyClient {
  constructor() {
    this.baseUrl = ENV.artyApi.baseUrl;
    if (!store.getters.artsyAccessToken) {
      this.artsyGetToken();
    }
  }
  /**
   * @description Gets the access token needed for artsy API
   * @param {string} endpoint - The arty api endpt
   * @returns {string | null} ????
   */
  artsyGetToken() {
    const tokenEndpt = `${this.baseUrl}/${ENV.artyApi.tokenUrl}`;
    return axios
      .post(tokenEndpt)
      .then(function(response) {
        store.dispatch("setAccessToken", response.data.token);
      })
      .catch(function(error) {
        console.error(
          `artyClient -> artsyGetToken() error = ${JSON.stringify(error)}`
        );
      });
  }
}
