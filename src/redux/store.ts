import {configureStore, Store} from '@reduxjs/toolkit';
import {newsSlice} from './news.slice';

export const store = configureStore({
  reducer: {
    news: newsSlice.reducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
