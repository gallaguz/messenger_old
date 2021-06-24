import Vue from 'vue';
import Vuex from 'vuex';
import { IUser } from '@/models/IUser';
import AuthService from '@/services/AuthService';
import { ILogin } from '@/models/iLogin';
import { IRegistration } from '@/models/IRegistration';
import axios from 'axios';
import { API_URL } from '@/http';
import { IAuthResponse } from '@/models/response/IAuthResponse';
import UserService from '@/services/UserService';

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		user: {} as IUser,
		isAuth: false,
		isLoading: false,
		users: [] as IUser[],
	},
	mutations: {
		SET_AUTH(state, payload: boolean) {
			state.isAuth = payload;
		},
		SET_USER(state, payload: IUser) {
			state.user = payload;
		},
		SET_LOADING(state, payload: boolean) {
			state.isLoading = payload;
		},
		SET_USERS(state, payload: IUser[]) {
			state.users = payload;
		},
	},
	actions: {
		async LOGIN({ commit }, { email, password }: ILogin) {
			try {
				const response = await AuthService.login(email, password);
				console.log(response);
				localStorage.setItem('token', response.data.accessToken);
				commit('SET_AUTH', true);
				commit('SET_USER', response.data.user);
			} catch (e) {
				console.log(e.response?.data?.message);
			}
		},
		async REGISTRATION({ commit }, { email, password }: IRegistration) {
			try {
				const response = await AuthService.registration(email, password);
				console.log(response);
				localStorage.setItem('token', response.data.accessToken);
				commit('SET_AUTH', true);
				commit('SET_USER', response.data.user);
			} catch (e) {
				console.log(e.response?.data?.message);
			}
		},
		async LOGOUT({ commit }) {
			try {
				await AuthService.logout();
				localStorage.removeItem('token');
				commit('SET_AUTH', false);
				commit('SET_USER', {} as IUser);
			} catch (e) {
				console.log(e.response?.data?.message);
			}
		},
		async CHECKAUTH({ commit }) {
			commit('SET_LOADING', true);

			try {
				const response = await axios.get<IAuthResponse>(`${API_URL}/refresh`, {
					withCredentials: true,
				});
				console.log(response);
				localStorage.setItem('token', response.data.accessToken);
				commit('SET_AUTH', true);
				commit('SET_USER', response.data.user);
			} catch (e) {
				console.log(e.response?.data?.message);
			} finally {
				commit('SET_LOADING', false);
			}
		},
		async GETUSERS({ commit }) {
			try {
				const response = await UserService.fetchUsers();
				commit('SET_USERS', response.data);
			} catch (e) {
				console.log(e.response?.data?.message);
			}
		},
	},
	getters: {
		user(store) {
			return store.user;
		},
		isAuth(store) {
			return store.isAuth;
		},
		isLoading(store) {
			return store.isLoading;
		},
		users(store) {
			return store.users;
		},
	},
	modules: {},
});
