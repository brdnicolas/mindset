import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ApplicationsContainer } from '@/views/applications/Applications.container'
import { GlobalLayout } from './layouts/GlobalLayout'
import { ApplicationsProvider } from '@/contexts/applications/applications.provider'
import { SettingsContainer } from '@/views/settings/Settings.container'
import { StatisticsContainer } from './views/statistics/Statistics.container'
import { PlansContainer } from './views/plans/Plans.container'
import { RegisterContainer } from './views/register/Register.container'

function App() {
  const withGlobalLayout = (component: () => JSX.Element) => <GlobalLayout>{component()}</GlobalLayout>
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<ApplicationsProvider>{withGlobalLayout(ApplicationsContainer)}</ApplicationsProvider>}
          />
          <Route path="/settings" element={withGlobalLayout(SettingsContainer)} />
          <Route path="/stats" element={withGlobalLayout(StatisticsContainer)} />
          <Route path="/plans" element={withGlobalLayout(PlansContainer)} />
          <Route path="/register" element={<RegisterContainer />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
