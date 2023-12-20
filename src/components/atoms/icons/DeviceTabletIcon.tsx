import * as React from 'react'
import { IconProps } from '@/components/atoms/icons/types'

export const DeviceTabletIcon = ({ className }: IconProps) => {
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
        d="M4 7.8c0-1.68 0-2.52.327-3.162a3 3 0 011.311-1.311C6.28 3 7.12 3 8.8 3h6.4c1.68 0 2.52 0 3.162.327a3 3 0 011.311 1.311C20 5.28 20 6.12 20 7.8v8.4c0 1.68 0 2.52-.327 3.162a3 3 0 01-1.311 1.311C17.72 21 16.88 21 15.2 21H8.8c-1.68 0-2.52 0-3.162-.327a3 3 0 01-1.311-1.311C4 18.72 4 17.88 4 16.2V7.8z"
        stroke="currentColor"
        strokeWidth={1.5}
      />
      <path d="M10 18h4" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}
