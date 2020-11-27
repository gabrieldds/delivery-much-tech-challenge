const express = require('express');
const bodyParser = require('body-parser');
const compression = require('compression');
const cors = require('cors');
const routes = require('../routes');

class ExpressLoader {
  constructor() {
    this.server = express();
    this.server.set('port', process.env.PORT || 3000);
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.server.use(compression());
    this.server.use(bodyParser.json());
    this.server.use(cors());
    this.server.use(bodyParser.urlencoded({
      extended: false,
    }));
  }

  routes() {
    this.server.use('/', routes);
  }
}

module.exports = new ExpressLoader().server;
