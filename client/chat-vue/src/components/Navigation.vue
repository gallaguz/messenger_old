<template>
	<div id="nav">
		<router-link to="/">Home</router-link>
		<button v-on:click="toggleAuth">auth</button>
		{{ getAuth() }}
	</div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
export default {
	name: 'Navigation',
	data: () => {
		return {
			data: true,
		};
	},
	computed: {
		isAuth() {
			return this.getAuth();
		},
	},
	methods: {
		...mapGetters(['getAuth']),
		...mapActions(['setAuth']),
		toggleAuth() {
			this.setAuth(!this.getAuth());
		},
	},
};
</script>

<style scoped>
a {
	margin: 5px;
}
</style>
