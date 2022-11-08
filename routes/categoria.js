var express = require('express');
var passport = require('passport');
var db = require('../db');
var fetchTodos = require('../config/sessionconfig');
var sequelize = require('/users/user/programaçao/site/models/db');
var Noticias = require('/users/user/programaçao/site/models/noticias');

var router = express.Router();

router.get('/esportes', function(req, res) {
    Noticias.findAll({where: {categoria: 'Esportes'}}, {order: [
      ['createdAt', 'DESC']
  ]}).then(function(esportes) {
        res.render('usuario/categoria', {Noticias: esportes });
      });
});

router.get('/politica', function(req, res) {
    Noticias.findAll({where: {categoria: 'Politica'}}, {order: [
      ['createdAt', 'DESC']
  ]}
).then(function(politica) {
        res.render('usuario/categoria', {Noticias: politica });
      });
});

router.get('/internacional', function(req, res) {
    Noticias.findAll({where: {categoria: 'Internacional'}}, {order: [
      ['createdAt', 'DESC']
  ]}).then(function(Internacional) {
        res.render('usuario/categoria', {Noticias: Internacional });
      });
});

module.exports = router;