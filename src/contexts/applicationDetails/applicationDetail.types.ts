import { ApplicationStates } from '../applications/applications.types'

export type ApplicationDetailsState = {
  id: number
  job: string
  company: string
  applicationDate: string
  cv: string
  coverLetter: string
  companyImageUrl: string
  userId: number
  applicationStateId: number
  applicationState: ApplicationStates
}
