import * as React from 'react'
import { IconProps } from '@/components/atoms/icons/types'

export const ChevronRight2Icon = ({ className }: IconProps) => {
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
        d="M6 18l2.606-2.606c1.188-1.188 1.782-1.782 2.005-2.467a3 3 0 000-1.854c-.223-.685-.817-1.28-2.005-2.467L6 6M12 18l2.606-2.606c1.188-1.188 1.782-1.782 2.004-2.467a3 3 0 000-1.854c-.222-.685-.816-1.28-2.004-2.467L12 6"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
