'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class School extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // // define association here
      School.hasMany(models.Student, { foreignKey: 'schoolId' });
     School.hasMany(models.Manage, { foreignKey: 'schoolId' });
      
      // School.hasMany(models.Class, { foreignKey: 'school_id' });
      School.hasMany(models.Teacher, { foreignKey: 'schoolId' });
    }
  }
  School.init({
    schoolName: DataTypes.STRING,
    address: DataTypes.STRING,
    schoolEmail: DataTypes.STRING,
    phoneNumber: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'School',
  });
  return School;
};