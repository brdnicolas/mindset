import * as React from 'react'
import { IconProps } from '@/components/atoms/icons/types'

export const LockIcon = ({ className }: IconProps) => {
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
        d="M4 15.8c0-1.68 0-2.52.327-3.162a3 3 0 011.311-1.311C6.28 11 7.12 11 8.8 11h6.4c1.68 0 2.52 0 3.162.327a3 3 0 011.311 1.311C20 13.28 20 14.12 20 15.8v.4c0 1.68 0 2.52-.327 3.162a3 3 0 01-1.311 1.311C17.72 21 16.88 21 15.2 21H8.8c-1.68 0-2.52 0-3.162-.327a3 3 0 01-1.311-1.311C4 18.72 4 17.88 4 16.2v-.4zM7 11V8a5 5 0 0110 0v3"
        stroke="currentColor"
        strokeWidth={1.5}
      />
    </svg>
  )
}
