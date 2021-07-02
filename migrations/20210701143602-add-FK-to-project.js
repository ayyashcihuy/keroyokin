'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('Projects', 'StudentId', {
      type: Sequelize.INTEGER,
      references: {
        model: 'Students',
        key: 'id'
      },
      onUpdate: 'cascade',
      onDelete: 'cascade'
    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('Projects', 'StudentId')
  }
};
