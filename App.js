"use strict";
exports.__esModule = true;
var react_1 = require("react");
require("react-native-gesture-handler");
var react_native_1 = require("react-native");
var navigation_1 = require("./src/navigation");
var NewsContextProvider_1 = require("./src/contexts/NewsContextProvider");
react_native_1.LogBox.ignoreLogs(['Require cycle:']);
exports["default"] = (function () {
    return (<NewsContextProvider_1.NewsContextProvider>
      <navigation_1.HomeNavigator />
    </NewsContextProvider_1.NewsContextProvider>);
});
