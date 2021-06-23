<template>
	<div class="home">
		<HelloWorld msg="msg" />
	</div>
</template>

<script>
import HelloWorld from '@/components/Authorization.vue';

export default {
	name: 'Home',
	components: {
		HelloWorld,
	},
};
</script>
