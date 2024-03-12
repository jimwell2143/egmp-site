import { setApplicationLog, setManpowerList, setSourceApplicationDropdown } from './slice';
import { api } from '../../api';
import { toast } from 'react-toastify';

export const getManpowerList = (params, callback = () => { }) => async (dispatch) => {
  try {
    const { data } = await api.get(`api/ste/manpower_request`, {
      params,
    })

    await dispatch(setManpowerList(data.data))

    if (data) await callback()

  } catch (e) {
    console.log(e)
  }
}

export const createManpower = (payload, callback = () => { }) => async (dispatch) => {
  try {
    const { data } = await api.post(`api/ste/application`, payload)

    await callback()

  } catch (e) {
    console.log(e)
  }
}


export const updateApplication = (id, payload, callback = (data) => { }) => async (dispatch) => {
  try {
    const { data } = await api.put(`api/ste/application/${id}`, payload)

    await callback(data)

  } catch (e) {
    console.log(e)
  }
}


export const getApplicationLogs = (params, callback = () => { }) => async (dispatch) => {
  try {
    const { data } = await api.get(`api/ste/application_logs`, {
      params,
    })

    await dispatch(setApplicationLog(data.data))

    if (data) await callback()

  } catch (e) {
    console.log(e)
  }
}

