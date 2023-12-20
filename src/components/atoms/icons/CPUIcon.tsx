import * as React from 'react'
import { IconProps } from '@/components/atoms/icons/types'

export const CPUIcon = ({ className }: IconProps) => {
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
        d="M6 10.8c0-1.68 0-2.52.327-3.162a3 3 0 011.311-1.311C8.28 6 9.12 6 10.8 6h2.4c1.68 0 2.52 0 3.162.327a3 3 0 011.311 1.311C18 8.28 18 9.12 18 10.8v2.4c0 1.68 0 2.52-.327 3.162a3 3 0 01-1.311 1.311C15.72 18 14.88 18 13.2 18h-2.4c-1.68 0-2.52 0-3.162-.327a3 3 0 01-1.311-1.311C6 15.72 6 14.88 6 13.2v-2.4z"
        stroke="currentColor"
        strokeWidth={1.5}
      />
      <path
        d="M10 11.6c0-.56 0-.84.109-1.054a1 1 0 01.437-.437C10.76 10 11.04 10 11.6 10h.8c.56 0 .84 0 1.054.109a1 1 0 01.437.437C14 10.76 14 11.04 14 11.6v.8c0 .56 0 .84-.109 1.054a1 1 0 01-.437.437C13.24 14 12.96 14 12.4 14h-.8c-.56 0-.84 0-1.054-.109a1 1 0 01-.437-.437C10 13.24 10 12.96 10 12.4v-.8z"
        stroke="currentColor"
        strokeWidth={1.5}
      />
      <path
        d="M10 3v3M10 18v3M14 3v3M14 18v3M3 10h3M18 10h3M3 14h3M18 14h3"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
