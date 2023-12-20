import * as React from 'react'
import { IconProps } from '@/components/atoms/icons/types'

export const PhotographIcon = ({ className }: IconProps) => {
  return (
    <svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path d="M10 8a2 2 0 11-4 0 2 2 0 014 0z" stroke="currentColor" strokeWidth={1.5} />
      <path
        d="M3 7.8c0-1.68 0-2.52.327-3.162a3 3 0 011.311-1.311C5.28 3 6.12 3 7.8 3h8.4c1.68 0 2.52 0 3.162.327a3 3 0 011.311 1.311C21 5.28 21 6.12 21 7.8v8.4c0 1.68 0 2.52-.327 3.162a3 3 0 01-1.311 1.311C18.72 21 17.88 21 16.2 21H7.8c-1.68 0-2.52 0-3.162-.327a3 3 0 01-1.311-1.311C3 18.72 3 17.88 3 16.2V7.8z"
        stroke="currentColor"
        strokeWidth={1.5}
      />
      <path
        d="M3 17l2.635-2.953c.666-.999 2.12-1.04 2.841-.078a1.741 1.741 0 002.87-.122l1.058-1.693c1.187-1.9 3.963-1.875 5.116.046L21 17"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
      />
    </svg>
  )
}
