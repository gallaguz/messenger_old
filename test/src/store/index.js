import Vue from 'vue';
import Vuex from 'vuex';

import authorization from '@/store/modules/authorization';

Vue.use(Vuex);

export default new Vuex.Store({
	namespaced: true,
	state: {},
	mutations: {},
	actions: {},
	getters: {},
	modules: {
		authorization,
	},
});
