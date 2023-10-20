const express = require('express');
const createLocalServer = require('http').createServer;
const createHttpsServer = require('https').createServer;

const app = express();
const port = 3001;
const host = '0.0.0.0';
const node_env = 'development';

app.use(express.json());

const server = (node_env == 'production')
    ? createHttpsServer({}, app)
    : createLocalServer({}, app);

server.listen(port, host, () => {
    console.log(`⚡️[server]: Server is running on port:${port}`);
});

app.get('/', (req, res) => {
    res.status(200).json({ message: 'Welcome to Weeshr app Server' });
});
