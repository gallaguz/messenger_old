import axios from 'axios';
import { IAuthResponse } from '@/models/response/IAuthResponse';
// import { IAuthResponse } from '@/models/response/IAuthResponse';

export const API_URL = `http://localhost:5000/api`;

const $api = axios.create({
	withCredentials: true,
	baseURL: API_URL,
});

// config - default config what i create
$api.interceptors.request.use((config) => {
	config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`;
	return config;
});

$api.interceptors.response.use(
	(config) => {
		return config;
	},
	async (error) => {
		// make original request again
		const originalRequest = error.config;
		if (
			error.response.status === 401 &&
			error.config &&
			!error.config._isRetry
		) {
			// set data about retry attempt to prevent infinity loop
			originalRequest._isRetry = true;
			try {
				const response = await axios.get<IAuthResponse>(`${API_URL}/refresh`, {
					withCredentials: true,
				});
				localStorage.setItem('token', response.data.accessToken);
				return await $api.request(originalRequest);
			} catch (e) {
				console.log('unauthorized');
			}
		}
		throw error;
	}
);

export default $api;
