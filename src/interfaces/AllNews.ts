import {AirdropNewsResponse} from '../../types';
import {CryptoPrice} from './CryptoPrice';
import News from './News';

export interface AllNews {
  airdrops: Array<AirdropNewsResponse>;
  bitcoinNews: Array<News>;
  cryptoNews: Array<News>;
  cryptoPrices: Array<CryptoPrice>;
  techNews: Array<News>;
}
