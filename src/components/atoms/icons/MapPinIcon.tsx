import * as React from 'react'
import { IconProps } from '@/components/atoms/icons/types'

export const MapPinIcon = ({ className }: IconProps) => {
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
        d="M19 10.2c0 6.856-7 10.8-7 10.8s-7-3.944-7-10.8c0-1.91.737-3.74 2.05-5.091A6.903 6.903 0 0112 3c1.857 0 3.637.759 4.95 2.109A7.306 7.306 0 0119 10.2z"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15 10a3 3 0 11-6 0 3 3 0 016 0z"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
