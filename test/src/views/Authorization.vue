<template>
	<div>
		<router-view />

		<router-link :to="{ name: 'Login' }">Login</router-link>
		/
		<router-link :to="{ name: 'Registration' }">Registration</router-link>
	</div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
	name: 'Authorization',
	data: () => {
		return {};
	},
	methods: {
		...mapGetters({
			authenticated: 'authorization/authenticated',
		}),
	},
};
</script>

<style scoped></style>
