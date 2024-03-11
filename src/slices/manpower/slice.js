import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  manpowerList: null,
  applicationLog: null,
  error: undefined
}

export const manpowerSlice = createSlice({
  name: 'manpower',
  initialState,
  reducers: {
    setManpowerList: (state, action) => {
      state.manpowerList = action.payload
    },
    setApplicationLog: (state, action) => {
      state.applicationLog = action.payload
    }
  }
})

export const { 
  setManpowerList,
  setApplicationLog
} = manpowerSlice.actions;

export default manpowerSlice.reducer;