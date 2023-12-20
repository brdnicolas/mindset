import * as React from 'react'
import { IconProps } from '@/components/atoms/icons/types'

export const NoteIcon = ({ className }: IconProps) => {
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
        d="M13 20.678V18.8c0-1.68 0-2.52.327-3.162a3 3 0 011.311-1.311C15.28 14 16.12 14 17.8 14h2.645"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16.2 3H7.8c-1.68 0-2.52 0-3.162.327a3 3 0 00-1.311 1.311C3 5.28 3 6.12 3 7.8v8.4c0 1.68 0 2.52.327 3.162a3 3 0 001.311 1.311C5.28 21 6.12 21 7.8 21h3.397c.667 0 1 0 1.318-.07a3 3 0 00.804-.302c.285-.156.536-.376 1.038-.816l5.004-4.378c.603-.527.905-.791 1.121-1.11.192-.283.334-.596.42-.927.098-.373.098-.774.098-1.575V7.8c0-1.68 0-2.52-.327-3.162a3 3 0 00-1.311-1.311C18.72 3 17.88 3 16.2 3z"
        stroke="currentColor"
        strokeWidth={1.5}
      />
    </svg>
  )
}
