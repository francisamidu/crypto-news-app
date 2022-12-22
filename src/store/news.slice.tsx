import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {formatCryptoNews, formatCryptoPrice} from '../helpers';
import {AllNews} from '../interfaces';
import {
  fetchAirdropsThunk,
  fetchCryptoNewsThunk,
  fetchCryptoPricesThunk,
} from './thunks';

interface News extends AllNews {
  loading: boolean;
  error: string;
  searchParam: string;
}
const initialState = {
  airdrops: [],
  bitcoinNews: [],
  cryptoNews: [],
  cryptoPrices: [],
  loading: false,
  error: '',
  searchParam: '',
  techNews: [],
} as News;
const name = 'news';
const reducers = {
  setSearchParam: (state: News, action: PayloadAction<string>) => {
    return {
      ...state,
      searchParam: action.payload,
    };
  },
};

export const newsSlice = createSlice({
  name,
  initialState,
  reducers,
  extraReducers(builder) {
    // Airdrops
    builder.addCase(fetchAirdropsThunk.pending, state => {
      state.loading = true;
    });
    builder.addCase(fetchAirdropsThunk.fulfilled, (state, action) => {
      state.airdrops = action.payload;
      state.loading = false;
    });
    builder.addCase(fetchAirdropsThunk.rejected, (state, action) => {
      state.loading = false;
    });

    // CryptoNews
    builder.addCase(fetchCryptoNewsThunk.pending, state => {
      state.loading = true;
    });
    builder.addCase(fetchCryptoNewsThunk.fulfilled, (state, action) => {
      state.cryptoNews = action.payload.map(item => formatCryptoNews(item));
      state.loading = false;
    });
    builder.addCase(fetchCryptoNewsThunk.rejected, (state, action) => {
      state.loading = false;
    });

    // CryptoPrices
    builder.addCase(fetchCryptoPricesThunk.pending, state => {
      state.loading = true;
    });
    builder.addCase(fetchCryptoPricesThunk.fulfilled, (state, action) => {
      state.cryptoPrices = action.payload.map(item => formatCryptoPrice(item));
      state.loading = false;
    });
    builder.addCase(fetchCryptoNewsThunk.rejected, (state, action) => {
      state.loading = false;
    });
  },
});

export const {setSearchParam} = newsSlice.actions;
