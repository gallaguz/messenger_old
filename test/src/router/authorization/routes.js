const Login = () =>
	import(
		/* webpackChunkName: "login" */
		'@/components/Authorization/AuthorizationFormLogin'
	);
const Registration = () =>
	import(
		/* webpackChunkName: "registration" */
		'@/components/Authorization/AuthorizationFormRegistration'
	);

export default [
	{
		path: '/login',
		name: 'Login',
		meta: { layout: 'auth' },
		component: Login,
	},
	{
		path: '/registration',
		name: 'Registration',
		meta: { layout: 'auth' },
		component: Registration,
	},
];
