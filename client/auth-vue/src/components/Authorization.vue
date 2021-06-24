<template>
	<div>
		<h1 :class="$style.msg">{{ msg }}</h1>

		<div :class="$style.forms">
			<form id="login_form">
				<p>
					Login
					<br />
					<input type="text" placeholder="email" />
				</p>

				<p>
					Password
					<br />
					<input type="password" placeholder="password" /><br />
				</p>

				<p>
					<input type="submit" value="Login" v-on:click.prevent="login" />
				</p>
			</form>

			<form id="registration_form">
				<p>
					Login
					<br />
					<input type="text" placeholder="email" />
				</p>

				<p>
					Password
					<br />
					<input type="password" placeholder="password" />
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
		</div>
	</div>
</template>

<script>
export default {
	name: 'Authorization',
	props: {
		msg: String,
	},
	mounted() {},
};
</script>

<style lang="sass" module>
.msg
  background-color: #42b983
.forms
  display: flex
  flex-direction: row
  justify-content: space-between
</style>
