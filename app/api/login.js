import Axios from '@/lib/http'

export function register(params) {
  return Axios.post('/register', params)
}

export function login(params) {
  return Axios.post('/login', params)
}