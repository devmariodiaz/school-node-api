const express = require('express');
const helmet = require('helmet');
const routes = require('../routes/index.routes')
const app = express();

const start = (port) => {
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    app.use(express.static("public"));

    app.use(helmet()); // Helmet help us to protect the app from some known vulnerabilities

    app.listen (port, () => {
        console.log(`Server has started listening in ${port} port`);
    });

    app.get('/', (req, res) => {
        res.json({ message: 'Welcome to my app.' });
    });
}

module.exports = { start, app };