import { ButtonSecondary } from '@/components'
import clsx from 'clsx'
import { useState } from 'react'
import { General } from './components/General/General'

export const ContactsContainer = () => {
  const [showContactModal, setShowContactModal] = useState(false)
  const contacts = [
    {
      name: 'Nicolas Brouard',
      job: 'Head of RH',
      mail: 'brdnicolas.contact@gmail.com',
      phone: '0767939258',
      favorite: false
    },
    {
      name: 'Nicolas Brouard',
      job: 'Head of RH',
      mail: 'brdnicolas.contact@gmail.com',
      phone: '0767939258',
      favorite: false
    },
    {
      name: 'Quentin Stievenard',
      job: 'Developper',
      mail: 'qstievenard.contact@gmail.com',
      phone: '0610781764',
      favorite: true
    },
    {
      name: 'Quentin Stievenard',
      job: 'Developper',
      mail: 'qstievenard.contact@gmail.com',
      phone: '0610781764',
      favorite: false
    }
  ]

  return (
    <div className={clsx('mt-13')}>
      <div className="flex justify-end">
        <ButtonSecondary
          onClick={() => {
            setShowContactModal(true)
          }}
        >
          Ajouter un contact
        </ButtonSecondary>
      </div>
    </div>
  )
}
