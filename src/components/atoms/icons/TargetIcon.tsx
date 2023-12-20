import * as React from 'react'
import { IconProps } from '@/components/atoms/icons/types'

export const TargetIcon = ({ className }: IconProps) => {
  return (
    <svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" stroke="currentColor" strokeWidth={1.5} />
      <path d="M18 12a6 6 0 11-12 0 6 6 0 0112 0z" stroke="currentColor" strokeWidth={1.5} />
      <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" stroke="currentColor" strokeWidth={1.5} />
    </svg>
  )
}
