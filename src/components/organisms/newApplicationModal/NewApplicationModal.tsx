import { ButtonPrimary, ButtonSecondary, Input } from '@/components/atoms'
import { DatePickerInput } from '@/components/atoms/datePickerInput/DatePickerInput'
import { Icon } from '@/components/atoms/icons/Icon'
import clsx from 'clsx'
import { useState } from 'react'

type NewApplicationModalProps = {
  show: boolean
  onClose: () => void
}

export const NewApplicationModal = ({ show, onClose }: NewApplicationModalProps) => {
  const [offerLink, setOfferLink] = useState('')
  const [job, setJob] = useState('')
  const [company, setCompany] = useState('')
  return (
    <div
      className={clsx(
        show ? 'fixed' : 'hidden',
        'top-0 left-0 w-full h-full absolute z-10 bg-gray-900/50 flex items-center justify-center'
      )}
    >
      <div className="w-[666px] p-6 bg-gray-700 rounded-6">
        <header className="flex justify-between">
          <div className="w-4"></div>
          <p className="text-gray-100 text-3.5 font-medium">Ajouter une candidature</p>
          <div onClick={onClose} className="w-6 h-6">
            <Icon name="close" className="text-gray-100 cursor-pointer" />
          </div>
        </header>
        <div className="mt-6">
          <Input
            type="string"
            name="offerLink"
            label="Lien de l'offre"
            iconName="link"
            handleOnChange={(e) => setOfferLink(e.target.value)}
            value={offerLink}
          />
          <hr className="h-[1px] border-gray-600 w-full mt-8" />
          <div className="flex items-center justify-between mt-8">
            <Input
              className="w-full"
              type="string"
              iconName="briefcase"
              name="job"
              label="Poste"
              value={job}
              handleOnChange={(e) => setJob(e.target.value)}
            />
            <Input
              className="w-full ml-4"
              type="string"
              iconName="briefcase"
              name="company"
              label="Entreprise"
              value={company}
              handleOnChange={(e) => setCompany(e.target.value)}
            />
          </div>
          <DatePickerInput className="mt-3" label="Date de candidature" />
        </div>
        <footer className="flex items-center justify-center mt-6">
          <ButtonSecondary onClick={onClose}>Annuler</ButtonSecondary>
          <ButtonPrimary className="ml-4" onClick={onClose}>
            Confirmer
          </ButtonPrimary>
        </footer>
      </div>
    </div>
  )
}
