const express = require('express');
const catalogueRoutes = require('./routes/catalogue');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json()); /** application/json */

app.use((req, res, next) => {
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader(
		'Access-Control-Allow-Methods',
		'GET, POST, PUT, PATCH, DELETE'
	);
	res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
	next();
});

app.use('/catalogue', catalogueRoutes);

// General Express Error Handling middleware
app.use((err, req, res, next) => {
	console.log(err);
	const statusCode = err.statusCode || 500;
	const message = err.message;
	const data = err.data;

	return res.status(statusCode).json({
		message,
		data,
	});
});

// Running up server
const server = app.listen(8080, 'localhost', () => {
	console.clear();
	console.log('Server Listening to port...');
});
