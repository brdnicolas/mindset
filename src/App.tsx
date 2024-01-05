import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ApplicationsContainer } from '@/views/applications/Applications.container'
import { ApplicationsProvider } from '@/contexts/applications/applications.provider'
import { SettingsContainer } from '@/views/settings/Settings.container'
import { StatisticsContainer } from './views/statistics/Statistics.container'
import { PlansContainer } from './views/plans/Plans.container'
import { RegisterContainer } from './views/register/Register.container'
import { LoginContainer } from './views/login/Login.container'
import { BreakpointsProvider } from '@/contexts/breakpoints/breakpoints.provider'
import { ApplicationDetailsContainer } from './views/applicationDetail/ApplicationDetail.container'

function App() {
  return (
    <>
      <BreakpointsProvider>
        <ApplicationsProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<ApplicationsContainer />} />
              <Route path="/application/:id" element={<ApplicationDetailsContainer />} />
              <Route path="/settings" element={<SettingsContainer />} />
              <Route path="/statistics" element={<StatisticsContainer />} />
              <Route path="/plans" element={<PlansContainer />} />
              <Route path="/register" element={<RegisterContainer />} />
              <Route path="/login" element={<LoginContainer />} />
            </Routes>
          </BrowserRouter>
        </ApplicationsProvider>
      </BreakpointsProvider>
    </>
  )
}

export default App
