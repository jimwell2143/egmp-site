import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  sourceApplicationDropdown: null,
  positionDropdown: null,
  regionDropdown: null,
  provinceDropdown: null,
  munincipalityDropdown: null,
  barangayDropdown: null,
  error: undefined
}

export const dropdownSlice = createSlice({
  name: 'dropdown',
  initialState,
  reducers: {
    setSourceApplicationDropdown: (state, action) => {
      state.sourceApplicationDropdown = action.payload
    },
    setPositionDropdown: (state, action) => {
      state.positionDropdown = action.payload
    },
    setRegionDropdown: (state, action) => {
      state.regionDropdown = action.payload
    },
    setProvinceDropdown: (state, action) => {
      state.provinceDropdown = action.payload
    },
    setMunincipalityDropdown: (state, action) => {
      state.munincipalityDropdown = action.payload
    },
    setBarangayDropdown: (state, action) => {
      state.barangayDropdown = action.payload
    }
    
  }
})

export const { 
  setSourceApplicationDropdown,
  setPositionDropdown,
  setRegionDropdown,
  setProvinceDropdown,
  setMunincipalityDropdown,
  setBarangayDropdown
} = dropdownSlice.actions;

export default dropdownSlice.reducer;