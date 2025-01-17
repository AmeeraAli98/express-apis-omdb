'use strict';
const {
  Model
} = require('sequelize');
const db = require('.');
module.exports = (sequelize, DataTypes) => {
  class fave extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  fave.init({
    title: DataTypes.STRING,
    imdbid: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'fave',
  });
  return fave;
};
