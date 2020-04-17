'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {//criação de tabelas por exemplo
  
    return queryInterface.createTable('users',
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
        email:{
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
        //yarn sequelize db:migrate:undo   ---> vai desfazer a ultima vez que vc executou o migrate, ou seja, desfaz a ultima migration
        //yarn sequelize db:migrate  atualiza a tabela
     }
     );
  
  },


  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
  }
};
