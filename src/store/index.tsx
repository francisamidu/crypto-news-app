import {configureStore} from '@reduxjs/toolkit';
import {newsSlice, setSearchParam} from './news.slice';
import {
  fetchAirdropsThunk,
  fetchCryptoNewsThunk,
  fetchCryptoPricesThunk,
} from './thunks';

export const store = configureStore({
  reducer: {
    news: newsSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export {
  setSearchParam,
  fetchAirdropsThunk,
  fetchCryptoNewsThunk,
  fetchCryptoPricesThunk,
};
