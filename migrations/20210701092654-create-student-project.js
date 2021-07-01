'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('StudentProjects', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      StudentsId: {
        type: Sequelize.INTEGER,
        references: {
          model: "Students",
          key: "id"
        },
        onDelete: "cascade",
        onUpdate: "cascade"
      },
      ProjectsId: {
        type: Sequelize.INTEGER,
        references: {
          model: "Projects",
          key: "id"
        },
        onDelete: "cascade",
        onUpdate: "cascade"
      },
      status_report: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('StudentProjects');
  }
};