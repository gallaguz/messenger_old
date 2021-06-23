<template>
	<form id="registration_form">
		<p>
			Login
			<br />
			<input type="text" id="email" placeholder="email" />
		</p>

		<p>
			Password
			<br />
			<input type="password" id="password" placeholder="password" />
		</p>

		<p>
			Password confirmation
			<br />
			<input
				type="password"
				id="password_confirmation"
				placeholder="password"
			/>
		</p>

		<p>
			<input
				type="submit"
				value="Registration"
				v-on:click.prevent="registration"
			/>
		</p>
	</form>
</template>

<script>
export default {
	name: 'AuthorizationFormRegistration',
	methods: {
		registration() {
			console.log('Registration');
		},
	},
};
</script>

<style scoped></style>
