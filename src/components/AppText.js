"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
exports.__esModule = true;
var react_native_1 = require("react-native");
var react_1 = require("react");
var Colors_1 = require("../constants/Colors");
var AppText = function (_a) {
    var children = _a.children, style = _a.style, textType = _a.textType;
    var textStyle = {};
    switch (textType) {
        case 'light': {
            textStyle = styles.light;
            break;
        }
        case 'regular': {
            textStyle = styles.regular;
            break;
        }
        case 'bold': {
            textStyle = styles.bold;
            break;
        }
        default: {
            textStyle = styles.regular;
            break;
        }
    }
    var passedStyles = Array.isArray(style)
        ? Object.assign.apply(Object, __spreadArray([{}], style, false)) : style;
    var customStyles = passedStyles ? Object.values(passedStyles) : null;
    if (customStyles) {
        return <react_native_1.Text style={__spreadArray([textStyle], customStyles, true)}>{children}</react_native_1.Text>;
    }
    return (<react_native_1.Text style={[textStyle, { color: Colors_1["default"].SECONDARY_COLOR }]}>{children}</react_native_1.Text>);
};
var styles = react_native_1.StyleSheet.create({
    light: {
        fontFamily: 'Roboto-Light'
    },
    bold: {
        fontFamily: 'Roboto-Bold'
    },
    regular: {
        fontFamily: 'Roboto-Book'
    }
});
exports["default"] = AppText;
