import * as React from 'react'
import { IconProps } from '@/components/atoms/icons/types'

export const LayersIcon = ({ className }: IconProps) => {
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
        d="M20 12l-5.456 3.41c-.923.577-1.384.865-1.88.978-.437.1-.891.1-1.329 0-.495-.113-.956-.401-1.879-.978L4 12"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M20 16l-5.456 3.41c-.923.577-1.384.865-1.88.978-.437.1-.891.1-1.329 0-.495-.113-.956-.401-1.879-.978L4 16M20 8l-5.456-3.41c-.923-.577-1.384-.865-1.88-.978a3 3 0 00-1.329 0c-.495.113-.956.401-1.879.978L4 8l5.456 3.41c.923.577 1.384.865 1.88.978.437.1.891.1 1.329 0 .495-.113.956-.401 1.879-.978L20 8z"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
