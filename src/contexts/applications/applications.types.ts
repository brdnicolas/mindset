export type Application = {
  id: string
  job: string
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

export type ApplicationStatus = 'applied' | 'relaunched' | 'interviewObtained'
