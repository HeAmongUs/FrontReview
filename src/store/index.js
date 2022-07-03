import api from '@/api/products';
import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {
    getProductsList(ctx, data) {
      return api.getProductsList();
    },
  },
  modules: {}
})
