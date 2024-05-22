import { ButtonSecondary } from '@/components'
import clsx from 'clsx'
import { ContactCard } from './components/contactCard/contactCard'
import { useState } from 'react'
import { ContactModal } from './components/modals/contactModal'

export const ContactsContainer = () => {
  const [showContactModal, setShowContactModal] = useState(false)
  const contactInfo = {
    name: 'Nicolas Brouard',
    job: 'Head of RH',
    mail: 'brdnicolas.contact@gmail.com',
    phone: '0767939258'
  }

  return (
    <div className={clsx('mt-13')}>
      <div className={clsx('flex items-center justify-between')}>
        <h2 className={clsx('text-4 text-gray-50 font-bold')}>Favoris</h2>
        <ButtonSecondary
          onClick={() => {
            setShowContactModal(true)
          }}
        >
          Ajouter un contact
        </ButtonSecondary>
      </div>
      <ContactCard name={contactInfo.name} job={contactInfo.job} mail={contactInfo.mail} phone={contactInfo.job} />
      {showContactModal && (
        <ContactModal
          action="add"
          name={contactInfo.name}
          mail={contactInfo.mail}
          show={showContactModal}
          onClose={() => {
            setShowContactModal(false)
          }}
        />
      )}
    </div>
  )
}
