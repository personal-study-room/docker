const express = require('express');

const app = express();
var port = 7000;

app.get('/', (req, res)=>{
	res.send('node js server by docker! 1.3version');
});

app.listen(port, (req, res)=>{
	console.log('node js server is running on'+ port);
});

