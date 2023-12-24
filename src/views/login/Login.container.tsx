import { ButtonPrimary, ButtonSecondary, Input } from '@/components'
import { login } from '@/services/auth/auth'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export const LoginContainer = () => {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleOnLogin = async () => {
    try {
      const data = await login({ email, password })
      const token = data.token

      localStorage.setItem('token', token)
      navigate('/')
    } catch {
      alert('Error')
    }
  }

  return (
    <div className="bg-gray-900 w-full h-full px-17 py-14">
      <div className="h-full">
        <header className="flex items-center justify-between">
          <img src="/assets/tinyLogo.svg" alt="Logo" />
          <ButtonSecondary>
            <Link to="/register">S'inscrire</Link>
          </ButtonSecondary>
        </header>
        <div className="flex items-center justify-center h-full">
          <div className="flex flex-col items-center">
            <h1 className="text-white text-center text-10 font-bold w-[597px]">
              Vos compétences en première ligne de l'innovation
            </h1>
            <div className="mt-30 w-[300px]">
              <Input
                type="text"
                value={email}
                placeholder="Votre email"
                iconName="mail"
                handleOnChange={(e) => {
                  setEmail(e.target.value)
                }}
              />
              <Input
                className="mt-6"
                type="password"
                value={password}
                placeholder="Votre mot de passe"
                iconName="lock"
                handleOnChange={(e) => {
                  setPassword(e.target.value)
                }}
              />
              <ButtonPrimary onClick={() => handleOnLogin()} isDisabled={!email || !password} className="w-full mt-9">
                Se connecter
              </ButtonPrimary>
              <p className="text-gray-300 text-3 flex justify-center mt-26">
                Vous n'avez pas de compte ?
                <Link className="text-white font-bold cursor-pointer no-underline ml-1" to="/register">
                  S'inscrire
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
