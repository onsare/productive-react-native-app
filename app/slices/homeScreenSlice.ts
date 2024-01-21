import {createSlice} from '@reduxjs/toolkit';

const homeScreenSlice = createSlice({
  name: 'homescreen',
  initialState: {
    data: null, // Store homepage data here
  },
  reducers: {
    setHomeScreenData: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const {setHomeScreenData} = homeScreenSlice.actions;
export const selectHomeScreenData = (state: {homepage: {data: any}}) =>
  state.homepage.data;

export default homeScreenSlice.reducer;
