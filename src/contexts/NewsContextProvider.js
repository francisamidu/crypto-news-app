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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.useNews = exports.NewsContextProvider = void 0;
var react_1 = require("react");
var helpers_1 = require("../helpers");
var Api_1 = require("../services/Api");
var images_1 = require("../shared/images");
var image1 = images_1["default"].image1, image2 = images_1["default"].image2, image3 = images_1["default"].image3, image4 = images_1["default"].image4, image5 = images_1["default"].image5, image6 = images_1["default"].image6, image7 = images_1["default"].image7, image8 = images_1["default"].image8, image9 = images_1["default"].image9;
var NewsContext = (0, react_1.createContext)({
    news: {
        airdrops: [],
        bitcoinNews: [],
        cryptoNews: [],
        cryptoPrices: [],
        techNews: []
    },
    param: '',
    setNews: function () { },
    fetchNews: function () { },
    setParam: function () { }
});
var NewsContextProvider = function (_a) {
    var children = _a.children;
    var _b = (0, react_1.useState)({
        airdrops: [],
        bitcoinNews: [],
        cryptoNews: [],
        cryptoPrices: [],
        techNews: []
    }), news = _b[0], setNews = _b[1];
    var _c = (0, react_1.useState)('crypto'), param = _c[0], setParam = _c[1];
    var queryNews = function () { return __awaiter(void 0, void 0, void 0, function () {
        var _a, airdrops, bitcoinTempNews, bitcoinNews, temp, cryptoPrices, techTempNews, techNews, techTempNews, techNews, error_1;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 12, , 13]);
                    _a = param;
                    switch (_a) {
                        case 'airdrop': return [3 /*break*/, 1];
                        case 'bitcoin': return [3 /*break*/, 3];
                        case 'crypto-prices': return [3 /*break*/, 5];
                        case 'tech-news': return [3 /*break*/, 7];
                    }
                    return [3 /*break*/, 9];
                case 1: return [4 /*yield*/, (0, Api_1.fetchAirdrops)()];
                case 2:
                    airdrops = _b.sent();
                    setNews(__assign(__assign({}, news), { airdrops: airdrops }));
                    return [3 /*break*/, 11];
                case 3: return [4 /*yield*/, (0, Api_1.fetchNews)(param)];
                case 4:
                    bitcoinTempNews = _b.sent();
                    bitcoinNews = bitcoinTempNews === null || bitcoinTempNews === void 0 ? void 0 : bitcoinTempNews.map(function (item) {
                        return (0, helpers_1.formatCryptoNews)(item);
                    });
                    setNews(__assign(__assign({}, news), { bitcoinNews: bitcoinNews }));
                    return [3 /*break*/, 11];
                case 5: return [4 /*yield*/, (0, Api_1.fetchCryptoPrices)()];
                case 6:
                    temp = _b.sent();
                    cryptoPrices = temp === null || temp === void 0 ? void 0 : temp.map(function (item) { return (0, helpers_1.formatCryptoPrice)(item); });
                    setNews(__assign(__assign({}, news), { cryptoPrices: cryptoPrices }));
                    return [3 /*break*/, 11];
                case 7: return [4 /*yield*/, (0, Api_1.fetchNews)(param)];
                case 8:
                    techTempNews = _b.sent();
                    techNews = techTempNews === null || techTempNews === void 0 ? void 0 : techTempNews.map(function (item) { return (0, helpers_1.formatCryptoNews)(item); });
                    setNews(__assign(__assign({}, news), { techNews: techNews }));
                    return [3 /*break*/, 11];
                case 9: return [4 /*yield*/, (0, Api_1.fetchNews)(param)];
                case 10:
                    techTempNews = _b.sent();
                    techNews = techTempNews === null || techTempNews === void 0 ? void 0 : techTempNews.map(function (item) { return (0, helpers_1.formatCryptoNews)(item); });
                    setNews(__assign(__assign({}, news), { techNews: techNews }));
                    return [3 /*break*/, 11];
                case 11: return [3 /*break*/, 13];
                case 12:
                    error_1 = _b.sent();
                    console.log(error_1);
                    throw error_1;
                case 13: return [2 /*return*/];
            }
        });
    }); };
    (0, react_1.useEffect)(function () {
        queryNews();
        return function () {
            setNews({
                airdrops: [],
                bitcoinNews: [],
                cryptoNews: [],
                cryptoPrices: [],
                techNews: []
            });
        };
    }, [param]);
    (0, react_1.useEffect)(function () {
        console.log(news);
    }, [news]);
    return (<NewsContext.Provider value={{ news: news, param: param, setNews: setNews, setParam: setParam }}>
      {children}
    </NewsContext.Provider>);
};
exports.NewsContextProvider = NewsContextProvider;
var useNews = function () { return (0, react_1.useContext)(NewsContext); };
exports.useNews = useNews;
