/**
 * Provides local microservice(s) needs. This file will be re-written during docker deployment with envionment appropriate values
 */
export default {
  beerApi: {
    baseUrl: "https://api.openbrewerydb.org/"
    //url: "https://sandbox-api.brewerydb.com/v2/",
    //apiKey: "7b4b55a4859f7e0df99a57861700e6b6"
  },
  artyApi: {
    baseUrl: "https://api.artsy.net/api",
    tokenUrl:
      "tokens/xapp_token?client_id=575d2b8e013284feebcc&client_secret=bf7aadcf69bade25d08545e6ef240b6c"
  }
};
