import { useEffect, useState } from 'react'
import { Contact } from '../General/General'
import { Modal } from '@/components/organisms/modal/Modal'
import { FormikErrors, useFormik } from 'formik'
import { ButtonPrimary, ButtonSecondary, Input } from '@/components'

interface ContactModalProps {
  isOpen: boolean
  onClose: () => void
  contact: Contact
}

const validate = (values: Contact) => {
  const errors: FormikErrors<Contact> = {}

  if (!values.name) {
    errors.name = 'Un nom est requis'
  }

  if (!values.mail) {
    errors.mail = 'Un email est requis'
  }

  return errors
}

export const ContactModal = ({ isOpen, onClose, contact }: ContactModalProps) => {
  const [name, setName] = useState('')
  const [job, setJob] = useState('')
  const [mail, setMail] = useState('')
  const [phone, setPhone] = useState('')

  const formik = useFormik({
    initialValues: {
      name,
      job,
      mail,
      phone
    },
    validate,
    validateOnChange: false,
    onSubmit: (values, { resetForm }) => {
      console.log(values)
      resetForm()
    }
  })

  useEffect(() => {
    if (contact) {
      setName(contact.name)
      setJob(contact.job)
      setMail(contact.mail)
      setPhone(contact.phone)
    } else {
      setName('')
      setJob('')
      setMail('')
      setPhone('')
    }
  }, [])

  return (
    <Modal title={contact ? 'Modifier un contact' : 'Ajouter un contact'} show={isOpen} onClose={onClose}>
      <form>
        <div>
          <Input
            iconName="user"
            value={name}
            label="Nom*"
            onChange={(e) => {
              setName(e.target.value)
            }}
          />
          <Input
            iconName="briefcase"
            value={job}
            label="Poste"
            onChange={(e) => {
              setJob(e.target.value)
            }}
          />
        </div>
        <div>
          <Input
            iconName="mail"
            value={mail}
            label="Email*"
            onChange={(e) => {
              setMail(e.target.value)
            }}
          />
          <Input
            iconName="device-mobile"
            value={phone}
            label="Numéro de téléphone"
            onChange={(e) => {
              setPhone(e.target.value)
            }}
          />
        </div>
        <footer className="flex items-center justify-center mt-6 gap-4">
          <ButtonSecondary className=" w-full laptop:w-fit" onClick={onClose}>
            Annuler
          </ButtonSecondary>
          <ButtonPrimary className=" w-full laptop:w-fit" type="submit">
            Confirmer
          </ButtonPrimary>
        </footer>
      </form>
    </Modal>
  )
}
