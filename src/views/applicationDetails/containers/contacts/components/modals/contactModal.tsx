import { ButtonPrimary, ButtonSecondary, Input } from '@/components'
import { Modal } from '@/components/organisms/modal/Modal'
import clsx from 'clsx'

interface AddContactProps {
  show: boolean
  onClose: () => void
  action: string
  name: string
  job?: string
  mail: string
  phone?: string
}

export const ContactModal = ({ show, onClose, action, name, job, mail, phone }: AddContactProps) => {
  return (
    <div>
      <Modal title={action === 'modify' ? 'Modifier un contact' : 'Ajouter un contact'} show={show} onClose={onClose}>
        {action === 'modify' ? (
          <div className={clsx('flex items-center justify-between mt-6')}>
            <Input label="Nom*" iconName="user" value={name} />
            <Input label="Poste" iconName="briefcase" value={job} /> :
          </div>
        ) : (
          <div className={clsx('flex items-center justify-between mt-6')}>
            <Input label="Nom*" iconName="user" />
            <Input label="Poste" iconName="briefcase" />
          </div>
        )}
        {action === 'modify' ? (
          <div className={clsx('flex items-center justify-between mt-6')}>
            <Input label="Email*" iconName="mail" value={mail} />
            <Input label="Numéro de téléphone" iconName="briefcase" value={phone} />
          </div>
        ) : (
          <div className={clsx('flex items-center justify-between mt-6')}>
            <Input label="Email*" iconName="mail" />
            <Input label="Numéro de téléphone" iconName="briefcase" />
          </div>
        )}
        <div className={clsx('flex items-center justify-center mt-6')}>
          <ButtonSecondary onClick={onClose}>Annuler</ButtonSecondary>
          <ButtonPrimary className="ml-4">Confirmer</ButtonPrimary>
        </div>
      </Modal>
    </div>
  )
}
