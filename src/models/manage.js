'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Manage extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {

    Manage.belongsTo(models.School, { foreignKey: 'schoolId' });
    Manage.belongsTo(models.Teacher, { foreignKey: 'teacherId' });
    Manage.belongsTo(models.Subject, { foreignKey: 'subjectId' });
    Manage.belongsTo(models.Class, { foreignKey: 'classId' });



    }
  }
  Manage.init({
    schoolId: DataTypes.STRING,
    classId: DataTypes.STRING,
    teacherId: DataTypes.STRING,
    subjectId: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Manage',
  });
  return Manage;
};