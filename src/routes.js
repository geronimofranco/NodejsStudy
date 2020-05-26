const express = require('express');
const appController = require('./controller/appController');

const routes = express.Router();

routes.get('/app', appController.index);
routes.post('/app', appController.create);

module.exports = routes;