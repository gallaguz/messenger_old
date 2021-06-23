import React, { FC, useContext, useEffect, useState } from 'react';
import './App.css';
import { observer } from 'mobx-react-lite';
import LoginForm from './components/LoginForm';
// eslint-disable-next-line import/no-cycle
import { Context } from './index';
import { IUser } from './models/IUser';
import UsersService from './services/UsersService';

const App: FC = () => {
	const { store } = useContext(Context);

	const [users, setUsers] = useState<IUser[]>([]);

	useEffect(() => {
		if (localStorage.getItem('token')) {
			store.checkAuth();
		}
	}, [store]);

	async function getUsers(): Promise<void> {
		try {
			const response = await UsersService.fetchUsers();
			// eslint-disable-next-line no-console
			console.log(response);
			setUsers(response.data);
		} catch (e) {
			// eslint-disable-next-line no-console
			console.log(e);
		}
	}

	if (store.isLoading) {
		return <div>Загрузка...</div>;
	}

	if (!store.isAuth) {
		return <LoginForm />;
	}

	return (
		<div className='App'>
			<h1>
				{store.isAuth
					? `Authorized user: ${store.user.email}`
					: 'Not authorized'}
			</h1>
			<h1>
				{store.user.isActivated ? 'Activated by email' : 'Pls activate account'}
			</h1>
			<button type='button' onClick={() => store.logout()}>
				Logout
			</button>
			<button type='button' onClick={getUsers}>
				Get Users
			</button>
			{users.map((user) => (
				<div key={user.email}>{user.email}</div>
			))}
		</div>
	);
};

export default observer(App);
