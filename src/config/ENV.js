/**
 * Provides local microservice(s) needs. This file will be re-written during docker deployment with envionment appropriate values
 */
export const ENV = {
  beerApi: {
    baseUrl: "https://api.openbrewerydb.org/"
    //url: "https://sandbox-api.brewerydb.com/v2/",
    //apiKey: "7b4b55a4859f7e0df99a57861700e6b6"
  }
};
