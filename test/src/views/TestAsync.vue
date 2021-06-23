<template>
	<div>
		<p>Home</p>
		<button @click="isVisible = !isVisible">is visible</button>
		<p v-if="isVisible">
			<async-component />
		</p>
	</div>
</template>

<script>
const AsyncComponent = () => ({
	component: import(
		/* webpackChunkName: "TheTestAsyncComponent" */
		'@/components/test/TheTestAsyncComponent'
	),
	loading: import('@/components/test/TheTestLoadingComponent'),
	error: import('@/components/test/TheTestErrorComponent'),
	delay: 200,
	timeout: 3000,
});

export default {
	name: 'Home',
	components: {
		AsyncComponent,
	},
	data: () => {
		return {
			isVisible: false,
		};
	},
};
</script>

<style lang="sass" scoped></style>
