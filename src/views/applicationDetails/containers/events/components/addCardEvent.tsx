import clsx from 'clsx'

type AddCardEventProps = {
  onClick: () => void
}

export const AddCardEvent = ({ onClick }: AddCardEventProps) => {
  return (
    <div
      onClick={onClick}
      className={clsx(
        'flex items-center justify-center bg-gray-700 text-gray-100 px-6 py-5 rounded-2 border-2 border-transparent w-full',
        'hover:cursor-pointer hover:border-gray-600'
      )}
    >
      <p>Ajouter un événement</p>
    </div>
  )
}
