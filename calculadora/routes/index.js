var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'express' });
});

router.get('/calculadora', function(req, res, next) {
  res.render('calculadora', {});
});

module.exports = router;