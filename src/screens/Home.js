"use strict";
exports.__esModule = true;
var react_1 = require("react");
var theme_1 = require("../styles/theme");
var components_1 = require("../components");
var react_native_easy_grid_1 = require("react-native-easy-grid");
var theme_2 = require("../styles/theme");
var hooks_1 = require("../hooks/hooks");
var Home = function () {
    var news = (0, hooks_1.useAppSelector)(function (state) { return state; }).news;
    var _a = (0, react_1.useState)(false), isSet = _a[0], setIsSet = _a[1];
    (0, react_1.useEffect)(function () {
        var temp = Object.values(news).flat(Infinity).length;
        if (temp)
            setIsSet(true);
    }, [news]);
    var renderItem = function (_a) {
        var item = _a.item;
        return (<components_1.NewsCard news={item} key={item.id}/>);
    };
    var renderSection = function () {
        switch (news.searchParam) {
            case 'airdrop': {
                break;
            }
            case 'bitcoin': {
                return (<theme_2.StyledFlashList contentContainerStyle={{
                        paddingVertical: 5,
                        paddingHorizontal: 5
                    }} estimatedItemSize={50} renderItem={renderItem} data={news.bitcoinNews}/>);
            }
            case 'crypto-prices': {
                break;
            }
            case 'tech-news': {
                return (<theme_2.StyledFlashList contentContainerStyle={{
                        paddingVertical: 5,
                        paddingHorizontal: 5
                    }} estimatedItemSize={50} renderItem={renderItem} data={news.techNews}/>);
            }
            default: {
                return (<theme_2.StyledFlashList contentContainerStyle={{
                        paddingVertical: 5,
                        paddingHorizontal: 5
                    }} estimatedItemSize={50} renderItem={renderItem} data={news.cryptoNews}/>);
            }
        }
    };
    return (<theme_1.StyledSafeAreaView className="w-screen h-screen">
      <react_native_easy_grid_1.Grid>
        <react_native_easy_grid_1.Row size={25}>
          <components_1.Header />
        </react_native_easy_grid_1.Row>
        <react_native_easy_grid_1.Row size={75}>
          <theme_1.StyledView className="w-full">
            <components_1.Tabs />
            {isSet ? renderSection() : <components_1.Loader />}
          </theme_1.StyledView>
        </react_native_easy_grid_1.Row>
      </react_native_easy_grid_1.Grid>
    </theme_1.StyledSafeAreaView>);
};
exports["default"] = Home;
