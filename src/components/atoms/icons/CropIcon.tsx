import * as React from 'react'
import { IconProps } from '@/components/atoms/icons/types'

export const CropIcon = ({ className }: IconProps) => {
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
        d="M16 21v-8.2c0-1.68 0-2.52-.327-3.162a3 3 0 00-1.311-1.311C13.72 8 12.88 8 11.2 8H3m5-5v8.2c0 1.68 0 2.52.327 3.162a3 3 0 001.311 1.311C10.28 16 11.12 16 12.8 16H21"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
