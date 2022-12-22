"use strict";
exports.__esModule = true;
var react_1 = require("react");
var Ionicons_1 = require("react-native-vector-icons/Ionicons");
var theme_1 = require("../styles/theme");
var Colors_1 = require("../constants/Colors");
var hooks_1 = require("../hooks/hooks");
var store_1 = require("../store");
var Search = function () {
    var _a = (0, react_1.useState)(''), search = _a[0], setSearch = _a[1];
    var dispatch = (0, hooks_1.useAppDispatch)();
    var handleSearch = function () {
        dispatch((0, store_1.fetchCryptoNewsThunk)(search));
    };
    (0, react_1.useEffect)(function () {
        handleSearch();
    }, [search]);
    return (<theme_1.StyledView className="bg-[#0762A7] p-4 w-full flex-row justify-center items-center">
      <theme_1.StyledView className="flex-row relative">
        <theme_1.StyledView className="absolute top-1 mt-1 left-2 z-10">
          <Ionicons_1["default"] size={20} name="search" color={Colors_1["default"].GRAY}/>
        </theme_1.StyledView>
        <theme_1.StyledTextInput placeholder="Search news" keyboardType="default" className="h-10 bg-gray-100 flex-1 rounded-md w-full p-2 pl-8" style={theme_1.styles.mainFont} value={search} onChange={function (event) {
            console.log(event);
        }}/>
      </theme_1.StyledView>
    </theme_1.StyledView>);
};
exports["default"] = Search;
