<template>
	<div class="hello">
		<p>Auth</p>
		<h1 :class="$style.msg">{{ msg }}</h1>
	</div>
</template>

<script>
export default {
	name: 'HelloWorld',
	props: {
		msg: String,
	},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="sass" module>
.msg
  background-color: #42b983
</style>
