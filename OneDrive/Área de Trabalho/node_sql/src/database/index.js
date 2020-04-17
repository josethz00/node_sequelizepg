const Sequelize = require('sequelize');
const dbConfig = require('../config/database');  //importa o arquivo com as configurações da conexão
const User = require('../models/User');  //importa o model, com a classe e informação do model, juntamente com um parametro para conectar
const Adress = require('../models/Adress');
const Tech = require('../models/Tech');

const connection = new Sequelize(dbConfig); //cria um objeto sequelize, que recebe as configurações da conexão

User.init(connection);
Adress.init(connection); //essa connection ocupa o parametro sequelize, assim conectando o User com a base de dados
//o objeto user, recebe o metodo init, e nele o parametro de conexão(connection, que contem as configurações definidas em config/database.js)
//cada vez que e dado o init o model e cadastrado na conexão
Tech.init(connection);


User.associate(connection.models);  //chama tds os models associados a essa conexão
Adress.associate(connection.models);  //chama tds os models associados a essa conexão
Tech.associate(connection.models);  //chama tds os models associados a essa conexão

module.exports = connection;    //exporta o arquivo, como "connection"