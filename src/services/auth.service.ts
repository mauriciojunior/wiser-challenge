import axios from 'axios'

const BASE_URL = 'https://604fc20bc20143001744db8a.mockapi.io/api/v1'

export const login = (payload: { email: string; password: string }) =>
  axios.post(`${BASE_URL}/login`, payload).then((data) => data.data)
