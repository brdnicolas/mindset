import { api } from '../api'

type Response = {
  id: number
  email: string
  firstName: string
  lastName: string
  applicationsNumber: number
}

export const getMe = async (): Promise<Response> => {
  return api.get('/me').then((response) => response.data)
}
