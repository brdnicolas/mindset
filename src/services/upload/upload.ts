import { api } from '../api'

type UploadCvPropsTypes = {
  applicationId: number
  cv: FormDataEntryValue | null
}

export const uploadCv = async ({ applicationId, cv }: UploadCvPropsTypes) => {
  return api.patch('/upload/cv', { applicationId, cv })
}

type UploadCoverLetterPropsTypes = {
  applicationId: number
  coverLetter: FormDataEntryValue | null
}
export const uploadCoverLetter = async ({ applicationId, coverLetter }: UploadCoverLetterPropsTypes) => {
  return api.patch('/upload/coverLetter', { coverLetter, applicationId })
}
