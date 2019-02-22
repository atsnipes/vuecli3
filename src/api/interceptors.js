import router from '../router'


const authorizationHeaderInterceptor = config => {
  // Use oidc-store to check token and auth flags...
  console.log(`requesting = ${JSON.stringify(config)}`)
  return config;
}

const unauthorizedInterceptor = {
  fulfilled: response => response,
  // TODO DINT-673: need to handle axios' 500 malformed response object in DINT-673
  rejected: error => {
    console.log(`Response Interceptor error: ${error}`)
    return Promise.reject(error)
  },
}

export default {
  request: [authorizationHeaderInterceptor],
  response: [unauthorizedInterceptor],
}