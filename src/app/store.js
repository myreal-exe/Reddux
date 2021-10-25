import { configureStore } from '@reduxjs/toolkit';
import searchTermReducer from '../features/searchTerm/searchTermSlice';
import filterReducer from '../features/filter/filterSlice';
import feedDataReducer from '../features/feedData/feedDataSlice';


export const store = configureStore({
  reducer: {
    searchTerm:searchTermReducer,
    filter:filterReducer,
    feedData:feedDataReducer
  },
});
