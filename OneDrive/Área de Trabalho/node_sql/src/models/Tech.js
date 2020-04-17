const { Model, DataTypes } = require('sequelize');

class Tech extends Model{  //extends, como se estivesse herdando, é uma "herança" de Model
    static init(sequelize){ //primeiro metodo, estático
        super.init({ //chama a classe e com ela o metodo init
            name: DataTypes.STRING,
        },
        {
            sequelize,   //conexão
            tableName: 'techs',//para forçar um nome, e barrar a pluralização do sequelize
       
        })
    }
    static associate(models){ //recebe tds os models da aplicação
          this.belongsToMany(models.User, { foreignKey: 'tech_id', through: 'user_techs', as: 'users'}); //A TABELA QUE SERÁ FEITO O RELACIONAMENTO
    }
}

module.exports = Tech;