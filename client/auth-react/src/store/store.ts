import { makeAutoObservable } from 'mobx';
import axios from 'axios';
import { IUser } from '../models/IUser';
import AuthService from '../services/AuthService';
import { IAuthResponse } from '../models/response/IAuthResponse';
import { API_URL } from '../http';

export default class Store {
	user = {} as IUser;

	isAuth = false;

	isLoading = false;

	constructor() {
		makeAutoObservable(this);
	}

	setAuth(bool: boolean): void {
		this.isAuth = bool;
	}

	setUser(user: IUser): void {
		this.user = user;
	}

	setLoading(bool: boolean): void {
		this.isLoading = bool;
	}

	async login(email: string, password: string): Promise<void> {
		try {
			const response = await AuthService.login(email, password);
			// eslint-disable-next-line no-console
			console.log(response);

			localStorage.setItem('token', response.data.accessToken);
			this.setAuth(true);
			this.setUser(response.data.user);
		} catch (e) {
			// eslint-disable-next-line no-console
			console.log(e.response?.data?.message);
		}
	}

	async registration(email: string, password: string): Promise<void> {
		try {
			const response = await AuthService.registration(email, password);
			// eslint-disable-next-line no-console
			console.log(response);

			localStorage.setItem('token', response.data.accessToken);
			this.setAuth(true);
			this.setUser(response.data.user);
		} catch (e) {
			// eslint-disable-next-line no-console
			console.log(e.response?.data?.message);
		}
	}

	async logout(): Promise<void> {
		try {
			await AuthService.logout();
			localStorage.removeItem('token');
			this.setAuth(false);
			this.setUser({} as IUser);
		} catch (e) {
			// eslint-disable-next-line no-console
			console.log(e.response?.data?.message);
		}
	}

	async checkAuth(): Promise<void> {
		this.setLoading(true);

		try {
			const response = await axios.get<IAuthResponse>(`${API_URL}/refresh`, {
				withCredentials: true,
			});
			localStorage.setItem('token', response.data.accessToken);
			this.setAuth(true);
			this.setUser(response.data.user);
		} catch (e) {
			// eslint-disable-next-line no-console
			console.log(e.response?.data?.message);
		} finally {
			this.setLoading(false);
		}
	}
}
