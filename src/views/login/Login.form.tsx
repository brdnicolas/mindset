import { FormikErrors, useFormik } from 'formik'
import { ButtonPrimary, Input } from '@/components'
import { login } from '@/services/auth/auth'

type FormValues = {
  email: string
  password: string
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

  return errors
}

export const LoginForm = () => {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    validate,
    validateOnChange: false,
    onSubmit: (credentials) => {
      handleOnLogin(credentials)
    }
  })

  const handleOnLogin = async (credentials: FormValues) => {
    try {
      const data = await login(credentials)
      const token = data.token

      localStorage.setItem('token', token)
      window.location.href = '/'
    } catch {
      alert('Error')
    }
  }

  return (
    <form onSubmit={formik.handleSubmit}>
      <Input
        errorMessage={formik.errors.email}
        type="text"
        name="email"
        value={formik.values.email}
        placeholder="Votre email"
        iconName="mail"
        handleOnChange={formik.handleChange}
      />
      <Input
        errorMessage={formik.errors.password}
        className="mt-6"
        type="password"
        name="password"
        value={formik.values.password}
        placeholder="Votre mot de passe"
        iconName="lock"
        handleOnChange={formik.handleChange}
      />
      <ButtonPrimary type="submit" className="w-full mt-9">
        Se connecter
      </ButtonPrimary>
    </form>
  )
}
