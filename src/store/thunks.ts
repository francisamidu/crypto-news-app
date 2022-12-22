import {createAsyncThunk} from '@reduxjs/toolkit';
import {fetchAirdrops, fetchCryptoPrices, fetchNews} from '../services/Api';

export const fetchAirdropsThunk = createAsyncThunk(
  'news/fetchAirdrops',
  async () => {
    const response = await fetchAirdrops();
    return response;
  },
);

export const fetchCryptoNewsThunk = createAsyncThunk(
  'news/fetchCryptoNews',
  /** @param param{param:string} */
  async (param: string) => {
    const response = await fetchNews(param);
    return response;
  },
);

export const fetchCryptoPricesThunk = createAsyncThunk(
  'news/fetchCryptoPrices',
  async () => {
    const response = await fetchCryptoPrices();
    return response;
  },
);
