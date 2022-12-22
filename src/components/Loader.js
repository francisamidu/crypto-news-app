"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_native_1 = require("react-native");
var react_native_svg_1 = require("react-native-svg");
// import ContentLoader from 'react-native-masked-loader';
var ContentLoader = require('react-native-masked-loader');
var styles = react_native_1.StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        padding: '35px 24px 0 24px',
        height: 285
    }
});
var getMaskedElement = function () {
    return (<react_native_svg_1["default"] height={250} width="100%" fill={'black'}>
      <react_native_svg_1.Rect x="0" y="0" rx="8" ry="8" width="50%" height="16"/>
      <react_native_svg_1.Rect x="0" y="30" rx="9" ry="9" width="100%" height="128"/>
      <react_native_svg_1.Rect x="0" y="172" rx="4" ry="4" width="100%" height="8"/>
      <react_native_svg_1.Rect x="0" y="188" rx="4" ry="4" width="100%" height="8"/>
      <react_native_svg_1.Rect x="0" y="204" rx="4" ry="4" width="100%" height="8"/>
    </react_native_svg_1["default"]>);
};
exports["default"] = (function () {
    var MaskedElement = getMaskedElement();
    return (<react_native_1.View style={styles.container}>
      <ContentLoader MaskedElement={MaskedElement}/>
    </react_native_1.View>);
});
