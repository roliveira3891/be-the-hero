const express = require('express');

const OngController = require('./controllers/OngController');
const IncidentControler = require('./controllers/IncidentController');
const ProfileControler = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

const routes = express.Router();

routes.post('/sessions', SessionController.create);

routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);

routes.get('/profile', ProfileControler.index);


routes.post('/incidents', IncidentControler.create);
routes.get('/incidents', IncidentControler.index);

module.exports = routes;