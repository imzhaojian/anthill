/**
 * Created by zhaojian on 2017/5/12.
 */
'use strict';
var mongoose = require('./mongodbCon').mongoose;
// 创建schema
var Schema = mongoose.Schema;
var BookSchema = new Schema({
    bookid: {type: Number, index: true},
    bookname: {type: String},
    author: {type: String},
    bookimg: {type: String},
    public: {type: String},
    buydate: {type: String},
    publicdate: {type: String},
    comment: {type: String},
    summary: {type: String},
    rank: {type: Number}
}, {collection: "book"});
var bookModel = mongoose.model('book', BookSchema);

module.exports = bookModel;