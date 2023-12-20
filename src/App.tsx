import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ApplicationsContainer } from '@/views/applications/Applications.container'
import { GlobalLayout } from './layouts/GlobalLayout'
import { ApplicationsProvider } from '@/contexts/applications/applications.provider'

function App() {
  return (
    <>
      <GlobalLayout>
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={
                <ApplicationsProvider>
                  <ApplicationsContainer />
                </ApplicationsProvider>
              }
            />
            <Route
              path="/settings"
              element={
                <>
                  <p>SETTINGS</p>
                </>
              }
            />
          </Routes>
        </BrowserRouter>
      </GlobalLayout>
    </>
  )
}

export default App
