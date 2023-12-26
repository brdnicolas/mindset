import { Application, EAApplicationStateId, EApplicationState } from '@/contexts/applications/applications.types'
import { api } from '../api'

export const getAllUserApplications = async (): Promise<Application[]> => {
  return api.get('/applications').then((response) => response.data)
}

export const updateApplicationStateById = async (
  applicationId: number,
  applicationState: EApplicationState
): Promise<Application> => {
  return api
    .patch(`/applications/${applicationId}`, {
      applicationStateId: EAApplicationStateId[applicationState]
    })
    .then((response) => response.data)
}
