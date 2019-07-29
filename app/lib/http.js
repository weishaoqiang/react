import Axios from 'axios'
import { notification } from 'antd'
import { getToken } from '@/utils/utils'

Axios.defaults.baseURL = `http://localhost:5000/admin/api/`
Axios.defaults.timeout = 30000

const Notification = (type, message) => {
  notification[type]({
    message: `${message}`
  })
}

// Add a request interceptor
Axios.interceptors.request.use(function (config) {
  // Do something before request is sent
  return config
}, function (error) {
  // Do something with request error
  return Promise.reject(error)
})

// Add a response interceptor
Axios.interceptors.response.use(function (response) {
  // Do something with response data
  if (!response.data.success) {
    Notification('error', response.data.message)
    return Promise.reject(response.data)
  }
  return response.data
}, function (error) {
  // Do something with response error
  Notification('error', response.data.message)
  return Promise.reject(error)
})

export default Axios