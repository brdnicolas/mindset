export type Application = {
  id: string
  job: string
  jobOfferUrl: string
  applicationDate: string
  cv: string
  coverLetter: string
  userId: string
  applicationState: { name: string }
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

export type ApplicationStates = 'applied' | 'relaunched' | 'interviewObtained' | 'archived'
