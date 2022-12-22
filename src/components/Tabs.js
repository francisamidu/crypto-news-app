"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
var theme_1 = require("../styles/theme");
var react_1 = require("react");
var helpers_1 = require("../helpers");
var Tabs = function () {
    var _a = (0, react_1.useState)([
        {
            active: true,
            id: (0, helpers_1.uid)(),
            text: 'Bitcoin'
        },
        {
            active: false,
            id: (0, helpers_1.uid)(),
            text: 'Crypto'
        },
        {
            active: false,
            id: (0, helpers_1.uid)(),
            text: 'Crypto Prices'
        },
        {
            active: false,
            id: (0, helpers_1.uid)(),
            text: 'Technology'
        },
    ]), tabs = _a[0], setTabs = _a[1];
    var handlePress = function (id) {
        var newTabs = tabs.map(function (tab) {
            if (tab.id === id) {
                return __assign(__assign({}, tab), { active: true });
            }
            return __assign(__assign({}, tab), { active: false });
        });
        setTabs(newTabs);
    };
    return (<theme_1.StyledView className="w-full rounded-t-md bg-white border-b-[1px] border-gray-300">
      <theme_1.StyledScrollView horizontal showsHorizontalScrollIndicator={false} nestedScrollEnabled contentContainerStyle={{
            paddingHorizontal: 1,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: '100%',
            marginHorizontal: 2,
            borderRadius: 20
        }}>
        {tabs.map(function (tab) { return (<theme_1.StyledView key={tab.id} className={"capitalize p-2 ".concat(tab.active
                ? 'transition-all duration-200 text-[#0762A7] border-b-[1px] border-[#0762A7]'
                : '')} onTouchEnd={function () { return handlePress(tab.id); }}>
            <theme_1.StyledText className={"text-sm ".concat(tab.active ? 'text-[#0762A7]' : '')}>
              {tab.text}
            </theme_1.StyledText>
          </theme_1.StyledView>); })}
      </theme_1.StyledScrollView>
    </theme_1.StyledView>);
};
exports["default"] = Tabs;
