import * as React from 'react'
import { IconProps } from '@/components/atoms/icons/types'

export const CopyIcon = ({ className }: IconProps) => {
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
        d="M15 15h1.2c1.68 0 2.52 0 3.162-.327a3 3 0 001.311-1.311C21 12.72 21 11.88 21 10.2V7.8c0-1.68 0-2.52-.327-3.162a3 3 0 00-1.311-1.311C18.72 3 17.88 3 16.2 3h-2.4c-1.68 0-2.52 0-3.162.327a3 3 0 00-1.311 1.311C9 5.28 9 6.12 9 7.8V9M7.8 21h2.4c1.68 0 2.52 0 3.162-.327a3 3 0 001.311-1.311C15 18.72 15 17.88 15 16.2v-2.4c0-1.68 0-2.52-.327-3.162a3 3 0 00-1.311-1.311C12.72 9 11.88 9 10.2 9H7.8c-1.68 0-2.52 0-3.162.327a3 3 0 00-1.311 1.311C3 11.28 3 12.12 3 13.8v2.4c0 1.68 0 2.52.327 3.162a3 3 0 001.311 1.311C5.28 21 6.12 21 7.8 21z"
        stroke="currentColor"
        strokeWidth={1.5}
      />
    </svg>
  )
}
