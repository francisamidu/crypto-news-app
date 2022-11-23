import {CryptoNewsResponseItem} from './CryptoNewsResponseItem';

export type CryptoNewsResponse = {
  webSearchUrl: string;
  value: Array<CryptoNewsResponseItem>;
};
