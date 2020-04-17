const { Model, DataTypes } = require('sequelize');

class User extends Model{  //extends, como se estivesse herdando, é uma "herança" de Model, herança do c#   
    static init(sequelize){ //primeiro metodo, estático
        super.init({ //chama a classe Model e com ela o metodo init, q ja tem no Model
            name: DataTypes.STRING,
            email: DataTypes.STRING,
        },
        {
            sequelize   //conexão, esse sequelize pega o parametro passado no método
        })
    }
    static associate(models){ //recebe tds os models da aplicação
        this.hasMany(models.Adress, {foreignKey: 'user_id', as: 'adresses'});  //referencia que um usuario tem muito endereços
        /*no caso do hasMany a chave estrangeira nao muda, pois em hasMany a chave estrangeira esta ali para informar a coluna FK
        que se encontra na tabela Adress*/ 
        this.belongsToMany(models.Tech, { foreignKey: 'user_id', through: 'user_techs', as: 'techs'}); // o usuario tem varias tecnologias, 
        //porem esse relacionamento sera feito através da criação de uma nova tabela
    }
}

module.exports = User;