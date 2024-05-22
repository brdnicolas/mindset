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
  applicationId: number
  name: string
  start: Date
  end: Date
}

const validate = (values: FormValues) => {
  const errors: FormikErrors<FormValues> = {}

  if (!values.name) {
    errors.name = 'Un titre est requis'
  }

  if (!values.start) {
    errors.start = 'Une date de début est requise'
  }

  return errors
}

export const AddEventModal = ({ show, onClose }: AddEventModalProps) => {
  const { id } = useApplicationDetailsContext()
  const { dispatch } = useEventsContext()

  const formik = useFormik({
    initialValues: {
      applicationId: id,
      start: new Date(),
      end: new Date(),
      name: ''
    },
    validate,
    validateOnChange: false,
    onSubmit: (values, { resetForm }) => {
      handleOnAdd(values)
      resetForm()
    }
  })

  const handleOnChangeDateStart = (date: Date) => {
    formik.setFieldValue('start', date)
  }

  const handleOnChangeDateEnd = (date: Date) => {
    formik.setFieldValue('end', date)
  }

  const handleChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    formik.setFieldValue('name', e.target.value)
  }

  const handleOnAdd = (event: FormValues) => {
    createEvent({ ...event })
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
        <Input className="mt-6" label="Titre de l'événement" value={formik.values.name} onChange={handleChangeTitle} />
        <div className="mt-3">
          <DatePickerInput value={formik.values.start} onChange={handleOnChangeDateStart} label="Date de début" />
          <DatePickerInput
            className="mt-3"
            value={formik.values.end}
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
