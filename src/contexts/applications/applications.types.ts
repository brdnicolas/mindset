export enum EApplicationState {
  applied = 'applied',
  relaunched = 'relaunched',
  interviewObtained = 'interviewObtained',
  archived = 'archived'
}

export enum EApplicationStateId {
  applied = 1,
  relaunched = 2,
  interviewObtained = 3,
  archived = 4
}

export type MinimalApplication = {
  id: number
  job: string
  jobOfferUrl?: string
  applicationDate: string
  company: string
  companyImageUrl?: string
  coverLetter?: string
}

export type Application = {
  id: number
  job: string
  jobOfferUrl: string
  applicationDate: string
  cv: string
  coverLetter: string
  userId: number
  applicationState: { name: EApplicationState }
  companyImageUrl: string
  company: string
  date: string
}

export type ApplicationsState = {
  applied: MinimalApplication[]
  relaunched: MinimalApplication[]
  interviewObtained: MinimalApplication[]
  archived: MinimalApplication[]
}

export type ApplicationStates =
  | EApplicationState.applied
  | EApplicationState.relaunched
  | EApplicationState.interviewObtained
  | EApplicationState.archived
