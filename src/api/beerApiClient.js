/**
 * Provides an interface for IntelligenceOIDC API actions
 */
import axios from "./client";
import {
  ENV
} from "../config/env";

export default {
  /**
   * @descript Fetches a qlik JWT session token for the given user context
   * @param {object} userContext - User context for which to fetch the qlik jwt for
   * @param {string} userContext.UserId - subid of the user to fetch the qlik jwt for
   * @param {string} userContext.UserDirectory - user directory of the user to fetch the qlik jwt for
   * @param {string} accountId - accountId for account user is associated with
   * @returns {object}
   */
  // getQlikSession(userContext, accountId) {
  //   return axios.post(`${ENV.intelligenceOIDC.baseUrl}/accounts/${accountId}/qliksession`, userContext)
  //     .then(result => {
  //       return result.data
  //     })
  // },
  /**
   * @description Beer API
   * @param {string} endpoint - The beer api endpt
   * @returns {string | null} ????
   */
  callBeerApi(endpoint) {
    return axios.get(
      `${ENV.beerApi.baseUrl}/${endpoint}/?key=${ENV.beerApi.apiKey}`
    );
  }
};