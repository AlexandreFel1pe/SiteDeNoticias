const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize('sitedenoticias', 'alexandre', 'vasco123', {
    host: 'localhost',
    dialect: 'mysql'
  });

module.exports = sequelize;