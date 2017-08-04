/**
 * Created by zhaojian on 2017/8/4.
 */
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');
var ContentStore = assign({}, EventEmitter.prototype, {
    value: []
})
module.exports = ContentStore;
