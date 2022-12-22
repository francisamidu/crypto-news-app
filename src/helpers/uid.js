"use strict";
exports.__esModule = true;
var uid = function () {
    var head = Math.random().toString(36).substring(2);
    var body = Math.random().toString(36).substring(3);
    var tail = Math.random().toString(36).substring(4);
    return "".concat(head, "-").concat(body, "-").concat(tail);
};
exports["default"] = uid;
