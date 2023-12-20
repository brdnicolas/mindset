import * as React from 'react'
import { IconProps } from '@/components/atoms/icons/types'

export const AlertTriangleIcon = ({ className }: IconProps) => {
  return (
    <svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path d="M12 13V9.5" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" />
      <path
        d="M5.171 12.795l2.675-4.62C9.21 5.82 9.892 4.642 10.781 4.246a3 3 0 012.438 0c.89.396 1.571 1.574 2.935 3.93l2.675 4.619c1.368 2.364 2.053 3.546 1.951 4.516a3 3 0 01-1.22 2.115c-.788.574-2.154.574-4.885.574h-5.35c-2.731 0-4.097 0-4.886-.574a3 3 0 01-1.22-2.115c-.1-.97.584-2.152 1.952-4.516z"
        stroke="currentColor"
        strokeWidth={1.5}
      />
      <path d="M12 16h.01" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}
