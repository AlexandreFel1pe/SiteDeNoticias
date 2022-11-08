const { Sequelize, DataTypes } = require('sequelize');
sequelize = require('./db');

const Noticias = sequelize.define('Noticia', {
    // Model attributes are defined here
    titulo: {
      type: DataTypes.STRING
    },
    conteudo: {
      type: DataTypes.STRING
    },
    categoria: {
        type: DataTypes.STRING
    },
    acessos: {
        type: DataTypes.INTEGER
      }
  });

Noticias.sync();

module.exports = Noticias;