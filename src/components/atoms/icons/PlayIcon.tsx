import * as React from 'react'
import { IconProps } from '@/components/atoms/icons/types'

export const PlayIcon = ({ className }: IconProps) => {
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
        d="M5 13.028v-2.056c0-2.63 0-3.946.554-4.726A3 3 0 017.61 5.008c.948-.124 2.11.491 4.436 1.722l1.941 1.028c2.6 1.376 3.899 2.064 4.324 2.982a3 3 0 010 2.52c-.425.918-1.725 1.606-4.324 2.982l-1.941 1.028C9.72 18.5 8.558 19.116 7.61 18.992a3 3 0 01-2.056-1.238C5 16.974 5 15.658 5 13.028z"
        stroke="currentColor"
        strokeWidth={1.5}
      />
    </svg>
  )
}
