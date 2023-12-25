import { withGlobalLayout } from '@/utils/hoc/withGlobalLayout'
import { withAuthenticatedUser } from '@/utils/hoc/withAuthenticatedUser'

export const StatisticsContainer = withAuthenticatedUser(
  withGlobalLayout(() => {
    return (
      <>
        <p className="text-white uppercase">Statistics</p>
      </>
    )
  })
)
