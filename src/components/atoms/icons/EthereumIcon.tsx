import * as React from 'react'
import { IconProps } from '@/components/atoms/icons/types'

export const EthereumIcon = ({ className }: IconProps) => {
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
        d="M16 15.116L12 20l-4-4.884m4-.65l4-2.094L12 4l-4 8.372 4 2.093z"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
