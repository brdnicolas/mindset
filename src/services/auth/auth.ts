import { api } from '../api'

type RegisterProps = {
  email: string
  password: string
  firstName: string
  lastName: string
}

type Response = {
  token: string
}

export const register = async ({ email, password, firstName, lastName }: RegisterProps): Promise<Response> => {
  return api
    .post('/register', {
      email,
      password,
      firstName,
      lastName
    })
    .then((response) => response.data)
}

type LoginProps = {
  email: string
  password: string
}

export const login = async ({ email, password }: LoginProps): Promise<Response> => {
  return api
    .post('/login', {
      email,
      password
    })
    .then((response) => response.data)
}
