require('dotenv').config();
const http = require('http');
const port = process.env.PORT || '3001';
const server = http.createServer();
// const auth = require('./middlewares/auth-middleware');
const tokenService = require('./services/token-service');

const io = require('socket.io')(server, {
	cors: {
		origin: process.env.CLIENT_URL,
		credentials: true,
	},
});

io.on('connection', (socket) => {
	console.log(`New websocket connection: ${socket.id}`);

	socket.emit('message', 'Welcome to chat');

	socket.use((event, next) => {
		setTimeout(() => {
			console.log(
				'socket.handshake.headers.authorization',
				socket.handshake.headers.authorization
			);

			if (socket.handshake.headers.authorization) {
				const bearer = socket.handshake.headers.authorization.split(' ');
				const token = tokenService.validateAccessToken(bearer[1]);
				if (!token) {
					console.log('User not authenticated');
				} else {
					console.log('Email from token', token.email);
					next();
				}
			}
		}, 1000);
	});

	socket.on('authenticate', () => {
		console.log('authenticate');
	});

	socket.on('authenticated', () => {
		//this socket is authenticated, we are good to handle more events from it.
		console.log('authenticated');
	});

	socket.on('disconnect', () => {
		console.log(`disconnect: ${socket.id}`);
	});

	socket.on('error', (e) => {
		console.log('error', e);
	});
});

server.listen(port);
server.on('error', (error) => {
	console.log('some error', error);
});
server.on('listening', () => {
	console.log('Server start on: http://localhost:' + port);
});
