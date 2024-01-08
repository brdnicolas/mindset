import clsx from 'clsx'

type TabPropsType = {
  label: string
  isSelected: boolean
  id: string
}

export const Tab = ({ label, isSelected, id }: TabPropsType) => {
  return (
    <div
      id={id}
      className={clsx(
        'text-4 text-gray-200 flex items-center justify-center px-3 py-6 rounded-2',
        'hover:text-gray-500',
        isSelected && 'bg-gray-700'
      )}
    >
      {label}
    </div>
  )
}
