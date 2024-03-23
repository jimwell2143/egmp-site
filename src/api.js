import axios from "axios"
import { get } from "lodash"
import { toast } from 'react-toastify';
import Cookie from 'js-cookie';

export const api = axios.create({
  baseURL: "http://13.213.71.132:8080"
})
// "http://ec2-18-143-159-93.ap-southeast-1.compute.amazonaws.com"
// http://13.213.71.132/
api.interceptors.request.use(
    config => {
      const token = Cookie.get('token');
      
      if (token) {
        config.headers.authorization = `Bearer ${token}`;
      }

      return config;
    },
    error => {
      return Promise.reject(error);
    }
  );

api.interceptors.response.use((response) => {

    if (response.status == 204) {
      toast.success("Success", { position: 'top-right' })
    }
    
    if (response.data.errors) {
        toast.error(response.data.message, { position: 'top-right' })

        return response
    } else if (response.data) {
        // toast.success("Success", { position: 'top-right' })

        return response
    } else {
        return response
    }
},
(error) => {
    if (error.response.data.errors) {
        toast.error(error.response.data.message, { position: 'top-right' })
    }

    else if (error.response.data.error) {
        toast.error(error.response.data.message, { position: 'top-right' })
    } else {
      
    }

   return Promise.reject(error);
})