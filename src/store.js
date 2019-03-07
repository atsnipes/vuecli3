import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    artsyApi: {
      artsyAccessToken: ""
    }
  },
  getters: {
    artsyAccessToken: state => state.artsyApi.artsyAccessToken
  },
  mutations: {
    setAccessToken(state, accessToken) {
      state.artsyApi.artsyAccessToken = accessToken;
    }
  },
  actions: {
    setAccessToken(context, accessToken) {
      context.commit("setAccessToken", accessToken);
    }
  }
});
