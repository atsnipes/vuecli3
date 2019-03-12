import axios from "./client";
import traverson from "traverson";
import JsonHalAdapter from "traverson-hal";
import ENV from "../config/ENV";
import store from "../store";

export default class arstyClient {
  constructor() {
    this.baseUrl = ENV.artyApi.baseUrl;
  }
  // AUTH
  /**
   * @description Gets the access token needed for artsy API
   * @param {string} endpoint - The arty api endpt
   * @returns {string | null} ????
   */
  artsySetToken = async () => {
    const tokenEndpt = `${this.baseUrl}/${ENV.artyApi.tokenUrl}`;
    const result = await axios.post(tokenEndpt);
    store.commit("setAccessToken", result.data.token);
  };

  getByPost = async artist => {
    traverson.registerMediaType(JsonHalAdapter.mediaType, JsonHalAdapter);
    console.log(`key = ${store.getters.artsyAccessToken}`);
    const api = await traverson.from("https://api.artsy.net/api").jsonHal();
    const result = await api
      .newRequest()
      .follow("artist")
      .withRequestOptions({
        headers: {
          "X-Xapp-Token": store.getters.artsyAccessToken,
          Accept: "application/vnd.artsy-v2+json"
        }
      })
      .withTemplateParameters({ id: artist })
      .getResource(function(error, artistInfo) {
        console.log(`artistInfo = ${JSON.stringify(artistInfo)}`);
        return artistInfo;
      });
    return result;
  };
}

// API CAL
