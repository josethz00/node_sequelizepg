'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      'users', //tabela em questão
      'age', //campo a ser adicionado
      {
        type: Sequelize.INTEGER,
      },
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn(
      'users', //tabela em questão
      'age', //campo a ser adicionado
      
    );
  }
};
