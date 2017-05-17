var express = require('express');
var router = express.Router();
var bookModel = require('../model/bookModel');
var Page = require('../model/page').Page;

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('book-list', {title: '图书列表'})
});

router.get('/getAllBook', function (req, res, next) {
    var type = req.param("type");
    var queryParams = {};
    if (type == "all") {
        queryParams ["$or"] = [{lendFlag: 0}, {lendFlag: 1}];
    }
    ;
    if (type == "new") {
        queryParams ["$or"] = [{lendFlag: 0}];
    }
    ;
    if (type == "canBorrow") {
        queryParams ["$or"] = [{lendFlag: 1}];
    }
    ;
    var pageNo = req.param("pageNo") || 1;
    var pageNum = 20;
    var sortParams = {buyDate: 'desc'};
    Page(pageNo, pageNum, bookModel, '', queryParams, sortParams, function (error, $page) {
        if (error)return console.log(err);
        res.json($page)
    });
});

router.get('/bookDetail', function (req, res, next) {
    var id = req.param('id');
    var response = res;
    bookModel.find({id: id}, function (err, result, res) {
        if (err) return console.log(err);
        response.json(result)
    })
})

module.exports = router;
