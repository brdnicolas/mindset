import * as React from 'react'
import { IconProps } from '@/components/atoms/icons/types'

export const DeviceMobileIcon = ({ className }: IconProps) => {
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
        d="M6 7.8c0-1.68 0-2.52.327-3.162a3 3 0 011.311-1.311C8.28 3 9.12 3 10.8 3h2.4c1.68 0 2.52 0 3.162.327a3 3 0 011.311 1.311C18 5.28 18 6.12 18 7.8v8.4c0 1.68 0 2.52-.327 3.162a3 3 0 01-1.311 1.311C15.72 21 14.88 21 13.2 21h-2.4c-1.68 0-2.52 0-3.162-.327a3 3 0 01-1.311-1.311C6 18.72 6 17.88 6 16.2V7.8z"
        stroke="currentColor"
        strokeWidth={1.5}
      />
      <path d="M10 18h4" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}
