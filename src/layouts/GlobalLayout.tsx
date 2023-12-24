import { Navbar } from '@/components'

type GlobalLayoutProps = {
  children: React.ReactNode
}
export const GlobalLayout = ({ children }: GlobalLayoutProps) => {
  return (
    <div className="h-full bg-gray-900 grid grid-cols-navbar">
      <Navbar studentName="Nicolas B." applicationsNumber={12} />
      <div className="w-full overflow-hidden p-5 pb-0">{children}</div>
    </div>
  )
}
