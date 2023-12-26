import { Input } from '@/components/atoms'
import { Icon } from '@/components/atoms/icons/Icon'
import clsx from 'clsx'
import { useState } from 'react'

type NewApplicationModalProps = {
  show: boolean
  onClose: () => void
}

export const NewApplicationModal = ({ show, onClose }: NewApplicationModalProps) => {
  const [offerLink, setOfferLink] = useState('')
  return (
    <div
      className={clsx(
        show ? 'block' : 'hidden',
        'w-full h-full absolute z-10 bg-gray-900/50 flex items-center justify-center'
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
            label="Lien de l'offre"
            iconName="link"
            handleOnChange={(e) => setOfferLink(e.target.value)}
            value={offerLink}
          />
        </div>
      </div>
    </div>
  )
}
