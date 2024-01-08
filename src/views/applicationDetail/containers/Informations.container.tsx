import { Input } from '@/components'
import { useApplicationDetailsContext } from '@/contexts/applicationDetails/applicationDetails.provider'

export const InformationsContainer = () => {
  const { company, job, jobOfferUrl } = useApplicationDetailsContext()
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
    </div>
  )
}
