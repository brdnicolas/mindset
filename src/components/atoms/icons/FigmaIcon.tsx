import * as React from 'react'
import { IconProps } from '@/components/atoms/icons/types'

export const FigmaIcon = ({ className }: IconProps) => {
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
        d="M12 9H9m3 0v6m0-6V3m0 6h3m-3 6H9m3 0v3a3 3 0 11-3-3m0 0a3 3 0 110-6m0 0a3 3 0 010-6h3m0 0h3a3 3 0 110 6m0 0a3 3 0 110 6 3 3 0 010-6z"
        stroke="currentColor"
        strokeWidth={1.5}
      />
    </svg>
  )
}
