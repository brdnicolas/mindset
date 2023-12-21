import { GlobalLayout } from '@/layouts/GlobalLayout'

export const withGlobalLayout = (Component: () => JSX.Element) => () => {
  return (
    <>
      <GlobalLayout>
        <Component />
      </GlobalLayout>
    </>
  )
}
