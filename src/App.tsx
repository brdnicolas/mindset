import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ApplicationsContainer } from '@/views/applications/Applications.container'
import { ApplicationsProvider } from '@/contexts/applications/applications.provider'
import { SettingsContainer } from '@/views/settings/Settings.container'
import { StatisticsContainer } from './views/statistics/Statistics.container'
import { PlansContainer } from './views/plans/Plans.container'
import { RegisterContainer } from './views/register/Register.container'
import { LoginContainer } from './views/login/Login.container'

function App() {
  return (
    <>
      <ApplicationsProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<ApplicationsContainer />} />
            <Route path="/settings" element={<SettingsContainer />} />
            <Route path="/stats" element={<StatisticsContainer />} />
            <Route path="/plans" element={<PlansContainer />} />
            <Route path="/register" element={<RegisterContainer />} />
            <Route path="/login" element={<LoginContainer />} />
          </Routes>
        </BrowserRouter>
      </ApplicationsProvider>
    </>
  )
}

export default App
