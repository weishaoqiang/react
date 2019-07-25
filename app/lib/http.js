import Axios from 'axios'

Axios.defaults.baseURL = `http://localhost:5000/admin/api/`
Axios.defaults.timeout = 30000

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
  if (!response.success) {
    return Promise,reject(response)
  }
  return response.data
}, function (error) {
  // Do something with response error
  return Promise.reject(error)
})

export default Axios