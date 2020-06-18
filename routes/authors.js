var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('authors/index');
});


router.get('/new', (req, res) => {
return res.render('authors/new')
});

router.get('/create', (req, res) => {
  return res.render('authors/create') 	
});


module.exports = router;
