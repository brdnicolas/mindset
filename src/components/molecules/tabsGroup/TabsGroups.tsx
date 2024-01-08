import { Tab } from '@/components/atoms'
import clsx from 'clsx'

type TabsOption = {
  label: string
  id: string
  isSelected: boolean
  onClick: () => void
}

type TabsGroupProps = {
  options: TabsOption[]
  className?: string
}

export const TabsGroup = ({ options, className }: TabsGroupProps) => {
  return (
    <div className={clsx('flex items-center', className)}>
      {options.map((option) => {
        return <Tab label={option.label} id={option.id} isSelected={option.isSelected} onClick={option.onClick} />
      })}
    </div>
  )
}
