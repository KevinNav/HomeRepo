var express = require('express');
var router = express.Router();

/* GET home page. */
router.use(function(req,res,next){
  res.locals.project = "Mi App Start Page";
  next();
});

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Kevin' });
});


module.exports = router;
