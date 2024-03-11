import { authenticate } from './loginSlice';
import { api } from '../../api';
import Cookie from 'js-cookie';

const isProduction = process.env.NODE_ENV === 'production'

export const login = (payload, callback = () => { }) => async dispatch => {
  try {
    const { data } = await api.post(`/api/ste/authenticate`, payload)
   
    if (data) {
        console.log("login",  data)
        // await Cookie.set('permissions', JSON.stringify(response.permissions.map(x => x.name)))
        await Cookie.set('token', data.data.access_token)
        await dispatch(authenticate(true))
        callback();
          
    }
  } catch (e) {
    console.log(e)
  }
} 

export const forgotPassword = (payload, callback = () => { }) => async dispatch => {
  try {
    const { data } = await api.post(`/api/forgot-password`, payload)
   
    await callback(data);
  } catch (e) {
    console.log(e)
  }
} 

export const resetPassword = (payload, callback = () => { }) => async dispatch => {
  try {
    const { data } = await api.post(`/api/reset-password`, payload)
   
    await callback(data);
  } catch (e) {
    console.log(e)
  }
} 

export const logout = () => dispatch => {
  Cookie.remove('token')
  dispatch(authenticate(false))
}


export const sendMessage = (payload, callback = () => { }) => async dispatch => {
  try {
    const { data } = await api.post(`/api/pub/send_message`, payload)
   
    callback();
  } catch (e) {
    console.log(e)
  }
} 