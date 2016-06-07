var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'express' });
});

router.get('/calculadora', function(req, res, next) {
  res.render('calculadora', {});
});

router.post('/calculadora', function(req, res, next) {
  console.log(req.body);
  var resultado = 0;
  if(req.body.btnSumar && true){
    console.log("entro a sumar")
    resultado = parseFloat(req.body.txtNumero1)+parseFloat(req.body.txtNumero2);
    console.log(resultado);
  }

  if(req.body.btnRestar && true){
    console.log("entro a restar")
    resultado = parseFloat(req.body.txtNumero1)-parseFloat(req.body.txtNumero2);
    console.log(resultado);
  }

  if(req.body.btnMultipiplciar && true){
    console.log("entro a multiplicar")
    resultado = parseFloat(req.body.txtNumero1)*parseFloat(req.body.txtNumero2);
    console.log(resultado);
  }

  if(req.body.btnDividir && true){
    console.log("entro a dividir")
    resultado = parseFloat(req.body.txtNumero1)/parseFloat(req.body.txtNumero2);
    console.log(resultado);
  }
  //res.render('calculadora', {});
  req.body.resultado = resultado;
  res.render('calculadora', req.body);
});

module.exports = router;
