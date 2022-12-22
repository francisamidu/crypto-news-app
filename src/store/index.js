"use strict";
exports.__esModule = true;
exports.fetchCryptoPricesThunk = exports.fetchCryptoNewsThunk = exports.fetchAirdropsThunk = exports.setSearchParam = exports.store = void 0;
var toolkit_1 = require("@reduxjs/toolkit");
var news_slice_1 = require("./news.slice");
exports.setSearchParam = news_slice_1.setSearchParam;
var thunks_1 = require("./thunks");
exports.fetchAirdropsThunk = thunks_1.fetchAirdropsThunk;
exports.fetchCryptoNewsThunk = thunks_1.fetchCryptoNewsThunk;
exports.fetchCryptoPricesThunk = thunks_1.fetchCryptoPricesThunk;
exports.store = (0, toolkit_1.configureStore)({
    reducer: {
        news: news_slice_1.newsSlice.reducer
    }
});
