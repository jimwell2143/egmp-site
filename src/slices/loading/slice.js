import { createSlice } from '@reduxjs/toolkit';

export const loadingSlice = createSlice({
  name: 'loading',
  initialState: [],
  reducers: {
    add: (state, action) => {
      state.push(action.payload)
    },
    remove: (state, action) => {
      state.splice(state.findIndex(x => x === action.payload), 1);
    }
  }
})

export const { 
  add,
  remove
} = loadingSlice.actions;

export default loadingSlice.reducer;