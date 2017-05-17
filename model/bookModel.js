/**
 * Created by zhaojian on 2017/5/12.
 */
'use strict';
var mongoose = require('./mongodbCon').mongoose;
// 创建schema
var Schema = mongoose.Schema;
var BookSchema = new Schema({
    id: {type: Number, index: true},
    name: {type: String},
    author: {type: String},
    img: {type: String},
    publishHouse: {type: String},
    publishTime: {type: String},
    buyDate: {type: String},
    shortDesc: {type: String},
    desc: {type: String},
    contents: {type: String},
    starLevel: {type: Number},
    lendFlag: {type: Number}
}, {collection: "book"});
var bookModel = mongoose.model('book', BookSchema);

module.exports = bookModel;