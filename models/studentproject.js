'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class StudentProject extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  StudentProject.init({
    status_report: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'StudentProject',
  });
  return StudentProject;
};