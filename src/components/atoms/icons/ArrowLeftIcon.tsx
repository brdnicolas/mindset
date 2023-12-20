import * as React from 'react'
import { IconProps } from '@/components/atoms/icons/types'

export const ArrowLeftIcon = ({ className }: IconProps) => {
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
        d="M9 18l-2.606-2.606c-1.188-1.188-1.782-1.782-2.005-2.467a3 3 0 010-1.854c.223-.685.817-1.28 2.005-2.467L9 6M4.5 12H21"
        stroke="currentcolor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
