import * as React from 'react'
import { IconProps } from '@/components/atoms/icons/types'

export const BatteryIcon = ({ className }: IconProps) => {
  return (
    <svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path d="M22 14v-4" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" />
      <path
        d="M2 10.8c0-1.68 0-2.52.327-3.162a3 3 0 011.311-1.311C4.28 6 5.12 6 6.8 6h7.4c1.68 0 2.52 0 3.162.327a3 3 0 011.311 1.311C19 8.28 19 9.12 19 10.8v2.4c0 1.68 0 2.52-.327 3.162a3 3 0 01-1.311 1.311C16.72 18 15.88 18 14.2 18H6.8c-1.68 0-2.52 0-3.162-.327a3 3 0 01-1.311-1.311C2 15.72 2 14.88 2 13.2v-2.4z"
        stroke="currentColor"
        strokeWidth={1.5}
      />
    </svg>
  )
}
