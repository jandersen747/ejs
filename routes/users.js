var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('chrestofa is homosexual man');
});

module.exports = router;
