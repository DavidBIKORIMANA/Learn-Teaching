// var express = require('express');
// var router = express.Router();

// /* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

// module.exports = router;
var express = require('express');
var router = express.Router();
var mainController = require('../controllers/main');

/* GET home page. */
router.get('/', mainController.home);
module.exports = router;
