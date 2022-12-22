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
exports.setSearchParam = exports.newsSlice = void 0;
var toolkit_1 = require("@reduxjs/toolkit");
var helpers_1 = require("../helpers");
var thunks_1 = require("./thunks");
var initialState = {
    airdrops: [],
    bitcoinNews: [],
    cryptoNews: [],
    cryptoPrices: [],
    loading: false,
    error: '',
    searchParam: '',
    techNews: []
};
var name = 'news';
var reducers = {
    setSearchParam: function (state, action) {
        return __assign(__assign({}, state), { searchParam: action.payload });
    }
};
exports.newsSlice = (0, toolkit_1.createSlice)({
    name: name,
    initialState: initialState,
    reducers: reducers,
    extraReducers: function (builder) {
        // Airdrops
        builder.addCase(thunks_1.fetchAirdropsThunk.pending, function (state) {
            state.loading = true;
        });
        builder.addCase(thunks_1.fetchAirdropsThunk.fulfilled, function (state, action) {
            state.airdrops = action.payload;
            state.loading = false;
        });
        builder.addCase(thunks_1.fetchAirdropsThunk.rejected, function (state, action) {
            state.loading = false;
        });
        // CryptoNews
        builder.addCase(thunks_1.fetchCryptoNewsThunk.pending, function (state) {
            state.loading = true;
        });
        builder.addCase(thunks_1.fetchCryptoNewsThunk.fulfilled, function (state, action) {
            state.cryptoNews = action.payload.map(function (item) { return (0, helpers_1.formatCryptoNews)(item); });
            state.loading = false;
        });
        builder.addCase(thunks_1.fetchCryptoNewsThunk.rejected, function (state, action) {
            state.loading = false;
        });
        // CryptoPrices
        builder.addCase(thunks_1.fetchCryptoPricesThunk.pending, function (state) {
            state.loading = true;
        });
        builder.addCase(thunks_1.fetchCryptoPricesThunk.fulfilled, function (state, action) {
            state.cryptoPrices = action.payload.map(function (item) { return (0, helpers_1.formatCryptoPrice)(item); });
            state.loading = false;
        });
        builder.addCase(thunks_1.fetchCryptoNewsThunk.rejected, function (state, action) {
            state.loading = false;
        });
    }
});
exports.setSearchParam = exports.newsSlice.actions.setSearchParam;
