import Vue from 'vue';
import VueRouter from 'vue-router';

const Chat = () => import(/* webpackChunkName: "chat" */ '../views/Chat');

Vue.use(VueRouter);

const routes = [
	{
		path: '/',
		name: 'Home',
		component: Chat,
	},
];

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes,
});

export default router;
