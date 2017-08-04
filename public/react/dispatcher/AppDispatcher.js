/**
 * Created by zhaojian on 2017/8/4.
 */
var Dispatcher = require("flux").Dispatcher;
var ContentStore = require("../store/ContentStore");
var AppDispatcher = new Dispatcher();

AppDispatcher.register(function (action) {
    switch (action.actionType) {
        case 'ADD_NEW_ITEM':
            ContentStore.value;
            break;
    }
});
module.exports = AppDispatcher;