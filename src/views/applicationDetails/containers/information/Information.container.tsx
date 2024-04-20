import { Input } from '@/components'
import { Select } from '@/components/atoms/select/Select'
import { UploadInput } from '@/components/molecules/uploadInput/UploadInput'
import { setInformation } from '@/contexts/applicationDetails/applicationDetails.actions'
import { useApplicationDetailsContext } from '@/contexts/applicationDetails/applicationDetails.provider'
import { uploadCoverLetter, uploadCv } from '@/services/upload/upload'
import { useState } from 'react'
import axios from 'axios'
import { updateApplication } from '@/services/applications/application'

export const InformationsContainer = () => {
  const { company, job, jobOfferUrl, cv, coverLetter, city, street, postalCode, dispatch } =
    useApplicationDetailsContext()

  const [location, setLocation] = useState(street + ' ' + city + ' ' + postalCode)
  const [locationLat, setLocationLat] = useState('')
  const [locationLng, setLocationLng] = useState('')
  const [cityValue, setCityValue] = useState(city)
  const [streetValue, setStreetValue] = useState(street)
  const [postalCodeValue, setPostalCodeValue] = useState(postalCode)

  const [showOptions, setShowOptions] = useState(false)

  const [isCvIsUploading, setIsCvIsUploading] = useState(false)
  const [isCoverLetterIsUploading, setIsCoverLetterIsUploading] = useState(false)
  const applicationId = window.location.href.split('/')[4]

  const [contractLabel, setContractLabel] = useState('')
  const contractTypeOptions = [
    { value: 'cdi', label: 'CDI' },
    { value: 'cdd', label: 'CDD' },
    { value: 'alternance', label: 'Alternance' },
    { value: 'stage', label: 'Stage' }
  ]

  const handleAddCv = (files: FileList) => {
    if (files) {
      setIsCvIsUploading(true)
      const formDataCv = new FormData()

      formDataCv.append('cv', files[0])
      uploadCv({ applicationId: Number(applicationId), cv: formDataCv.get('cv') })
        .then((data) => {
          dispatch(setInformation({ cv: { fileName: data.data.fileName, size: data.data.size, url: data.data.url } }))
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
        applicationId: Number(applicationId),
        coverLetter: formDataCoverLetter.get('coverLetter')
      })
        .then((data) => {
          dispatch(
            setInformation({ coverLetter: { fileName: data.data.fileName, size: data.data.size, url: data.data.url } })
          )
        })
        .finally(() => setIsCoverLetterIsUploading(false))
    }
  }

  const handleBlur = () => {
    if (!location) {
      return
    }

    const apiLocationValue = location?.replaceAll(' ', '+')

    axios
      .get(`https://api-adresse.data.gouv.fr/search/?q=${apiLocationValue}`)
      .then((response) => {
        setLocationLng(response.data.features[0].geometry.coordinates[0])
        setLocationLat(response.data.features[0].geometry.coordinates[1])
        setCityValue(response.data.features[0].properties.city)
        setStreetValue(response.data.features[0].properties.name)
        setPostalCodeValue(response.data.features[0].properties.postcode)
      })
      .then(() => {
        updateApplication(Number(applicationId), {
          lng: locationLng,
          lat: locationLat,
          city: cityValue,
          street: streetValue,
          postalCode: postalCodeValue
        }).then((data) => {
          setInformation({
            lat: data.lat,
            lng: data.lng,
            city: cityValue,
            street: streetValue,
            postalCode: postalCodeValue
          })
        })
      })
  }

  /* const handleChangeContract = () => {
    updateApplication(Number(applicationId), { contract: contractLabel }).then((data) => console.log(data))
  } */

  return (
    <div className="w-full">
      <div className="flex justify-between mt-13">
        <div className="w-1/2">
          <p className="text-4 text-gray-50 font-bold mb-6">Général</p>
          <div className="flex items-center gap-10">
            <Input className="w-full" iconName="company" label="Entreprise" value={company} />
            <Input className="w-full" iconName="briefcase" label="Poste" value={job} />
          </div>
          <Input className="w-full mt-6" iconName="link" label="Lien de l'offre" value={jobOfferUrl} />
        </div>
        <div className="w-1/2 ml-30">
          <p className="text-4 text-gray-50 font-bold mb-6">Détails</p>
          <div className="flex gap-10">
            <Input
              onBlur={handleBlur}
              onChange={(e) => {
                setLocation(e.target.value)
              }}
              className="w-full"
              label="Localisation"
              iconName="map-pin"
              placeholder="Localisation"
              value={location}
            />
            <Select
              showProps={{ showOptions, setShowOptions }}
              onClick={(e: any) => {
                setContractLabel(e.target.textContent)
                setShowOptions(!showOptions)
              }}
              value={contractLabel}
              options={contractTypeOptions}
              className="w-full"
              defaultValue="CDI"
              label="Type de contrat"
              iconName="document-remove"
            />
          </div>
        </div>
      </div>
      <div className="mt-13">
        <p className="text-4 text-gray-50 font-bold mb-6">Documents</p>
        <div className="grid grid-cols-8 gap-5">
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
