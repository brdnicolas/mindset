import { ButtonSecondary } from '@/components'
import clsx from 'clsx'
import { ContactCard } from './components/contactCard/contactCard'
import { useState } from 'react'
import { ContactModal } from './components/modals/contactModal'

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
      favorite: true
    }
  ]

  const displayFavoriteContacts = () => {
    const favoriteContacts = contacts.filter((contact) => contact.favorite === true)

    if (favoriteContacts.length === 0) {
      return
    }

    return (
      <div className="flex flex-col">
        <h2 className={clsx('text-4 text-gray-50 font-bold')}>Favoris</h2>
        {favoriteContacts.map((contact) => {
          return <ContactCard name={contact.name} job={contact.job} mail={contact.mail} phone={contact.job} />
        })}
      </div>
    )
  }

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
      {displayFavoriteContacts()}
    </div>
  )
}
