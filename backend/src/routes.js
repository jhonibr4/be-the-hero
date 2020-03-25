const express = require('express');
const routes = express.Router();

const ongsControllers = require('./controllers/ongsControllers');
const incidentsControllers = require('./controllers/incidentsControllers');
const profileControllers = require('./controllers/profileControllers');
const sessionsControllers = require('./controllers/sessionsControllers')


routes.post('/sessions', sessionsControllers.create)

routes.get('/ongs', ongsControllers.index);
routes.post('/ongs', ongsControllers.create);

routes.get('/profile', profileControllers.index)

routes.get('/incidents', incidentsControllers.index);
routes.post('/incidents', incidentsControllers.create);
routes.delete('/incidents/:id', incidentsControllers.delete)






module.exports = routes