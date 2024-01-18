import { Input } from '@/components'
import { UploadInput } from '@/components/molecules/upload/Upload'
import { setInformation } from '@/contexts/applicationDetails/applicationDetails.actions'
import { useApplicationDetailsContext } from '@/contexts/applicationDetails/applicationDetails.provider'
import { uploadCoverLetter, uploadCv } from '@/services/upload/upload'

export const InformationsContainer = () => {
  const { company, job, jobOfferUrl, cv, coverLetter, dispatch } = useApplicationDetailsContext()

  const applicationId = window.location.href.split('/')[4]

  const handleAddCv = (files: FileList) => {
    if (files) {
      const formDataCv = new FormData()

      formDataCv.append('cv', files[0])
      uploadCv({ applicationId: Number(applicationId), cv: formDataCv.get('cv') }).then((data) => {
        dispatch(setInformation({ cv: { fileName: data.data.fileName, size: data.data.size, url: data.data.url } }))
      })
    }
  }

  const handleAddCoverLetter = (files: FileList) => {
    if (files) {
      const formDataCoverLetter = new FormData()

      formDataCoverLetter.append('coverLetter', files[0])
      uploadCoverLetter({
        applicationId: Number(applicationId),
        coverLetter: formDataCoverLetter.get('coverLetter')
      }).then((data) => {
        dispatch(
          setInformation({ coverLetter: { fileName: data.data.fileName, size: data.data.size, url: data.data.url } })
        )
      })
    }
  }

  return (
    <div className="w-full">
      <div className="flex justify-between mt-13">
        <div className="w-1/2">
          <p className="text-4 text-gray-50 font-bold mb-6">Général</p>
          <div className="flex items-center">
            <Input className="w-full" iconName="company" label="Entreprise" value={company} />
            <Input className="ml-10 w-full" iconName="briefcase" label="Poste" value={job} />
          </div>
          <Input className="w-full mt-6" iconName="link" label="Lien de l'offre" value={jobOfferUrl} />
        </div>
        <div className="w-1/2 ml-30">
          <p className="text-4 text-gray-50 font-bold mb-6">Détails</p>
          <div className="flex items-center">
            <Input className="w-full" label="Localisation" iconName="map-pin" placeholder="Localisation" />
            <Input className="w-full ml-10" label="Type de contrat" iconName="document-remove" placeholder="CDI" />
          </div>
        </div>
      </div>
      <div className="mt-13">
        <p className="text-4 text-gray-50 font-bold mb-6">Documents</p>
        <div className="grid grid-cols-8 gap-5">
          <UploadInput accept=".pdf" doc={cv} handleChange={handleAddCv} label="CV" subtitle="PDF • max 5 Mo" />
          <UploadInput
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
