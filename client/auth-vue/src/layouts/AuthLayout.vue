<template>
	<div :class="$style.auth">
		<router-view />
	</div>
</template>

<script>
export default {
	name: 'AuthLayout',
};
</script>

<style lang="sass" module>
.auth
  background-color: #42b983
</style>
