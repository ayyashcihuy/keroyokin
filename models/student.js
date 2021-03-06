'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Student extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Student.hasMany(models.Project)
      Student.belongsToMany(models.Project, {through: models.StudentProject})
    }
    getTaskBy() {
      return `task by ${this.name}`
    }
  };
  Student.init({
    name: {
      type : DataTypes.STRING,
      validate : {
        notEmpty : {
          msg : 'name required'
        }
      }
    },
    email: {
      type : DataTypes.STRING,
      validate : {
        notEmpty : {
          msg : 'email required'
        }
      }
    },
    password:{
      type : DataTypes.STRING,
      validate : {
        notEmpty : {
          msg : 'password required'
        }
      }
    } 
  }, {
    sequelize,
    modelName: 'Student',
  });
  return Student;
};