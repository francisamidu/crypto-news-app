"use strict";
exports.__esModule = true;
exports.styles = exports.StyledView = exports.StyledTouchableOpacity = exports.StyledTouchable = exports.StyledTextInput = exports.StyledText = exports.StyledScrollView = exports.StyledSafeAreaView = exports.StyledImage = exports.StyledFlatList = exports.StyledFlashList = exports.StyledButton = void 0;
var nativewind_1 = require("nativewind");
var react_native_1 = require("react-native");
var flash_list_1 = require("@shopify/flash-list");
var AppText_1 = require("../components/AppText");
var Colors_1 = require("../constants/Colors");
var styles = react_native_1.StyleSheet.create({
    mainColor: {
        color: Colors_1["default"].MAIN_COLOR
    },
    mainFont: {
        fontFamily: 'Inter-Regular'
    },
    flex2: {
        flex: 2
    },
    h1: {
        fontSize: 17
    },
    h2: {
        fontSize: 14
    },
    tabBar: {
        fontSize: 18,
        fontFamily: 'Inter-Regular'
    }
});
exports.styles = styles;
var StyledButton = (0, nativewind_1.styled)(react_native_1.Button);
exports.StyledButton = StyledButton;
var StyledFlashList = (0, nativewind_1.styled)(flash_list_1.FlashList);
exports.StyledFlashList = StyledFlashList;
var StyledFlatList = (0, nativewind_1.styled)(react_native_1.FlatList);
exports.StyledFlatList = StyledFlatList;
var StyledImage = (0, nativewind_1.styled)(react_native_1.Image);
exports.StyledImage = StyledImage;
var StyledSafeAreaView = (0, nativewind_1.styled)(react_native_1.SafeAreaView);
exports.StyledSafeAreaView = StyledSafeAreaView;
var StyledScrollView = (0, nativewind_1.styled)(react_native_1.ScrollView);
exports.StyledScrollView = StyledScrollView;
var StyledText = (0, nativewind_1.styled)(AppText_1["default"]);
exports.StyledText = StyledText;
var StyledTextInput = (0, nativewind_1.styled)(react_native_1.TextInput);
exports.StyledTextInput = StyledTextInput;
var StyledTouchableOpacity = (0, nativewind_1.styled)(react_native_1.TouchableOpacity);
exports.StyledTouchableOpacity = StyledTouchableOpacity;
var StyledTouchable = (0, nativewind_1.styled)(react_native_1.TouchableWithoutFeedback);
exports.StyledTouchable = StyledTouchable;
var StyledView = (0, nativewind_1.styled)(react_native_1.View);
exports.StyledView = StyledView;
