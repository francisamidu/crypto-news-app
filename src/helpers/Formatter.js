"use strict";
exports.__esModule = true;
var dayjs_1 = require("dayjs");
var MONTHS = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sept',
    'Oct',
    'Nov',
    'Dec',
];
exports["default"] = {
    formatDateSimple: function (date) {
        var newDate = (0, dayjs_1["default"])(new Date(date));
        return newDate.format('D/M/YY');
    },
    formatDate: function (date) {
        var newDate = new Date(date);
        var temp = (0, dayjs_1["default"])(newDate, 'd:m:y');
        return temp.format();
    },
    formatCryptoNews: function (param) {
        var temp = {
            id: "".concat(param.name, "-").concat(param.url),
            description: param.description,
            title: param.name,
            source: param.provider[0].name,
            image: param.image,
            publishedAt: param.datePublished,
            url: param.url
        };
        var news = JSON.parse(JSON.stringify(temp));
        return news;
    },
    formatCryptoPrice: function (param) {
        var temp = {
            id: param.id,
            symbol: param.symbol,
            name: param.name,
            image: param.image,
            currentPrice: param.current_price,
            marketCap: param.market_cap,
            marketCapRank: param.market_cap_rank,
            totalVolume: param.total_volume,
            high24h: param.high_24h,
            low24h: param.low_24h,
            priceChange24h: param.price_change_24h,
            priceChangePercentage24h: param.price_change_percentage_24h,
            marketCapChange24h: param.market_cap_change_24h,
            marketCapChangePercentage24h: param.market_cap_change_percentage_24h,
            circulatingSupply: param.circulating_supply,
            totalSupply: param.total_supply,
            maxSupply: param.max_supply
        };
        var price = JSON.parse(JSON.stringify(temp));
        return price;
    }
};
