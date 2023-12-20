import * as React from 'react'
import { IconProps } from '@/components/atoms/icons/types'

export const InputIcon = ({ className }: IconProps) => {
  return (
    <svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path d="M17 5v14" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" />
      <path
        d="M20 5h-6M20 19h-6M14 8H7c-.93 0-1.395 0-1.776.102a3 3 0 00-2.122 2.121C3 10.605 3 11.07 3 12c0 .93 0 1.395.102 1.777a3 3 0 002.122 2.12C5.605 16 6.07 16 7 16h7M17 16c.93 0 1.395 0 1.776-.102a3 3 0 002.122-2.121C21 13.395 21 12.93 21 12c0-.93 0-1.395-.102-1.777a3 3 0 00-2.122-2.12C18.395 8 17.93 8 17 8"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
      />
    </svg>
  )
}
