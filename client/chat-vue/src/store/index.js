import Vue from 'vue';
import Vuex from 'vuex';

import { authorization } from '@/store/modules';

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		isAuth: false,
	},
	mutations: {
		setAuth(state, payload) {
			state.isAuth = payload;
		},
	},
	actions: {
		setAuth({ commit }, payload) {
			commit('setAuth', payload);
		},
	},
	getters: {
		getAuth: (state) => {
			return state.isAuth;
		},
	},
	modules: {
		authorization,
	},
});
