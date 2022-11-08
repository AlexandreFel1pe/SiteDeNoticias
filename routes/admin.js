var express = require('express');
var passport = require('passport');
var db = require('../db');
var fetchTodos = require('../config/sessionconfig');
var sequelize = require('/users/user/programaçao/site/models/db');
var Noticias = require('/users/user/programaçao/site/models/noticias');

var router = express.Router();

router.get('/admin', function(req, res, next) {
    if (!req.user) { return res.redirect('/login'); }
  next();
}, fetchTodos, function(req, res, next) {
  res.locals.filter = null;
  Noticias.findAll({order: [
    ['createdAt', 'DESC'],
]}).then(function(Noticias){
    res.render('admin/admin', {Noticias: Noticias})
});
});

router.get('/publicar', function(req, res, next) {
    if (!req.user) { return res.redirect('/login'); }
  next();
}, fetchTodos, function(req, res, next) {
  res.locals.filter = null;
  res.render('admin/publicar');
});

router.post('/salvarnoticia', function(req, res, next) {
    if (!req.user) { return res.redirect('/login'); }
  next();
}, fetchTodos, function(req, res, next) {
  res.locals.filter = null;
  titulo = req.body.titulo;
  conteudo = req.body.conteudo;
  categoria = req.body.categoria;
  if (categoria == 'Esportes') {
    Noticias.create({titulo: titulo, conteudo: conteudo, categoria: categoria});
    res.redirect('/admin');
  }
  else if (categoria == 'Politica') {
    Noticias.create({titulo: titulo, conteudo: conteudo, categoria: categoria});
    res.redirect('/admin');
  }
  else if (categoria == 'Internacional') {
    Noticias.create({titulo: titulo, conteudo: conteudo, categoria: categoria});
    res.redirect('/admin');
  }
  else {
    res.redirect('/publicar');
  }
});

router.get('/delete/:titulo', function(req, res, next) {
    if (!req.user) { return res.redirect('/login'); }
  next();
}, fetchTodos, function(req, res, next) {
  res.locals.filter = null;
  titulo = req.params.titulo;
    Noticias.destroy({
        where: {titulo: titulo}});
        res.redirect('/admin');
});



module.exports = router;