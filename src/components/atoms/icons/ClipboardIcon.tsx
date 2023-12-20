import * as React from 'react'
import { IconProps } from '@/components/atoms/icons/types'

export const ClipboardIcon = ({ className }: IconProps) => {
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
        d="M8 5a2 2 0 002 2h4a2 2 0 002-2M8 5a2 2 0 012-2h4a2 2 0 012 2M8 5l-.392.026a3 3 0 00-2.582 2.582C5 7.803 5 8.036 5 8.5v7.7c0 1.68 0 2.52.327 3.162a3 3 0 001.311 1.311C7.28 21 8.12 21 9.8 21h4.4c1.68 0 2.52 0 3.162-.327a3 3 0 001.311-1.311C19 18.72 19 17.88 19 16.2V8.5c0-.464 0-.697-.026-.892a3 3 0 00-2.582-2.582L16 5"
        stroke="currentColor"
        strokeWidth={1.5}
      />
    </svg>
  )
}
