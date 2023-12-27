import { ButtonSecondary } from '@/components'
import { withGlobalLayout } from '@/utils/hoc/withGlobalLayout'
import { withAuthenticatedUser } from '@/utils/hoc/withAuthenticatedUser'

export const SettingsContainer = withAuthenticatedUser(
  withGlobalLayout(() => {
    const logOut = () => {
      localStorage.removeItem('token')
      window.location.reload()
    }

    return (
      <div className="px-5">
        <p className="text-gray-100">Se déconnecter</p>
        <ButtonSecondary onClick={logOut} className="mt-5 bg-red-500">
          Se déconnecter
        </ButtonSecondary>
      </div>
    )
  })
)
