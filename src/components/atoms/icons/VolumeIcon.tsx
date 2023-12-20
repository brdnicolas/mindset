import * as React from 'react'
import { IconProps } from '@/components/atoms/icons/types'

export const VolumeIcon = ({ className }: IconProps) => {
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
        d="M3 10.6v2.8c0 .56 0 .84.109 1.054a1 1 0 00.437.437C3.76 15 4.04 15 4.6 15h1.839c.208 0 .312 0 .411.02a1 1 0 01.254.09c.09.046.172.11.334.24L9.4 16.92c.833.666 1.249.999 1.599 1a1 1 0 00.782-.377c.219-.273.219-.806.219-1.872V8.329c0-1.066 0-1.599-.219-1.872A1 1 0 0011 6.08c-.35 0-.766.333-1.599.999L7.438 8.65c-.162.13-.243.194-.334.24a1 1 0 01-.254.09C6.75 9 6.647 9 6.44 9H4.6c-.56 0-.84 0-1.054.109a1 1 0 00-.437.437C3 9.76 3 10.04 3 10.6z"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinejoin="round"
      />
    </svg>
  )
}
