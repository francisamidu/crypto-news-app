import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {AllNews} from '../interfaces';

const initialState = {
  airdrops: [],
  bitcoinNews: [],
  cryptoNews: [],
  cryptoPrices: [],
  techNews: [],
} as AllNews;
const name = 'news';
const reducers = {
  setAirdrops: (state: AllNews, action: PayloadAction<any>) => {
    return {
      ...state,
      airdrops: action.payload,
    };
  },
  setBitcoinNews: (state: AllNews, action: PayloadAction<any>) => {
    return {
      ...state,
      bitcoinNews: action.payload,
    };
  },
  setCryptoNews: (state: AllNews, action: PayloadAction<any>) => {
    return {
      ...state,
      cryptoNews: action.payload,
    };
  },
  setCryptoPrices: (state: AllNews, action: PayloadAction<any>) => {
    return {
      ...state,
      cryptoPrices: action.payload,
    };
  },
  setTechPrices: (state: AllNews, action: PayloadAction<any>) => {
    return {
      ...state,
      techPrices: action.payload,
    };
  },
};

export const newsSlice = createSlice({
  name,
  initialState,
  reducers,
});

export const {setAirdrops, setBitcoinNews, setCryptoNews, setCryptoPrices} =
  newsSlice.actions;
