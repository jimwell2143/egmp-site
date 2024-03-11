import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  profileSelected: null,
  error: undefined,
}

export const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    setProfileSelected: (state, action) => {
      state.profileSelected = action.payload
    }
  }
})

export const { 
  setProfileSelected
} = profileSlice.actions;

export default profileSlice.reducer;