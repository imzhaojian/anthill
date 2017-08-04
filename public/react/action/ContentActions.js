/**
 * Created by zhaojian on 2017/8/4.
 */
var AppDispatcher = require("../dispatcher/AppDispatcher");
var ContentActions = {
    addNewItem: function (text) {
        AppDispatcher.dispatch({
            actionType: 'ADD_NEW_ITEM',
            text: text
        });
    }
};
module.exports = ContentActions;