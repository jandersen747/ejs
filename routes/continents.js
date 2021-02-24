var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('continents', { title: 'Continents',
                            titleTwo: 'Here is the continents, displayed with ejs',
                            africa: 'Africa',
                            northAmerica: 'North America',
                            oceania: 'Oceania',
                            southAmerica: 'South America',
                            asia: 'Asia',
                            europe: 'Europe',
                            antartica: 'Antartica', 
                            chrestofa: 'chrestofa is homosexual'

    });
});

module.exports = router;
