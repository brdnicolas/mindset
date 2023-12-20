import * as React from 'react'
import { IconProps } from '@/components/atoms/icons/types'

export const SortIcon = ({ className }: IconProps) => {
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
        d="M18 15l-2.606 2.606c-1.188 1.188-1.782 1.782-2.467 2.004a3 3 0 01-1.854 0c-.685-.222-1.28-.816-2.467-2.004L6 15M18 9l-2.606-2.606c-1.188-1.188-1.782-1.782-2.467-2.005a3 3 0 00-1.854 0c-.685.223-1.28.817-2.467 2.005L6 9"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
