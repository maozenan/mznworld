import { createStore } from 'vuex';
import controls from './controls';
import { staticRoutes } from '../router/staticRoutes';

export default createStore({
  state: {
    staticRoutes,
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    controls,
  },
});
