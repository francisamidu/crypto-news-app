"use strict";
exports.__esModule = true;
var theme_1 = require("../styles/theme");
var react_1 = require("react");
var react_native_easy_grid_1 = require("react-native-easy-grid");
var NewsCard = function (_a) {
    var _b = _a.news, id = _b.id, image = _b.image, title = _b.title, source = _b.source, publishedAt = _b.publishedAt;
    return (<theme_1.StyledView className="py-2 border-b-[1px] border-gray-50">
      <react_native_easy_grid_1.Grid>
        <react_native_easy_grid_1.Row size={80}>
          <react_native_easy_grid_1.Col size={70}>
            <theme_1.StyledText textType="bold" className="text-slate-800">
              {title}
            </theme_1.StyledText>
          </react_native_easy_grid_1.Col>
          <react_native_easy_grid_1.Col size={30}>
            <theme_1.StyledImage source={{ uri: image }} className="rounded w-full h-full"/>
          </react_native_easy_grid_1.Col>
        </react_native_easy_grid_1.Row>
        <react_native_easy_grid_1.Row size={20}>
          <theme_1.StyledView className="flex-row items-center justify-between my-1 w-1/2">
            <theme_1.StyledText className="text-gray-500 text-sm">{source}</theme_1.StyledText>
            <theme_1.StyledText className="text-gray-500 text-sm -mt-2">.</theme_1.StyledText>
            <theme_1.StyledText className="text-gray-500">{String(publishedAt)}</theme_1.StyledText>
          </theme_1.StyledView>
        </react_native_easy_grid_1.Row>
      </react_native_easy_grid_1.Grid>
    </theme_1.StyledView>);
};
exports["default"] = NewsCard;
