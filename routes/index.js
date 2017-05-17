var express = require('express');
var router = express.Router();
var bookModel = require('../model/bookModel');

/* GET home page. */
router.get('/', function (req, res, next) {
    res.redirect('/book-list');
});

router.get('/book-list', function (req, res, next) {
    res.render('book-list', {title: '图书列表'})
});

router.get('/getAllBook', function (req, res, next) {
    var type = req.param("type");
    var params = "";
    if (type == "all") {
        params = {"$or": [{lendFlag: 0}, {lendFlag: 1}]}
    }
    ;
    if (type == "new") {
        params = {"$or": [{lendFlag: 0}]}
    }
    ;
    if (type == "canBorrow") {
        params = {"$or": [{lendFlag: 1}]}
    }
    ;
    var response=res;
    bookModel.find(params, function (err, result, res) {
        if(err) return console.log(err);
        response.json(result)
    })
});

router.get('/bookDetail', function (req, res, next) {
    var id = req.param('id');
    var response = res;
    bookModel.find({id: id}, function (err, result, res) {
        if (err) return console.log(err);
        response.json(result)
    })
})

router.get('/book-detail', function (req, res, next) {
    res.render('book-detail', {title: "JavaScript权威指南"})
})

module.exports = router;
