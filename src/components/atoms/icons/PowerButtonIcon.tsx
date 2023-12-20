import * as React from 'react'
import { IconProps } from '@/components/atoms/icons/types'

export const PowerButtonIcon = ({ className }: IconProps) => {
  return (
    <svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" stroke="currentColor" strokeWidth={1.5} />
      <path d="M12 12V7M16 9a5 5 0 11-8 0" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" />
    </svg>
  )
}
