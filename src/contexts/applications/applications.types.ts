export enum EApplicationState {
  applied = 'applied',
  relaunched = 'relaunched',
  interviewObtained = 'interviewObtained',
  archived = 'archived'
}

export enum EAApplicationStateId {
  applied = 1,
  relaunched = 2,
  interviewObtained = 3,
  archived = 4
}

export type Application = {
  id: number
  job: string
  jobOfferUrl: string
  applicationDate: string
  cv: string
  coverLetter: string
  userId: string
  applicationState: { name: EApplicationState }
  imageUrl: string
  company: string
  date: string
}

export type ApplicationsState = {
  applied: Application[]
  relaunched: Application[]
  interviewObtained: Application[]
  archived: Application[]
}

export type ApplicationStates =
  | EApplicationState.applied
  | EApplicationState.relaunched
  | EApplicationState.interviewObtained
  | EApplicationState.archived
