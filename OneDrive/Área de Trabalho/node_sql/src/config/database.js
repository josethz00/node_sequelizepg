module.exports = {
    dialect: 'postgres',
    host: 'localhost',
    username: 'postgres',
    password: 'brasil2017',
    database: 'node_sql',
    define:{
        timestamps: true,   // registro automatico de inserçao de data e hora
        underscored: true,  //uso do underline habilitado
    },
}; 

//objeto para conectar ao banco de dados, com as informaçoes