import { setInformation } from '@/contexts/applicationDetails/applicationDetails.actions'
import { useApplicationDetailsContext } from '@/contexts/applicationDetails/applicationDetails.provider'
import { getApplicationById } from '@/services/applications/application'
import { withAuthenticatedUser } from '@/utils/hoc/withAuthenticatedUser'
import { withGlobalLayout } from '@/utils/hoc/withGlobalLayout'
import { useEffect } from 'react'

export const ApplicationDetailsContainer = withAuthenticatedUser(
  withGlobalLayout(() => {
    const { dispatch } = useApplicationDetailsContext()
    const applicationId = window.location.href.split('/')[3]

    useEffect(() => {
      const token = localStorage.getItem('token')

      if (!token) {
        return
      }

      getApplicationById(Number(applicationId))
        .then((data) => {
          dispatch(setInformation(data))
        })
        .catch(() => {
          localStorage.removeItem('token')
          window.location.reload()
        })
    })
    return <div className="laptop:pt-16"></div>
  })
)
