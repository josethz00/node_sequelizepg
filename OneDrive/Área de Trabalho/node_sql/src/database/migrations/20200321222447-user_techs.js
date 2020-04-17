'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {//criação de tabelas por exemplo
  
      return queryInterface.createTable('user_techs',
       {  id:{
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false, 
          },
          user_id:{
            type: Sequelize.INTEGER,
            allowNull: false,
            references: { model: 'users', key: 'id'},
            onUpdate: 'CASCADE',
            onDelete: 'CASCADE',
          },
          tech_id:{
            type: Sequelize.INTEGER,
            allowNull: false,
            references: { model: 'techs', key: 'id'},
            onUpdate: 'CASCADE',
            onDelete: 'CASCADE',
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

      return queryInterface.dropTable('user_techs');

  }
};
