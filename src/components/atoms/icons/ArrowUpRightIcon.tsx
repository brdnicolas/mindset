import * as React from 'react'
import { IconProps } from '@/components/atoms/icons/types'

export const ArrowUpRightIcon = ({ className }: IconProps) => {
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
        d="M18 15v-4.2c0-1.68 0-2.52-.327-3.162a3 3 0 00-1.311-1.311C15.72 6 14.88 6 13.2 6H9M6 18L17 7"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
