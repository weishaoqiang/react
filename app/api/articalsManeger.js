import Axios from "@/lib/http"

export function getArtical(params) {
  return Axios.get('/getArticals', { params })
}

export function addArtical(params) {
  return Axios.post('/addArtical', { params })
}