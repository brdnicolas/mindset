import * as React from 'react'
import { IconProps } from '@/components/atoms/icons/types'

export const ArchiveIcon = ({ className }: IconProps) => {
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
        d="M19 8.95v6.25c0 1.68 0 2.52-.327 3.162a3 3 0 01-1.311 1.311C16.72 20 15.88 20 14.2 20H9.8c-1.68 0-2.52 0-3.162-.327a3 3 0 01-1.311-1.311C5 17.72 5 16.88 5 15.2V8.95m.5.05h13a2.5 2.5 0 000-5h-13a2.5 2.5 0 000 5z"
        stroke="currentColor"
        strokeWidth={1.5}
      />
      <path d="M10 12h4" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}
