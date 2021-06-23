<template>
	<div id="test-layout">
		<header>
			<div id="nav">Nav</div>
			<div id="auth">Auth</div>
		</header>

		<div id="wrapper">
			<aside>
				aside
				<ul>
					<li>Title 1</li>
					<li>Title 2</li>
					<li>Title 3</li>
					<li>Title 4</li>
					<li>Title 5</li>
				</ul>
			</aside>

			<main>
				Room
				<router-view />
			</main>
		</div>

		<footer>footer</footer>
	</div>
</template>

<script>
export default {
	name: 'TheTestLayout',
};
</script>

<style lang="sass" scoped>
$all-height: 100vh
$header-height: 10vh
$footer-height: 10vh
$wrapper-height: $all-height - $header-height - $footer-height
body
  margin: 0 auto
  min-height: 100%


  #test-layout
    display: flex
    flex-grow: 1
    flex-direction: column

    header
      display: flex
      min-height: 70px
      flex-direction: row
      align-items: center
      background-color: #2ecc71
      flex: 1 1 $header-height

      #nav
        display: flex
        flex-grow: 4
        justify-content: center
      #auth
        display: flex
        flex-grow: 1
        justify-content: flex-end

    #wrapper
      display: flex
      flex-direction: row
      flex: 1 1 $wrapper-height
      align-items: stretch

      aside
        display: flex
        background-color: green
        flex-grow: 1

      main
        display: flex
        background-color: gray
        flex-grow: 4
        flex-direction: column

    footer
      display: flex
      min-height: 70px
      flex-direction: row
      align-items: center
      justify-content: center
      flex: 1 1 $footer-height
      background-color: #2c3e50
      color: white
</style>
