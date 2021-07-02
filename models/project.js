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
      Project.belongsToMany(models.Student, {through: models.StudentProject})
      Project.belongsTo(models.Student)
    }
  };
  Project.init({
    task_name: DataTypes.STRING,
    subject: DataTypes.STRING,
    detail_task: DataTypes.TEXT,
    status_report: DataTypes.TEXT,
    StudentId: DataTypes.INTEGER
  }, {
    hooks: {
      beforeCreate: (instance, option) => {
        if(!instance.status_report) {
          instance.status_report = "solved"
        }
      }
    },
    sequelize,
    modelName: 'Project',
  });
  return Project;
};