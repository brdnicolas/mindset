import { ApplicationDetailsProvider } from '@/contexts/applicationDetails/applicationDetails.provider'
import { ApplicationsProvider } from '@/contexts/applications/applications.provider'
import { BreakpointsProvider } from '@/contexts/breakpoints/breakpoints.provider'
import { ReactNode } from 'react'
import { UserProvider } from '../user/user.provider'
import { EventProvider } from '../events/events.provider'

type ProviderPropsType = {
  children: ReactNode
}

export const Providers = ({ children }: ProviderPropsType) => {
  return (
    <UserProvider>
      <BreakpointsProvider>
        <ApplicationsProvider>
          <ApplicationDetailsProvider>
            <EventProvider>{children}</EventProvider>
          </ApplicationDetailsProvider>
        </ApplicationsProvider>
      </BreakpointsProvider>
    </UserProvider>
  )
}
