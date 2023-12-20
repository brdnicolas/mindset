import * as React from 'react'
import { IconProps } from '@/components/atoms/icons/types'

export const CheckIcon = ({ className }: IconProps) => {
  return (
    <svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path d="M5 13l1.879 1.879a3 3 0 004.242 0L19 7" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" />
    </svg>
  )
}
