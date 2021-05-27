const cors = require('cors');
const logger = require('morgan');
require('dotenv').config();
const routes = require('./routes/index.routes')
const db = require('./models/index')
const { start, app } = require('./middleware/server')

var today = new Date().toJSON().slice(0,10).replace(/-/g,'-');

// app.use(logger('dev'));

const server_port = process.env.SERVER_PORT;

start(server_port);

routes(app);

module.exports = app;