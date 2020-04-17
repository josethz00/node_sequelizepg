const express = require('express');
const routes = require('./routes');
require('./database/index'); //IMPORTA CONEXÃO
const app = express();

app.use(express.json());  //para entender requisições em formato json
app.use(routes); //define o uso do arquivo das rotas
app.listen(8900);