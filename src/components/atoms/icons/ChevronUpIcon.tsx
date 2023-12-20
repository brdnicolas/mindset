import * as React from 'react'
import { IconProps } from '@/components/atoms/icons/types'

export const ChevronUpIcon = ({ className }: IconProps) => {
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
        d="M18 14l-2.606-2.606c-1.188-1.188-1.782-1.782-2.467-2.005a3 3 0 00-1.854 0c-.685.223-1.28.817-2.467 2.005L6 14"
        stroke="currentcolor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
