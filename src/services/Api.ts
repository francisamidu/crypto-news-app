import Config from 'react-native-config';
import axios, {AxiosResponse} from 'axios';
import {
  AirdropNewsResponse,
  CryptoLivePricesResponse,
  CryptoNewsResponse,
} from '../../types';

export const fetchAirdrops = async () => {
  const options: any = {
    method: 'GET',
    url: 'https://airdrops-free-crypto.p.rapidapi.com/airdrops',
    headers: {
      'X-RapidAPI-Key': Config.RAPIDAPI_KEY,
      'X-RapidAPI-Host': 'airdrops-free-crypto.p.rapidapi.com',
    },
  };

  try {
    const res: AxiosResponse<AirdropNewsResponse[], any> = await axios.request(
      options,
    );
    return res.data;
  } catch (error) {
    throw error;
  }
};
export const fetchCryptoPrices = async () => {
  const options: any = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': Config.RAPIDAPI_KEY,
      'X-RapidAPI-Host': 'crypto-update-live.p.rapidapi.com',
    },
  };

  try {
    const res: AxiosResponse<CryptoLivePricesResponse[], any> =
      await axios.request(options);
    return res.data;
  } catch (error) {
    throw error;
  }
};
export const fetchNews = async (param?: string) => {
  const options: any = {
    method: 'GET',
    url: 'https://bing-news-search1.p.rapidapi.com/news/search',
    params: {
      q: param || 'crypto',
      freshness: 'Day',
      textFormat: 'Raw',
      safeSearch: 'Off',
    },
    headers: {
      'X-BingApis-SDK': 'true',
      'X-RapidAPI-Key': Config.RAPIDAPI_KEY,
      'X-RapidAPI-Host': Config.RAPIDAPI_HOST,
    },
  };

  try {
    const res: AxiosResponse<CryptoNewsResponse, any> = await axios.request(
      options,
    );
    return res.data.value;
  } catch (error) {
    throw error;
  }
};
