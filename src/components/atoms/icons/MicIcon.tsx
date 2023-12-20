import * as React from 'react'
import { IconProps } from '@/components/atoms/icons/types'

export const MicIcon = ({ className }: IconProps) => {
  return (
    <svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path d="M9 6a3 3 0 116 0v6a3 3 0 11-6 0V6z" stroke="currentColor" strokeWidth={1.5} />
      <path d="M8 21h8M12 21v-6" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" />
      <path d="M18 12a6 6 0 01-12 0" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" />
    </svg>
  )
}
