import { useEffect, useState } from 'react'

export const withAuthenticatedUser = (Component: () => JSX.Element) => () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  useEffect(() => {
    if (!localStorage.getItem('token')) {
      window.location.href = '/login'
    } else {
      setIsAuthenticated(true)
    }
  }, [])

  if (!isAuthenticated) {
    return <></>
  }

  return (
    <>
      <Component />
    </>
  )
}
