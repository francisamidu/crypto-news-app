import {News, CryptoPrice} from '../src/interfaces';
import {AirdropNewsResponse} from './AirdropNewsResponse';

export type AllNews = {
  airdrops: Array<AirdropNewsResponse>;
  bitcoinNews: Array<News>;
  cryptoNews: Array<News>;
  cryptoPrices: Array<CryptoPrice>;
  techNews: Array<News>;
};
