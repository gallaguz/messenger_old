require('dotenv').config();
const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
const router = require('./router');
const errorMiddleware = require('./middlewares/error-middleware');

const PORT = process.env.PORT || 5000;
const app = express();
const allowList = [process.env.REACT_CLIENT_URL, process.env.VUE_CLIENT_URL];

app.use(express.json());
app.use(cookieParser());
app.use(
	cors({
		credentials: true,
		origin: allowList,
	})
);
app.use('/api', router);
app.use(errorMiddleware);

const start = async () => {
	try {
		await mongoose
			.connect(process.env.DB_URL, {
				useNewUrlParser: true,
				useUnifiedTopology: true,
				useFindAndModify: false,
				useCreateIndex: true,
			})
			.then(() => {
				console.log('mongoDb successfully connected');
			})
			.catch((e) => {
				console.log(e);
			});

		app.listen(PORT);
	} catch (e) {
		console.log(e);
	}
};

start()
	.then(() => {
		console.log(`Api Server started on http://localhost:${PORT}`);
	})
	.catch((e) => console.log(e));
