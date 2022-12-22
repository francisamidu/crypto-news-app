"use strict";
exports.__esModule = true;
var react_1 = require("react");
var native_stack_1 = require("@react-navigation/native-stack");
var screens_1 = require("../screens");
var screens_2 = require("../screens");
var native_1 = require("@react-navigation/native");
var Stack = (0, native_stack_1.createNativeStackNavigator)();
exports["default"] = (function () {
    return (<native_1.NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={screens_1.Home} options={{ headerShown: false }}/>
        <Stack.Screen name="News" component={screens_2.NewsItem} options={{ headerShown: false }}/>
      </Stack.Navigator>
    </native_1.NavigationContainer>);
});
