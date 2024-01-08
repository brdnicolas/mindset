import { Avatar } from '@/components'
import { setInformation } from '@/contexts/applicationDetails/applicationDetails.actions'
import { useApplicationDetailsContext } from '@/contexts/applicationDetails/applicationDetails.provider'
import { getApplicationById } from '@/services/applications/application'
import { SHORT_DISPLAY_DATE_FORMAT } from '@/shared/constants'
import { withAuthenticatedUser } from '@/utils/hoc/withAuthenticatedUser'
import { withGlobalLayout } from '@/utils/hoc/withGlobalLayout'
import dayjs from 'dayjs'
import { useEffect } from 'react'

export const ApplicationDetailsContainer = withAuthenticatedUser(
  withGlobalLayout(() => {
    const { companyImageUrl, company, job, createdAt, dispatch } = useApplicationDetailsContext()
    const applicationId = window.location.href.split('/')[4]

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
    }, [])
    return (
      <div className="laptop:pt-16">
        <header className="flex items-center">
          <Avatar src={companyImageUrl} alt="Logo company" className="w-20 h-20" />
          <div className="ml-5">
            <p className="text-4 text-gray-200">
              {company} - <span className="font-bold">{job}</span>
            </p>
            <p className="text-3 text-gray-200">Postulé le {dayjs(createdAt).format(SHORT_DISPLAY_DATE_FORMAT)}</p>
          </div>
        </header>
      </div>
    )
  })
)
