'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {//criação de tabelas por exemplo
  
      return queryInterface.createTable('techs',
       {  id:{
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false, 
          },
          name:{
            type: Sequelize.STRING,
            allowNull: false,
          },
          created_at:{
            type: Sequelize.DATE,
            allowNull: false,
          },
          updated_at:{
            type: Sequelize.DATE,
            allowNull: false,
          },
          //yarn sequelize db:migrate:undo   ---> vai desfazer a ultima vez que vc executou o migrate, ou seja, desfaz a migration
          //yarn sequelize db:migrate  atualiza a tabela
       }
       );
    
  },

  down: (queryInterface, Sequelize) => { //caso der algo errado, ela mostra o que é preciso desfazer do banco de dados

      return queryInterface.dropTable('techs');

  }
};
