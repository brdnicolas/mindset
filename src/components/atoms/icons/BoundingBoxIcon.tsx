import * as React from 'react'
import { IconProps } from '@/components/atoms/icons/types'

export const BoundingBoxIcon = ({ className }: IconProps) => {
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
        d="M3 14v2.2c0 1.68 0 2.52.327 3.162a3 3 0 001.311 1.311C5.28 21 6.12 21 7.8 21H10M21 14v2.2c0 1.68 0 2.52-.327 3.162a3 3 0 01-1.311 1.311C18.72 21 17.88 21 16.2 21H14M3 10V7.8c0-1.68 0-2.52.327-3.162a3 3 0 011.311-1.311C5.28 3 6.12 3 7.8 3H10M21 10V7.8c0-1.68 0-2.52-.327-3.162a3 3 0 00-1.311-1.311C18.72 3 17.88 3 16.2 3H14"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8 12c0-.93 0-1.395.102-1.777a3 3 0 012.121-2.12C10.605 8 11.07 8 12 8c.93 0 1.395 0 1.777.102a3 3 0 012.12 2.121C16 10.605 16 11.07 16 12c0 .93 0 1.395-.102 1.777a3 3 0 01-2.121 2.12C13.395 16 12.93 16 12 16c-.93 0-1.395 0-1.777-.102a3 3 0 01-2.12-2.121C8 13.395 8 12.93 8 12z"
        stroke="currentColor"
        strokeWidth={1.5}
      />
    </svg>
  )
}
