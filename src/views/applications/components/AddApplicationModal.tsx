import { ButtonPrimary, ButtonSecondary, Input } from '@/components'
import { Modal } from '@/components/organisms/modal/Modal'
import dayjs from 'dayjs'
import { createApplication, scrapApplication } from '@/services/applications/application'
import { addApplication } from '@/contexts/applications/applications.actions'
import { FormikErrors, useFormik } from 'formik'
import { useApplicationsContext } from '@/contexts/applications/applications.provider'
import { useRef, useState } from 'react'
import { DatePickerInput } from '@/components/organisms/datePickerInput/DatePickerInput'

type FormValues = {
  jobOfferUrl?: string
  job: string
  company: string
  applicationDate: string
}

const validate = (values: FormValues) => {
  const errors: FormikErrors<FormValues> = {}

  if (!values.job) {
    errors.job = 'Un poste est requis'
  }

  if (!values.company) {
    errors.company = 'Une entreprise est requise'
  }

  if (!values.applicationDate) {
    errors.applicationDate = 'Une date est requise'
  }

  return errors
}

type AddApplicationModalProps = {
  show: boolean
  onClose: () => void
}

export const AddApplicationModal = ({ show, onClose }: AddApplicationModalProps) => {
  const [showDatePicker, setShowDatePicker] = useState(false)
  const [applicationDate, setApplicationDate] = useState(dayjs().format('DD MMM YYYY'))
  const timerRef = useRef<NodeJS.Timeout>()
  const { dispatch } = useApplicationsContext()
  const formik = useFormik({
    initialValues: {
      jobOfferUrl: '',
      job: '',
      company: '',
      applicationDate: '',
      companyImageUrl: ''
    },
    validate,
    validateOnChange: false,
    onSubmit: (values) => {
      handleOnAdd(values)
    }
  })

  const handleOnChangeDate = (e: string) => {
    setShowDatePicker(!showDatePicker)
    setApplicationDate(e)
  }

  const handleOnAdd = (application: FormValues) => {
    if (!application.jobOfferUrl) {
      delete application.jobOfferUrl
    }

    console.log(application, 'app')

    const formatedDate = dayjs(application.applicationDate).format('YYYY-MM-DD')
    createApplication({ ...application, applicationDate: formatedDate })
    dispatch(addApplication({ application: { ...application, applicationDate: formatedDate } }))
    onClose()
  }

  const handleOnJobUrlChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    formik.setFieldValue('jobOfferUrl', e.target.value)

    if (timerRef.current) {
      clearTimeout(timerRef.current)
    }

    timerRef.current = setTimeout(() => {
      if (!e.target.value) {
        return
      }
      scrapApplication(e.target.value).then((data) => {
        if (data.company) {
          formik.setFieldValue('company', data.company)
        }
        if (data.job) {
          formik.setFieldValue('job', data.job)
        }
        if (data.companyImageUrl) {
          formik.setFieldValue('companyImageUrl', data.companyImageUrl)
        }
      })
    }, 1500)
  }

  return (
    <Modal title="Ajouter une candidature" show={show} onClose={onClose}>
      <form onSubmit={formik.handleSubmit}>
        <div className="mt-6">
          <Input
            type="string"
            label="Lien de l'offre"
            iconName="link"
            errorMessage={formik.errors.jobOfferUrl}
            value={formik.values.jobOfferUrl}
            handleOnChange={handleOnJobUrlChange}
            name="jobOfferUrl"
          />
          <hr className="h-[1px] border-gray-600 w-full mt-8" />
          <div className="flex items-center justify-between mt-8">
            <Input
              className="w-full"
              type="string"
              iconName="briefcase"
              label="Poste"
              errorMessage={formik.errors.job}
              value={formik.values.job}
              handleOnChange={formik.handleChange}
              name="job"
            />
            <Input
              className="w-full ml-4"
              type="string"
              iconName="briefcase"
              label="Entreprise"
              errorMessage={formik.errors.company}
              value={formik.values.company}
              handleOnChange={formik.handleChange}
              name="company"
            />
          </div>
          <DatePickerInput
            onClick={() => setShowDatePicker(!showDatePicker)}
            value={applicationDate}
            show={showDatePicker}
            onChange={handleOnChangeDate}
            className="mt-3"
            label="Date de candidature"
          />
        </div>
        <footer className="flex items-center justify-center mt-6">
          <ButtonSecondary onClick={onClose}>Annuler</ButtonSecondary>
          <ButtonPrimary type="submit" className="ml-4">
            Confirmer
          </ButtonPrimary>
        </footer>
      </form>
    </Modal>
  )
}
