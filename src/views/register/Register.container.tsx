import { ButtonPrimary, ButtonSecondary, Input } from '@/components'
import { register } from '@/services/auth/auth'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export const RegisterContainer = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')

  const navigate = useNavigate()

  const handleOnRegister = async () => {
    try {
      await register({ email, password, firstName, lastName })
      navigate('/login')
    } catch {
      alert('Error')
    }
  }

  return (
    <div className="bg-gray-900 w-full laptop:p-14 p-5">
      <header className="flex items-center justify-between">
        <img className="h-8" src="/assets/tinyLogo.png" alt="Logo" />
        <ButtonSecondary>
          <Link to="/login">Se connecter</Link>
        </ButtonSecondary>
      </header>
      <div className="flex justify-center h-full mt-[5vh] p-10">
        <div className="flex flex-col items-center">
          <h1 className="text-white text-center text-8 tablet:text-10 font-bold w-full tablet:w-[600px]">
            Gérez vos candidatures avec précision, boosté par l'IA
          </h1>
          <div className="mt-[10vh] w-[300px]">
            <Input
              type="text"
              value={firstName}
              placeholder="Votre prénom"
              iconName="user"
              handleOnChange={(e) => {
                setFirstName(e.target.value)
              }}
            />
            <Input
              className="mt-6"
              type="text"
              value={lastName}
              placeholder="Votre nom"
              iconName="user"
              handleOnChange={(e) => {
                setLastName(e.target.value)
              }}
            />
            <Input
              className="mt-6"
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
            <ButtonPrimary
              onClick={() => handleOnRegister()}
              isDisabled={!firstName || !lastName || !email || !password}
              className="w-full mt-9"
            >
              S'inscrire
            </ButtonPrimary>
            <p className="text-gray-300 text-3 flex justify-center mt-[3vh] tablet:mt-[7vh]">
              Vous avez déjà un compte ?{' '}
              <Link className="text-white font-bold cursor-pointer no-underline ml-1 hover:underline" to="/login">
                Se connecter
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
