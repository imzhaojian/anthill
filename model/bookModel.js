/**
 * Created by zhaojian on 2017/5/12.
 */
'use strict';
var mongoose = require('./mongodbCon').mongoose;
// 创建schema
var Schema = mongoose.Schema;
var BookSchema = new Schema({
    bookid: {type: Number, index: true},
    bookname: {type: Number},
    author: {type: Number},
    public: {type: Number},
    buydate: {type: Number},
    publicdate: {type: Number},
    comment: {type: Number},
    summary: {type: Number},
    rank: {type: Number}
});
var bookModel = mongoose.model('book', BookSchema);

module.exports = bookModel;