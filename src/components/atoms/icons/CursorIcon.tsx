import * as React from 'react'
import { IconProps } from '@/components/atoms/icons/types'

export const CursorIcon = ({ className }: IconProps) => {
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
        d="M6.242 4.934c-.825-.344-1.652.483-1.308 1.308l4.813 11.552c.341.82 1.501.821 1.845.003l1.678-3.992a1 1 0 01.535-.535l3.992-1.678c.818-.344.816-1.504-.003-1.845L6.242 4.934zM13.5 13.5L19 19"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
