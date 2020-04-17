const { Model, DataTypes } = require('sequelize');

class Adress extends Model{  //extends, como se estivesse herdando, é uma "herança" de Model
    static init(sequelize){ //primeiro metodo, estático
        super.init({ //chama a classe e com ela o metodo init
            zipcode: DataTypes.STRING,
            street: DataTypes.STRING,
            number: DataTypes.INTEGER,
        },
        {
            sequelize   //conexão
        })
    }
    static associate(models){ //recebe tds os models da aplicação
        this.belongsTo(models.User, {foreignKey: 'user_id', as: 'user'});  //um endereco pertence a um usuario
    }
}

module.exports = Adress;