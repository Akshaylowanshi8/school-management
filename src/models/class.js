'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Class extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Class.hasMany(models.Teacher, { foreignKey: 'classId' });
      Class.hasMany(models.Student, { foreignKey: 'classId' });
      Class.belongsTo(models.School, { foreignKey: 'schoolId' });

      Class.belongsToMany(models.Subject, { through: models.ClassSubject, foreignKey: 'classId' });
      Class.belongsToMany(models.Teacher, { through: models.TeacherClass, foreignKey: 'classId' })
    }
  }
  Class.init({
    name: DataTypes.STRING,
    schoolId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Class',
  });
  return Class;
};