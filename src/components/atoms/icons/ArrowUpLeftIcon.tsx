import * as React from 'react'
import { IconProps } from '@/components/atoms/icons/types'

export const ArrowUpLeftIcon = ({ className }: IconProps) => {
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
        d="M6 15v-4.2c0-1.68 0-2.52.327-3.162a3 3 0 011.311-1.311C8.28 6 9.12 6 10.8 6H15M18 18L7 7"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
