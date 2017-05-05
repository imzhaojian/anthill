var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {title: 'Express'});
});

router.get('/book-list', function (req, res, next) {
    res.render('book-list');
});

router.get('/book-detail', function (req, res, next) {
    res.render('book-detail',{title:"JavaScript权威指南"})
})

module.exports = router;
