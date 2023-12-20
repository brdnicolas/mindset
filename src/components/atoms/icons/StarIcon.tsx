import * as React from 'react'
import { IconProps } from '@/components/atoms/icons/types'

export const StarIcon = ({ className }: IconProps) => {
  return (
    <svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M12 3l2.781 5.595L21 9.498l-4.5 4.353L17.562 20 12 17.095 6.438 20 7.5 13.85 3 9.499l6.219-.903L12 3z"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
