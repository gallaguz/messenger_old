<template>
	<div class="wrapper">
		<div class="chat-window">
			<div class="user">
				<span class="empty-space"></span>
				<span class="message"
					>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi
					consectetur cumque eos illo in laudantium nam odio qui vitae! Adipisci
					architecto beatae et ipsam magni modi natus quis sint totam.</span
				>
			</div>
			<div class="other">
				<span class="empty-space"></span>
				<span class="message">other</span>
			</div>
			<div class="user">
				<span class="empty-space"></span>
				<span class="message">user</span>
			</div>
			<div class="other">
				<span class="empty-space"></span>
				<span class="message">other</span>
			</div>
			<div class="other">
				<span class="empty-space"></span>
				<span class="message">other</span>
			</div>
			<div class="user">
				<span class="empty-space"></span>
				<span class="message">user</span>
			</div>
			<div class="user">
				<span class="empty-space"></span>
				<span class="message">user</span>
			</div>
			<div class="other">
				<span class="empty-space"></span>
				<span class="message">other</span>
			</div>
			<div class="user">
				<span class="empty-space"></span>
				<span class="message">user</span>
			</div>
			<div class="other">
				<span class="empty-space"></span>
				<span class="message">other</span>
			</div>
			<div class="other">
				<span class="empty-space"></span>
				<span class="message">other</span>
			</div>
			<div class="user">
				<span class="empty-space"></span>
				<span class="message">user</span>
			</div>
			<div class="user">
				<span class="empty-space"></span>
				<span class="message">user</span>
			</div>
			<div class="other">
				<span class="empty-space"></span>
				<span class="message">other</span>
			</div>
			<div class="user">
				<span class="empty-space"></span>
				<span class="message">user</span>
			</div>
			<div class="other">
				<span class="empty-space"></span>
				<span class="message">other</span>
			</div>
			<div class="other">
				<span class="empty-space"></span>
				<span class="message">other</span>
			</div>
			<div class="user">
				<span class="empty-space"></span>
				<span class="message">user</span>
			</div>
			<div class="user">
				<span class="empty-space"></span>
				<span class="message">user</span>
			</div>
			<div class="other">
				<span class="empty-space"></span>
				<span class="message">other</span>
			</div>
			<div class="user">
				<span class="empty-space"></span>
				<span class="message">user</span>
			</div>
			<div class="other">
				<span class="empty-space"></span>
				<span class="message">other</span>
			</div>
			<div class="other">
				<span class="empty-space"></span>
				<span class="message">other</span>
			</div>
			<div class="user">
				<span class="empty-space"></span>
				<span class="message">user</span>
			</div>
			<div class="user">
				<span class="empty-space"></span>
				<span class="message">user</span>
			</div>
			<div class="other">
				<span class="empty-space"></span>
				<span class="message">other</span>
			</div>
			<div class="user">
				<span class="empty-space"></span>
				<span class="message">user</span>
			</div>
			<div class="other">
				<span class="empty-space"></span>
				<span class="message">other</span>
			</div>
			<div class="other">
				<span class="empty-space"></span>
				<span class="message">other</span>
			</div>
			<div class="user">
				<span class="empty-space"></span>
				<span class="message">user</span>
			</div>
			<div class="user">
				<span class="empty-space"></span>
				<span class="message">user</span>
			</div>
			<div class="other">
				<span class="empty-space"></span>
				<span class="message">other</span>
			</div>
			<div class="user">
				<span class="empty-space"></span>
				<span class="message">user</span>
			</div>
			<div class="other">
				<span class="empty-space"></span>
				<span class="message">other</span>
			</div>
			<div class="other">
				<span class="empty-space"></span>
				<span class="message">other</span>
			</div>
		</div>
		<div class="input-field">
			<input type="text" />
		</div>
	</div>
</template>

<script>
export default {
	name: 'test',
};
</script>

<style lang="sass" scoped>
$all-height: 100vh
$header-height: 10vh
$footer-height: 10vh
$wrapper-height: $all-height - $header-height - $footer-height
.wrapper
  height: $wrapper-height
  display: flex
  flex-direction: column
  justify-content: space-between

  .chat-window
    display: flex
    flex: 1 1 100%
    flex-direction: column
    border-bottom: 1px solid white
    overflow: auto
    &>div
      display: flex
      margin: 5px
      &>.empty-space
        display: flex
        width: 30%
        background-color: white
      &>.message
        display: flex
        width: 70%

    .user
      justify-content: flex-end
      outline: 1px solid red
      &>.message
        justify-content: flex-end

    .other
      justify-content: flex-start
      flex-direction: row-reverse
      outline: 1px solid black
  .input-field
    display: flex
</style>
