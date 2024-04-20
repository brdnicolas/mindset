import { ButtonSecondary } from '@/components'
import { Link } from 'react-router-dom'
import { RegisterForm } from '@/views/register/Register.form'

export const RegisterContainer = () => {
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
          <div className="mt-[10vh] w-[300px] flex flex-col items-center">
            <RegisterForm />
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
