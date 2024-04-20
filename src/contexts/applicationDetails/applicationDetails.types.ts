export type DocumentProps = {
  fileName: string
  size: number
  url: string
}

export type ApplicationDetailsState = {
  id: number
  job: string
  company: string
  applicationDate: string
  cv: DocumentProps
  coverLetter: DocumentProps
  companyImageUrl: string
  userId: number
  applicationState: { name: string }
  createdAt: string
  jobOfferUrl: string
  city: string
  lng: string
  lat: string
  country: string
  postalCode: string
  street: string
}
