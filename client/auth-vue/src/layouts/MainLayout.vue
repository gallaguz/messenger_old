<template>
	<div :class="$style.main">
		<router-view />
	</div>
</template>

<script>
export default {
	name: 'MainLayout',
};
</script>

<style lang="sass" module>
.main
  background-color: gray
</style>
