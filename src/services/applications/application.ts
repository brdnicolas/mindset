import { Application } from '@/contexts/applications/applications.types'
import { api } from '../api'

type GetAllUserApplications = {
  token: string
}

export const getAllUserApplications = async ({ token }: GetAllUserApplications): Promise<Application[]> => {
  return api.get('/applications', { headers: { Authorization: 'Bearer ' + token } }).then((response) => response.data)
}
