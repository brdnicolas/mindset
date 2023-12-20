import * as React from 'react'
import { IconProps } from '@/components/atoms/icons/types'

export const ArrowDownLeftIcon = ({ className }: IconProps) => {
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
        d="M7 17L18 6M6 9v4.2c0 1.68 0 2.52.327 3.162a3 3 0 001.311 1.311C8.28 18 9.12 18 10.8 18H15"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
