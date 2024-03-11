import { setProfileSelected } from './slice';
import { api } from '../../api';
import { toast } from 'react-toastify';

export const getProfile = (params, callback = () => { }) => async (dispatch) => {
  try {
    const { data } = await api.get(`api/ste/profile`, {
      params,
    })

    await dispatch(setProfileSelected(data.data))

    if (data) await callback()

  } catch (e) {
    console.log(e)
  }
}

export const updateProfile = (payload, callback = () => { }) => async (dispatch) => {
  try {
    const { data } = await api.put(`api/ste/profile`, payload)

    await callback()

  } catch (e) {
    console.log(e)
  }
}

export const updatePassword = (payload, callback = () => { }) => async (dispatch) => {
  try {
    const { data } = await api.post(`api/ste/profile/change_password`, payload)

    await callback()

  } catch (e) {
    console.log(e)
  }
}

export const register = (payload, callback = () => { }) => async (dispatch) => {
  try {
    const { data } = await api.post(`api/ste/register`, payload)

    await callback(data)

  } catch (e) {
    console.log(e)
  }
}