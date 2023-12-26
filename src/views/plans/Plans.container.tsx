import { withGlobalLayout } from '@/utils/hoc/withGlobalLayout'
import { withAuthenticatedUser } from '@/utils/hoc/withAuthenticatedUser'

export const PlansContainer = withAuthenticatedUser(
  withGlobalLayout(() => {
    return (
      <>
        <p className="text-white uppercase">Plans</p>
      </>
    )
  })
)
