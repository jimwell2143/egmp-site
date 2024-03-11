import { setSourceApplicationDropdown, setPositionDropdown, setRegionDropdown, setProvinceDropdown, setBarangayDropdown, setMunincipalityDropdown } from './slice';
import { api } from '../../api';
import { toast } from 'react-toastify';

export const getSourceApplication = (params, callback = () => { }) => async (dispatch) => {
  try {
    const { data } = await api.get(`api/pub/application_sources`)

    await dispatch(setSourceApplicationDropdown(data.data))

    if (data) await callback()

  } catch (e) {
    console.log(e)
  }
}

export const getPosition = (params, callback = () => { }) => async (dispatch) => {
  try {
    const { data } = await api.get(`api/pub/positions`)

    await dispatch(setPositionDropdown(data.data))

    if (data) await callback()

  } catch (e) {
    console.log(e)
  }
}

export const getRegion = (params, callback = () => { }) => async (dispatch) => {
  try {
    const { data } = await api.get(`api/pub/locations/regions`)

    await dispatch(setRegionDropdown(data.data))

    if (data) await callback()

  } catch (e) {
    console.log(e)
  }
}

export const getProvince = (params, callback = () => { }) => async (dispatch) => {
  try {
    const { data } = await api.get(`api/pub/locations/provinces`, { params })

    await dispatch(setProvinceDropdown(data.data))

    if (data) await callback()

  } catch (e) {
    console.log(e)
  }
}

export const getMunincipality = (params, callback = () => { }) => async (dispatch) => {
  try {
    const { data } = await api.get(`api/pub/locations/municipalities`, { params })

    await dispatch(setMunincipalityDropdown(data.data))

    if (data) await callback()

  } catch (e) {
    console.log(e)
  }
}

export const getBarangay = (params, callback = () => { }) => async (dispatch) => {
  try {
    const { data } = await api.get(`api/pub/locations/barangays`, { params })

    await dispatch(setBarangayDropdown(data.data))

    if (data) await callback()

  } catch (e) {
    console.log(e)
  }
}