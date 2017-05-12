var express = require('express');
var router = express.Router();
var bookModel = require('../model/bookModel');

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {title: 'Express'});
});

router.get('/book-list', function (req, res, next) {
    res.render('book-list', {title: '图书列表'})
});

router.get('/getAllBook', function (req, res, next) {
    console.info(bookModel);
    var response=res;
    bookModel.find({},function(err, result, res){
        if(err) return console.log(err);
        response.render('book-list', { result })
    })
});

router.get('/book-detail', function (req, res, next) {
    res.render('book-detail', {title: "JavaScript权威指南"})
})

module.exports = router;
