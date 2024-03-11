import { createSlice } from '@reduxjs/toolkit';

export const loginSlice = createSlice({
  name: 'login',
  initialState: {
    isAuthenticated: false
  },
  reducers: {
    authenticate: (state, action) => {
      state.isAuthenticated = action.payload
    },
    setLoading: (state, action) => {
      state.isLoading = action.payload
    }
  }
})


export const { authenticate } = loginSlice.actions;

export default loginSlice.reducer;