import { AxiosResponse } from 'axios';
import $api from '../http';
import { IUser } from '../models/IUser';

export default class UsersService {
	static fetchUsers(): Promise<AxiosResponse<IUser[]>> {
		return $api.get<IUser[]>('/users');
	}
}
