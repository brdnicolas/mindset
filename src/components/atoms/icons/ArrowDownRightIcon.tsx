import * as React from 'react'
import { IconProps } from '@/components/atoms/icons/types'

export const ArrowDownRightIcon = ({ className }: IconProps) => {
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
        d="M18 9v4.2c0 1.68 0 2.52-.327 3.162a3 3 0 01-1.311 1.311C15.72 18 14.88 18 13.2 18H9M17 17L6 6"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
