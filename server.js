const http = require('http');
const port = process.env.PORT || 3000;
const app = require('./app');
const server = http.createServer(app);

server.listen(3000,console.log('server app is running'));