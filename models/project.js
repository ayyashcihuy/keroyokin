'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Project extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Project.belongsToMany(models.Student, {through: models.StudentProject, foreignKey: 'ProjectId'})
    }
  };
  Project.init({
    task_name: DataTypes.STRING,
    subject: DataTypes.STRING,
    detail_task: DataTypes.STRING,
    answer: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Project',
  });
  return Project;
};