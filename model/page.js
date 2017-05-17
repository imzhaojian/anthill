/**
 * Created by zhaojian on 2017/5/17.
 */
var async = require('async');

var Page = function (pageNo, pageNum, Model, populate, queryParams, sortParams, callback) {
    var start = (pageNo - 1) * pageNum;
    var $page = {
        pageNo: pageNo
    };
    async.parallel({
        count: function (done) {  // 查询数量
            Model.count(queryParams).exec(function (err, count) {
                done(err, count);
            });
        },
        records: function (done) {   // 查询一页的记录
            Model.find(queryParams).skip(start).limit(pageNum).populate(populate).sort(sortParams).exec(function (err, doc) {
                done(err, doc);
            });
        }
    }, function (err, results) {
        var count = results.count;
        $page.totalPage = parseInt((count - 1) / pageNum) + 1;
        $page.results = results.records;
        callback(err, $page);
    });
};

module.exports = {
    Page: Page
};