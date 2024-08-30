'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Teacher extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Teacher.hasMany(models.Manage, { foreignKey: 'teacherId' });
      Teacher.belongsTo(models.Class, { foreignKey: 'classId' });
      Teacher.belongsTo(models.School, { foreignKey: 'schoolId' });
      // Teacher.belongsToMany(models.School, { through: models.TeacherSchool, foreignKey: 'teacherId' });
      // Teacher.belongsToMany(models.Class, { through: models.TeacherClass, foreignKey: 'classId' });
      // Teacher.belongsToMany(models.Subject, { through: models.TeacherSubject, foreignKey: 'schoolId' });
    }
  }
  Teacher.init({
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    phoneNumber: DataTypes.STRING,
    address: DataTypes.STRING,
    schoolId: DataTypes.STRING,
    classId: DataTypes.STRING

  }, {
    sequelize,
    modelName: 'Teacher',
  });
  return Teacher;
};