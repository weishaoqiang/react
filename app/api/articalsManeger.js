import Axios from "@/lib/http"

export function getArtical(params) {
  Axios.get('/getArticals', { params })
}

export function setArtical(params) {
  Axios.post('/addArtical', { params })
}