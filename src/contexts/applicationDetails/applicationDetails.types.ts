export type ApplicationDetailsState = {
  id: number
  job: string
  company: string
  applicationDate: string
  cv: string | null
  coverLetter: string | null
  companyImageUrl: string
  userId: number
  applicationStateId: number
  applicationState: { name: string }
}
