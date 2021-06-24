<template>
	<div :id="$style.app">
		<div v-if="!isLoading">
			<form v-if="!this.isAuth">
				<input v-model="email" type="email" placeholder="email" />
				<input v-model="password" type="password" placeholder="password" />
				<input @click="login" type="button" value="login" />
				<input @click="registration" type="button" value="registration" />
			</form>

			<div v-else>
				<p>
					{{ user.email }}
				</p>
				<button @click="logout">Logout</button>
				<button @click="getUsers">Get users</button>
				<ul>
					<li v-for="user in this.users" :key="user.email">
						{{ user.email }}
					</li>
				</ul>
			</div>
		</div>

		<div v-else>Loading...</div>
	</div>
</template>

<script>
import Component from 'vue-class-component';
import { Vue } from 'vue-property-decorator';
import { mapActions, mapGetters } from 'vuex';

@Component({
	name: 'App',
	data: function () {
		return {
			email: '',
			password: '',
		};
	},
	computed: {
		...mapGetters(['user', 'isAuth', 'isLoading', 'users']),
	},
	methods: {
		...mapActions(['LOGIN', 'REGISTRATION', 'LOGOUT', 'CHECKAUTH', 'GETUSERS']),
		async login() {
			await this.LOGIN({ email: this.email, password: this.password });
		},
		async registration() {
			await this.REGISTRATION({ email: this.email, password: this.password });
		},
		async logout() {
			await this.LOGOUT();
		},
		async getUsers() {
			await this.GETUSERS();
		},
	},
	mounted() {
		this.CHECKAUTH();
	},
})
export default class App extends Vue {}
</script>

<style lang="sass" module>
#app
  outline: 1px solid red
</style>
