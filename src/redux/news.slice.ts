import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {News} from '../interfaces';

const name = 'news';
const initialState = {
  newsList: [] as News[],
};
type NewsList = typeof initialState;
const reducers = {
  addNews: (state: NewsList, action: PayloadAction<News>) => {
    return {
      newsList: [...state.newsList, action.payload],
    };
  },
  setNewsList: (_: NewsList, action: PayloadAction<News[]>) => {
    return {
      newsList: action.payload,
    };
  },
};
export const newsSlice = createSlice({
  name,
  initialState,
  reducers,
});

export const {addNews, setNewsList} = newsSlice.actions;
