/**
 * Created by zhaojian on 2017/5/12.
 */
var mongoose = require('mongoose');
// 连接mongodb
mongoose.Promise = Promise;
mongoose.connect('mongodb://root:Anthill123@47.93.23.150:27017/anthill');//test是数据库名称
// 实例化连接对象
var db = mongoose.connection;
db.on('error', console.error.bind(console, '连接错误：'));
db.once('open', (callback) => {
    console.log('MongoDB连接成功！！')
})

exports.db = db;
exports.mongoose = mongoose;