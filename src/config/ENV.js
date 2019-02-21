/**
 * Provides local microservice(s) needs. This file will be re-written during docker deployment with envionment appropriate values
 */
export const ENV = {
    beerApi: {
        url: "http://api.brewerydb.com/v2/",
        apiKey: ""
    }
};