import { Icon } from '@/components/atoms/icons/Icon'
import { SHORT_DISPLAY_DATE_FORMAT, SHORT_DISPLAY_STRING_DATE_FORMAT } from '@/shared/constants'
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
        'flex items-center bg-gray-700 text-gray-100 px-6 py-5 rounded-2 border-2 border-transparent'
      )}
    >
      <Icon name="arrow-right" className="mr-6 text-gray-200" />
      <div>
        <p className={clsx('text-4 text-gray-100')}>{eventTitle || 'Événement'}</p>
        <p className={clsx('text-3 text-gray-300')}>
          {dayjs(eventDate).locale('fr').format(SHORT_DISPLAY_STRING_DATE_FORMAT)}
        </p>
      </div>
    </div>
  )
}
