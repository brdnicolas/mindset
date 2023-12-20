'use client'

import { ApplicationsContainer } from '@/containers/applications/ApplicationsContainer'
import { ApplicationsProvider } from '@/contexts/applications/applications.provider'

export default function Home() {
  return (
    <ApplicationsProvider>
      <ApplicationsContainer />
    </ApplicationsProvider>
  )
}
