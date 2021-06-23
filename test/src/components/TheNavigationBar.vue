<template>
	<div id="nav" class="navigation">
		<router-link :to="{ name: 'Home' }">Home</router-link>
		<router-link :to="{ name: 'Chat' }">Chat</router-link>
		<router-link :to="{ name: 'Documentation' }">Documentation</router-link>
		<router-link :to="{ name: 'About' }">About</router-link>
		<router-link :to="{ name: 'Test' }">Test</router-link>
		<router-link :to="{ name: 'Login' }">
			<button>Authorization</button>
		</router-link>
	</div>
</template>

<script>
export default {
	name: 'NavigationBar',
	data: () => {
		return {
			active: 'active',
		};
	},
	computed: {},
	methods: {},
};
</script>

<style lang="sass" scoped>
#nav
  padding: 30px
  a
    font-weight: bold
    color: #2c3e50
    padding: 5px
    a.router-link-exact-active
      color: #42b983
</style>
