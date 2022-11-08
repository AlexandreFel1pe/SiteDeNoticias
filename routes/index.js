var express = require('express');
var passport = require('passport');
var db = require('../db');
var fetchTodos = require('../config/sessionconfig');
var sequelize = require('/users/user/programaçao/site/models/db');
var Noticias = require('/users/user/programaçao/site/models/noticias');

var router = express.Router();

router.get('/', function(req, res, next) {
  Noticias.findAll({order: [
    ['createdAt', 'DESC'],
]}).then(function(Noticias){
    res.render('usuario/index', {Noticias: Noticias})
});
});

router.get('/noticia/:titulo', function(req, res, next) {
  titulo = req.params.titulo;
  Noticias.findOne({where: {titulo: titulo}}).then(function(titulo){
    res.render('usuario/noticia', {Noticias: titulo})
  })
});

router.get('//:categoria', function(req, res, next) {
  categoria = req.params.categoria;
  Noticias.findAll({where: {categoria: categoria}}).then(function(categoria){
    res.render('usuario/categoria', {Noticias: categoria})
  })
});

module.exports = router;
