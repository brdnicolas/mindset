import { FormikErrors, useFormik } from 'formik'
import { ButtonPrimary, Input } from '@/components'
import { register } from '@/services/auth/auth'

type FormValues = {
  email: string
  password: string
  firstName: string
  lastName: string
}

const validate = (values: FormValues) => {
  const errors: FormikErrors<FormValues> = {}

  if (!values.email) {
    errors.email = 'Un email est requis'
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "L'email est invalide"
  }

  if (!values.password) {
    errors.password = 'Un mot de passe est requis'
  }

  if (!values.firstName) {
    errors.firstName = 'Un prénom est requis'
  }

  if (!values.lastName) {
    errors.lastName = 'Un nom est requis'
  }

  return errors
}

export const RegisterForm = () => {
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: ''
    },
    validate,
    validateOnChange: false,
    onSubmit: (credentials) => {
      handleOnRegister(credentials)
    }
  })

  const handleOnRegister = async (credentials: FormValues) => {
    try {
      await register(credentials)
      window.location.href = '/'
    } catch {
      alert('Error')
    }
  }

  return (
    <form onSubmit={formik.handleSubmit}>
      <Input
        type="text"
        placeholder="Votre prénom"
        iconName="user"
        errorMessage={formik.errors.firstName}
        value={formik.values.firstName}
        handleOnChange={formik.handleChange}
        name="firstName"
      />
      <Input
        className="mt-6"
        type="text"
        placeholder="Votre nom"
        iconName="user"
        errorMessage={formik.errors.lastName}
        value={formik.values.lastName}
        handleOnChange={formik.handleChange}
        name="lastName"
      />
      <Input
        className="mt-6"
        type="text"
        placeholder="Votre email"
        iconName="mail"
        errorMessage={formik.errors.email}
        value={formik.values.email}
        handleOnChange={formik.handleChange}
        name="email"
      />
      <Input
        className="mt-6"
        type="password"
        placeholder="Votre mot de passe"
        iconName="lock"
        errorMessage={formik.errors.password}
        value={formik.values.password}
        handleOnChange={formik.handleChange}
        name="password"
      />
      <ButtonPrimary type="submit" className="w-full mt-9">
        S'inscrire
      </ButtonPrimary>
    </form>
  )
}
