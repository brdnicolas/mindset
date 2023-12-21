import { ButtonPrimary, ButtonSecondary, Input } from '@/components'
import { useState } from 'react'

export const LoginContainer = () => {
  const [mail, setMail] = useState('')
  const [password, setPassword] = useState('')
  return (
    <div className="bg-gray-900 w-full h-full px-17 py-14">
      <div className="h-full">
        <header className="flex items-center justify-between">
          <img src="/assets/logo.svg" alt="Logo" />
          <ButtonSecondary onClick={() => (window.location.href = '/register')}>S'inscrire</ButtonSecondary>
        </header>
        <div className="flex items-center justify-center h-full">
          <div className="flex flex-col items-center">
            <h1 className="text-white text-center text-10 font-bold w-[597px]">
              Vos compétences en première ligne de l'innovation
            </h1>
            <div className="mt-30 w-[300px]">
              <Input
                type="text"
                value={mail}
                placeholder="email"
                iconName="mail"
                handleOnChange={(e) => {
                  setMail(e.target.value)
                }}
              />
              <Input
                className="mt-6"
                type="password"
                value={password}
                placeholder="password"
                iconName="lock"
                handleOnChange={(e) => {
                  setPassword(e.target.value)
                }}
              />
              <ButtonPrimary
                isDisabled={!mail || !password}
                className="w-full mt-9"
                onClick={() => {
                  console.log('cc')
                }}
              >
                Se connecter
              </ButtonPrimary>
              <p className="text-gray-300 text-3 flex justify-center mt-26">
                Vous n'avez pas de compte ?
                <a className="text-white font-bold cursor-pointer no-underline ml-1" href="/register">
                  S'inscrire
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
