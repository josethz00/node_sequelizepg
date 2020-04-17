const express = require('express');
const UserController = require('./controllers/UserController'); //pega o controller, onde tem as funções e os parametros req e res
const AdressController = require('./controllers/AdressController');
const TechController = require('./controllers/TechController');
const ReportController = require('./controllers/ReportController');

const routes = express.Router();  //recebe o Router(), para ser usado

routes.get('/users', UserController.index);   //chama o arquivo que esta na variável, e o model/função "index"
routes.post('/users', UserController.store);  // chama o arquivo que esta na variavel, e o model/função "store"

routes.get('/users/:user_id/adresses', AdressController.index);
routes.post('/users/:user_id/adresses', AdressController.store);

routes.get('/users/:user_id/techs', TechController.index);
routes.post('/users/:user_id/techs', TechController.store);
routes.delete('/users/:user_id/techs', TechController.delete);

routes.get('/report', ReportController.show);

module.exports = routes;