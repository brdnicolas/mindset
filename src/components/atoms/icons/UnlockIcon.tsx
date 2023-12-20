import * as React from 'react'
import { IconProps } from '@/components/atoms/icons/types'

export const UnlockIcon = ({ className }: IconProps) => {
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
        d="M4 15.8c0-1.68 0-2.52.327-3.162a3 3 0 011.311-1.311C6.28 11 7.12 11 8.8 11h6.4c1.68 0 2.52 0 3.162.327a3 3 0 011.311 1.311C20 13.28 20 14.12 20 15.8v.4c0 1.68 0 2.52-.327 3.162a3 3 0 01-1.311 1.311C17.72 21 16.88 21 15.2 21H8.8c-1.68 0-2.52 0-3.162-.327a3 3 0 01-1.311-1.311C4 18.72 4 17.88 4 16.2v-.4z"
        stroke="currentColor"
        strokeWidth={1.5}
      />
      <path
        d="M15.897 6.3a.75.75 0 101.374-.6l-1.374.6zM7.75 8A4.25 4.25 0 0112 3.75v-1.5A5.75 5.75 0 006.25 8h1.5zm-1.5 0v3h1.5V8h-1.5zM12 3.75a4.251 4.251 0 013.897 2.55l1.374-.6A5.751 5.751 0 0012 2.25v1.5z"
        fill="currentColor"
      />
    </svg>
  )
}
