<template>
	<form id="login_form">
		<p>
			Login
			<br />
			<input type="text" id="email" placeholder="email" />
		</p>

		<p>
			Password
			<br />
			<input type="password" id="password" placeholder="password" /><br />
		</p>

		<p>
			<input type="submit" value="Login" v-on:click.prevent="login" />
		</p>
	</form>
</template>

<script>
export default {
	name: 'AuthorizationFormLogin',
	methods: {
		login() {
			console.log('Login');
		},
	},
};
</script>

<style scoped></style>
