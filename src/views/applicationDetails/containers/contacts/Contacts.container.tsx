import { ButtonSecondary } from '@/components'
import clsx from 'clsx'
import { ContactCard } from './components/contactCard/contactCard'

export const ContactsContainer = () => {
  return (
    <div className={clsx('mt-13')}>
      <div className={clsx('flex items-center justify-between')}>
        <h2 className={clsx('text-4 text-gray-50 font-bold')}>Favoris</h2>
        <ButtonSecondary>Ajouter un contact</ButtonSecondary>
      </div>
      <ContactCard name="Nicolas Brouard" job="Head of RH" mail="brdnicolas.contact@gmail.com" phone="0767939258" />
    </div>
  )
}
