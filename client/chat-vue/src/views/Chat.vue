<template>
	<div class="home">Chat</div>
</template>

<script>
export default {
	name: 'Chat',
	sockets: {
		connect: function () {
			console.log('socket connected');
		},
		disconnect() {},
		message(data) {
			console.log(data);
		},
	},
	mounted() {
		this.$socket.connect();

		this.$socket.emit('message', 'lol');

		const token =
			'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImdhbGxhZ3V6MUBnbWFpbC5jb20iLCJpZCI6IjYwY2IwNmFkMjdjZmI0MWIxNjQ3MjM2MSIsImlzQWN0aXZhdGVkIjpmYWxzZSwiaWF0IjoxNjI0MDMxMjk4LCJleHAiOjE2MjQwMzMwOTh9.5I148DLCa4nd7G1v22F2StYzkGzlA02yZrk0Vy8oPCk';
		localStorage.setItem('token', token);
		// localStorage.removeItem("token");

		//this.$socket.emit({ room: 666, token: localStorage.getItem("token") });
	},
};
</script>
