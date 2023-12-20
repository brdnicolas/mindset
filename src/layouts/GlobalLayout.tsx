import { Navbar } from '@/components'

type GlobalLayoutProps = {
  children: React.ReactNode
}
export const GlobalLayout = ({ children }: GlobalLayoutProps) => {
  return (
    <div className="flex h-full bg-gray-900">
      <Navbar studentName="Nicolas B." applicationsNumber={12} />
      <div className="w-full">{children}</div>
    </div>
  )
}
