import format from 'dayjs';
import {CryptoLivePricesResponse, CryptoNewsResponseItem} from '../../types';
import {CryptoPrice, News} from '../interfaces';

const MONTHS = [
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

export default {
  formatDateSimple: (date: string | Date) => {
    const newDate = format(new Date(date));
    return newDate.format('D/M/YY');
  },
  formatDate: (date: string | Date) => {
    const newDate = new Date(date);
    const temp = format(newDate, 'd:m:y');
    return temp.format();
  },
  formatCryptoNews: (param: CryptoNewsResponseItem) => {
    const temp = {
      id: `${param.name}-${param.url}`,
      description: param.description,
      title: param.name,
      source: param.provider[0].name,
      image: param.image,
      publishedAt: param.datePublished,
      url: param.url,
    };
    const news: News = JSON.parse(JSON.stringify(temp));
    return news;
  },
  formatCryptoPrice: (param: CryptoLivePricesResponse) => {
    const temp = {
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
      maxSupply: param.max_supply,
    };
    const price: CryptoPrice = JSON.parse(JSON.stringify(temp));
    return price;
  },
};
