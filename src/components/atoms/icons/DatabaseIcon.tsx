import * as React from 'react'
import { IconProps } from '@/components/atoms/icons/types'

export const DatabaseIcon = ({ className }: IconProps) => {
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
        d="M19.334 10c.428.613.666 1.289.666 2 0 2.761-3.582 5-8 5s-8-2.239-8-5c0-.711.238-1.387.666-2m0 4C4.238 14.613 4 15.289 4 16c0 2.761 3.582 5 8 5s8-2.239 8-5c0-.711-.238-1.387-.666-2M4.666 10C5.9 11.766 8.719 13 12 13c4.418 0 8-2.239 8-5s-3.582-5-8-5-8 2.239-8 5c0 .711.238 1.388.666 2z"
        stroke="currentColor"
        strokeWidth={1.5}
      />
    </svg>
  )
}
