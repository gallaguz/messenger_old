<template>
	<div id="auth-layout">
		<the-header>
			<the-navigation-bar />
		</the-header>

		<the-container>
			<router-view />
		</the-container>

		<the-footer> Footer </the-footer>
	</div>
</template>

<script>
import TheHeader from '@/components/TheHeader';
import TheFooter from '@/components/TheFooter';
import TheContainer from '@/components/TheContainer';
import TheNavigationBar from '@/components/TheNavigationBar';

export default {
	name: 'TheAuthLayout',
	components: { TheHeader, TheFooter, TheContainer, TheNavigationBar },
};
</script>

<style lang="sass" scoped>
#auth-layout
  background-color: lightblue
</style>
