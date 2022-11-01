/* eslint-disable camelcase */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TDefaultState, TGetDataType } from '../../types/defaultStateTypes';
import { TPictureState } from '../../types/pictureStateTypes';
import { fetchMain, fetchPicture } from '../ActionCreators';

export const defaultState: TDefaultState = {
  searchData: [],
  value: '',
  data: {
   date: '',
     explanation: '',
     title: '',
     url: ''
  },
  isLoading: false,
  currentDate: '',
}

export const mainSlice = createSlice({
    name: 'main',
    initialState: defaultState,
    reducers: {
        updateValue(state, action: PayloadAction<string>){
            state.value = action.payload;
        },
        updatecurrentDate(state, action: PayloadAction<string>){
            state.currentDate = action.payload;
        },
    },
    extraReducers: {
      [fetchMain.fulfilled.type]: (
        state,
        action: PayloadAction<TGetDataType>
      ) => {
        state.isLoading = false;
        state.searchData = action.payload.data.collection.items;
        // state.collection.items.links = action.payload.links;
      },
      [fetchMain.pending.type]: (state) => {
        state.isLoading = true;
      },
      [fetchMain.rejected.type]: (state, action: PayloadAction<string>) => {
        state.isLoading = false;
        // state.error = action.payload;
      },
      [fetchPicture.fulfilled.type]: (
        state,
        action: PayloadAction<TPictureState>
      ) => {
        state.isLoading = false;
        state.data.title = action.payload.data.title;
        state.data.explanation = action.payload.data.explanation;
        state.data.url = action.payload.data.url;
        state.data.date = action.payload.data.date;
        // state.collection.items.links = action.payload.links;
      },
      [fetchPicture.pending.type]: (state) => {
        state.isLoading = true;
      },
      [fetchPicture.rejected.type]: (state, action: PayloadAction<string>) => {
        state.isLoading = false;
        // state.error = action.payload;
      },
    },
  });
  
  export default mainSlice.reducer;