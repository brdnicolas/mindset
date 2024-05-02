import { SHORT_DISPLAY_DATE_FORMAT } from '@/shared/constants'
import clsx from 'clsx'
import dayjs from 'dayjs'

interface CardEventProps {
  eventTitle: string
  eventDate: string
  className?: string
}

export const CardEvent = ({ eventTitle, eventDate, className }: CardEventProps) => {
  return (
    <div
      className={clsx(
        className,
        'flex flex-col justify-center bg-gray-700 text-gray-100 px-6 py-5 rounded-2 border-2 border-transparent'
      )}
    >
      <p>{eventTitle || 'Événement'}</p>
      <p>{dayjs(eventDate).format(SHORT_DISPLAY_DATE_FORMAT)}</p>
    </div>
  )
}
