import * as React from 'react'
import { IconProps } from '@/components/atoms/icons/types'

export const XIcon = ({ className }: IconProps) => {
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
        d="M2.47 20.47a.75.75 0 101.06 1.06l-1.06-1.06zm1.06 1.06l8-8-1.06-1.06-8 8 1.06 1.06zM21.53 3.53a.75.75 0 00-1.06-1.06l1.06 1.06zm-8 8l8-8-1.06-1.06-8 8 1.06 1.06z"
        fill="currentColor"
      />
      <path d="M7 3l14 18h-4L3 3h4z" stroke="currentColor" strokeWidth={1.5} strokeLinejoin="round" />
    </svg>
  )
}
