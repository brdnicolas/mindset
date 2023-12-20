import * as React from 'react'
import { IconProps } from '@/components/atoms/icons/types'

export const CrossHairIcon = ({ className }: IconProps) => {
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
        d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9h-5m-4 9a9 9 0 01-9-9m9 9v-5m-9-4a9 9 0 019-9m-9 9h5m4-9v5"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
      />
    </svg>
  )
}
