import Vue from 'vue';
import VueRouter from 'vue-router';
import store from '../store';
import authorizationRoutes from './authorization/routes';

const Test = () =>
	import(
		/* webpackChunkName: "test" */
		'../views/test'
	);
const Home = () =>
	import(
		/* webpackChunkName: "home" */
		'../views/Home'
	);
const Chat = () =>
	import(
		/* webpackChunkName: "chat" */
		'../views/Chat'
	);
const Documentation = () =>
	import(
		/* webpackChunkName: "documentation" */
		'../views/Documentation'
	);
const About = () =>
	import(
		/* webpackChunkName: "about" */
		'../views/About.vue'
	);
const Authorization = () =>
	import(
		/* webpackChunkName: "authorization" */
		'../views/Authorization.vue'
	);

Vue.use(VueRouter);

const routes = [
	{
		path: '/test',
		name: 'Test',
		meta: { layout: 'test' },
		component: Test,
	},
	{
		path: '/',
		name: 'Home',
		meta: { layout: 'main' },
		component: Home,
	},
	{
		path: '/chat',
		name: 'Chat',
		meta: { layout: 'main', auth: true },
		component: Chat,
	},
	{
		path: '/about',
		name: 'About',
		meta: { layout: 'main' },
		component: About,
	},
	{
		path: '/documentation',
		name: 'Documentation',
		meta: { layout: 'main' },
		component: Documentation,
	},
	{
		path: '/authorization',
		name: 'Authorization',
		meta: { layout: 'auth' },
		component: Authorization,
		children: [...authorizationRoutes],
	},
];

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes,
});

router.beforeEach((to, from, next) => {
	const auth = store.getters['authorization/authenticated'];
	const requireAuth = to.matched.some((route) => route.meta.auth);

	if (requireAuth && !auth) {
		next({ name: 'Login' });
	} else {
		next();
	}
});

export default router;

// const router = new VueRouter({
// 	routes: [
// 		{ path: '/home', component: resolve => resolve(Home),
// 			children: [
// 				{ path: '', name: 'home', component: resolve => resolve(Welcome) },
// 				{ path: 'welcome', name: 'welcome', component: resolve => resolve(Welcome) },
// 			]
// 		}
// 	]
// })
