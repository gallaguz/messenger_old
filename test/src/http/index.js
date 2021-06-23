import axios from 'axios';

// eslint-disable-next-line no-unused-vars
import { IAuthResponse } from '../models/response/IAuthResponse';

export const API_URL = `http://localhost:5000/api`;

const $api = axios.create({
	withCredentials: true,
	baseURL: API_URL,
});

$api.interceptors.request.use((config) => {
	// eslint-disable-next-line no-param-reassign
	config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`;
	return config;
});

$api.interceptors.response.use(
	(config) => {
		return config;
	},
	async (error) => {
		const originalRequest = error.config;
		if (
			error.response.status === 401 &&
			error.config &&
			// eslint-disable-next-line no-underscore-dangle
			!error.config._isRetry
		) {
			// eslint-disable-next-line no-underscore-dangle
			originalRequest._isRetry = true;
			try {
				const response = (await axios.get)(`${API_URL}/refresh`, {
					withCredentials: true,
				});
				localStorage.setItem('token', response.data.accessToken);
				return await $api.request(originalRequest);
			} catch (e) {
				// eslint-disable-next-line no-console
				console.log('НЕ АВТОРИЗОВАН');
			}
		}
		throw error;
	}
);

export default $api;
