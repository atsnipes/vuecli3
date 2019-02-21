import router from '@router/index'
import store from '@state/store'
import {
  isAuthorizedForApiRequest
} from '@utils/oidc'

const authorizationHeaderInterceptor = config => {
  // Use oidc-store to check token and auth flags...
  if (isAuthorizedForApiRequest(store)) {
    config.headers.Authorization = `Bearer ${store.getters.oidcAccessToken}`
  }
  return config
}

const unauthorizedInterceptor = {
  fulfilled: response => response,
  // TODO DINT-673: need to handle axios' 500 malformed response object in DINT-673
  rejected: error => {
    console.log(`Response Interceptor error: ${error}`)
    if(error.response.status === 404){
      router.push({
        name: '404'
      })
    }
    else {
      router.push({
        name: 'error',
        params: {
          errorInfo: error
        }
      })
    }
    return Promise.reject(error)
  },
}

export default {
  request: [authorizationHeaderInterceptor],
  response: [unauthorizedInterceptor],
}
