import * as React from 'react'
import { IconProps } from '@/components/atoms/icons/types'

export const BatteryChargingIcon = ({ className }: IconProps) => {
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
        d="M22 14v-4M11.5 6l-4 6h6l-4 6"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.5 18H5a3 3 0 01-3-3V9a3 3 0 013-3h3m5 12h3a3 3 0 003-3V9a3 3 0 00-3-3h-1.5"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
      />
    </svg>
  )
}
