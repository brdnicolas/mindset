import * as React from 'react'
import { IconProps } from '@/components/atoms/icons/types'

export const PlayCircleIcon = ({ className }: IconProps) => {
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
        d="M9 14.113V9.887c0-.942 0-1.414.197-1.679a1 1 0 01.723-.4c.33-.027.729.223 1.528.722l3.381 2.113c.72.45 1.08.675 1.203.963a1 1 0 010 .788c-.123.288-.483.513-1.203.963l-3.381 2.113c-.799.5-1.199.749-1.528.722a1 1 0 01-.723-.4C9 15.527 9 15.055 9 14.113z"
        stroke="currentColor"
        strokeWidth={1.5}
      />
      <path d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" stroke="currentColor" strokeWidth={1.5} />
    </svg>
  )
}
