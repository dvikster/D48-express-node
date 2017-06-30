var express = require('express');
var router = express.Router();

/* GET about page. */
router.get('/', function(req, res, next) {
    res.render('about', { title: 'О нас', active: 'active-about' });
});

module.exports = router;
