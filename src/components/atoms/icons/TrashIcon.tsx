import * as React from 'react'
import { IconProps } from '@/components/atoms/icons/types'

export const TrashIcon = ({ className }: IconProps) => {
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
        d="M3 7h18m-5 0H8c0-.93 0-1.395.102-1.776a3 3 0 012.121-2.122C10.605 3 11.07 3 12 3c.93 0 1.395 0 1.777.102a3 3 0 012.12 2.122C16 5.605 16 6.07 16 7zM6 7h12v9.2c0 1.68 0 2.52-.327 3.162a3 3 0 01-1.311 1.311C15.72 21 14.88 21 13.2 21h-2.4c-1.68 0-2.52 0-3.162-.327a3 3 0 01-1.311-1.311C6 18.72 6 17.88 6 16.2V7z"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
