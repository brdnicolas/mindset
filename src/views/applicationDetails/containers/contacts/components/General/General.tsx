import clsx from 'clsx'
import { ContactCard } from '../contactCard/contactCard'

interface Contact {
  favorite: boolean
  name: string
  job: string
  mail: string
  phone: string
}

interface GeneralProps {
  contacts: Contact[]
}

export const General = ({ contacts }: GeneralProps) => {
  const sortedContacts = contacts.sort((a, b) => a.name.localeCompare(b.name))
  const groupedContacts = sortedContacts.reduce(
    (acc: { [key: string]: Contact[] }, contact) => {
      const firstLetter = contact.name[0].toUpperCase()
      if (!acc[firstLetter]) {
        acc[firstLetter] = []
      }
      acc[firstLetter].push(contact)
      return acc
    },
    {} as { [key: string]: Contact[] }
  )

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
    <div>
      {displayFavoriteContacts()}
      {Object.keys(groupedContacts)
        .sort()
        .map((letter) => (
          <div className="mt-13 mb-10" key={letter}>
            <h2 className="text-gray-50 font-bold text-4">{letter}</h2>
            <ul>
              {groupedContacts[letter].map((contact) => (
                <ContactCard name={contact.name} job={contact.job} mail={contact.mail} phone={contact.job} />
              ))}
            </ul>
          </div>
        ))}
    </div>
  )
}
