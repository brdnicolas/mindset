import { Avatar } from '@/components'
import { Icon } from '@/components/atoms/icons/Icon'
import { useState } from 'react'
import dayjs from 'dayjs'

type CardProps = {
  company: string
  job: string
  date: string
  avatar?: string
  coverLetter: string
  onDelete?: any
}

export const Card = ({ company, job, date, avatar, coverLetter, onDelete }: CardProps) => {
  const [showIcon, setShowIcon] = useState(false)

  return (
    <div
      onMouseEnter={() => setShowIcon(true)}
      onMouseLeave={() => setShowIcon(false)}
      className="p-5 bg-gray-700 w-full"
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <Avatar src={avatar} className="h-8 w-8" />
          <p className="ml-3 text-gray-300 text-sm">{company}</p>
        </div>
        {showIcon && (
          <button onClick={onDelete} className="cursor-pointer h-5 w-5">
            <Icon name="close" className="text-gray-500" />
          </button>
        )}
      </div>
      <p className="mt-5 text-gray-100 text-base font-bold">{job}</p>
      <div className="flex items-center justify-between mt-5">
        <div className="flex items-center ">
          <Icon className="w-[18px] h-[18px]" name="calendar" />
          <p className="text-3.5 text-gray-500 ml-[8px]">{dayjs(date).fromNow()}</p>
        </div>
        {coverLetter && <Icon className="w-[18px] h-[18px]" name="document-text" />}
      </div>
    </div>
  )
}
