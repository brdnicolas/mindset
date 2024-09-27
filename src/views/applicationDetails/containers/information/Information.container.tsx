import { Input } from '@/components'
import { Select } from '@/components/atoms/select/Select'
import { UploadInput } from '@/components/molecules/uploadInput/UploadInput'
import { setInformation } from '@/contexts/applicationDetails/applicationDetails.actions'
import { useApplicationDetailsContext } from '@/contexts/applicationDetails/applicationDetails.provider'
import { uploadCoverLetter, uploadCv } from '@/services/upload/upload'
import { useState } from 'react'
import { General } from './components/General/General'
import { Details } from './components/Details/Details'
import clsx from 'clsx'

export const InformationContainer = () => {
  const { id, cv, coverLetter, dispatch: dispatchApplicationDetails } = useApplicationDetailsContext()

  const [isCvIsUploading, setIsCvIsUploading] = useState(false)
  const [isCoverLetterIsUploading, setIsCoverLetterIsUploading] = useState(false)

  const handleAddCv = (files: FileList) => {
    if (files) {
      setIsCvIsUploading(true)
      const formDataCv = new FormData()

      formDataCv.append('cv', files[0])
      uploadCv({ applicationId: id, cv: formDataCv.get('cv') })
        .then((data) => {
          dispatchApplicationDetails(
            setInformation({ cv: { fileName: data.data.fileName, size: data.data.size, url: data.data.url } })
          )
        })
        .finally(() => setIsCvIsUploading(false))
    }
  }

  const handleAddCoverLetter = (files: FileList) => {
    if (files) {
      setIsCoverLetterIsUploading(true)
      const formDataCoverLetter = new FormData()

      formDataCoverLetter.append('coverLetter', files[0])
      uploadCoverLetter({
        applicationId: id,
        coverLetter: formDataCoverLetter.get('coverLetter')
      })
        .then((data) => {
          dispatchApplicationDetails(
            setInformation({ coverLetter: { fileName: data.data.fileName, size: data.data.size, url: data.data.url } })
          )
        })
        .finally(() => setIsCoverLetterIsUploading(false))
    }
  }

  return (
    <div className={clsx('laptop:w-full')}>
      <div className="flex flex-col laptop:flex-row laptop:justify-between laptop:mt-13 ">
        <General />
        <Details />
      </div>
      <div className="mt-13">
        <p className="text-4 text-gray-50 font-bold mb-6">Documents</p>
        <div className={clsx('grid grid-cols-2 gap-5', 'laptop:grid-cols-8')}>
          <UploadInput
            isLoading={isCvIsUploading}
            accept=".pdf"
            doc={cv}
            handleChange={handleAddCv}
            label="CV"
            subtitle="PDF • max 5 Mo"
          />
          <UploadInput
            isLoading={isCoverLetterIsUploading}
            accept=".pdf"
            doc={coverLetter}
            handleChange={handleAddCoverLetter}
            label="Lettre de motivation"
            subtitle="PDF • max 5 Mo"
          />
        </div>
      </div>
    </div>
  )
}
