import { ButtonPrimary, ButtonSecondary, Input } from '@/components'
import { DatePickerInput } from '@/components/organisms/datePickerInput/DatePickerInput'
import { Modal } from '@/components/organisms/modal/Modal'
import { FormikErrors, useFormik } from 'formik'
import { createEvent } from '@/services/events/events'
import { useApplicationDetailsContext } from '@/contexts/applicationDetails/applicationDetails.provider'
import { useEventsContext } from '@/contexts/events/events.provider'
import { addEvent } from '@/contexts/events/events.actions'
import { alert } from '@/components/molecules/toast/toast.helper'

type AddEventModalProps = {
  show: boolean
  onClose: () => void
}

type FormValues = {
  title: string
  eventDateStart: Date
  eventDateEnd: Date
}

const validate = (values: FormValues) => {
  const errors: FormikErrors<FormValues> = {}

  if (!values.title) {
    errors.title = 'Un titre est requis'
  }

  if (!values.eventDateStart) {
    errors.eventDateStart = 'Une date de début est requise'
  }

  return errors
}

export const AddEventModal = ({ show, onClose }: AddEventModalProps) => {
  const { id } = useApplicationDetailsContext()
  const { dispatch } = useEventsContext()

  const formik = useFormik({
    initialValues: {
      eventDateStart: new Date(),
      eventDateEnd: new Date(),
      title: ''
    },
    validate,
    validateOnChange: false,
    onSubmit: (values, { resetForm }) => {
      handleOnAdd()
      resetForm()
    }
  })

  const handleOnChangeDateStart = (date: Date) => {
    formik.setFieldValue('eventDateStart', date)
  }

  const handleOnChangeDateEnd = (date: Date) => {
    formik.setFieldValue('eventDateEnd', date)
  }

  const handleChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    formik.setFieldValue('title', e.target.value)
  }

  const handleOnAdd = () => {
    createEvent(id, formik.values.title, formik.values.eventDateStart.toString(), formik.values.eventDateEnd.toString())
      .then((newEvent) => {
        dispatch(addEvent({ event: newEvent }))
        onClose()
        alert({ type: 'success', message: 'Evènement créé !' })
      })
      .catch(() => {
        alert({ type: 'error', message: 'Une erreur est survenue' })
      })
  }

  return (
    <Modal title="Ajouter un événement" show={show} onClose={onClose}>
      <form onSubmit={formik.handleSubmit}>
        <Input className="mt-6" label="Titre de l'événement" value={formik.values.title} onChange={handleChangeTitle} />
        <div className="mt-3">
          <DatePickerInput
            value={formik.values.eventDateStart}
            onChange={handleOnChangeDateStart}
            label="Date de début"
          />
          <DatePickerInput
            className="mt-3"
            value={formik.values.eventDateEnd}
            onChange={handleOnChangeDateEnd}
            label="Date de Fin*"
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
