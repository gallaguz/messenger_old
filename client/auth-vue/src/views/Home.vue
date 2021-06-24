<template>
	<div>
		<Authorization :msg="msg" />
	</div>
</template>

<script>
import Authorization from '@/components/Authorization.vue';

export default {
	name: 'Home',
	components: {
		Authorization,
	},
	data: () => {
		return {
			msg: 'Authorization',
		};
	},
};
</script>

<style lang="sass" module></style>
