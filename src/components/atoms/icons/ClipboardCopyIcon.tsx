import * as React from 'react'
import { IconProps } from '@/components/atoms/icons/types'

export const ClipboardCopyIcon = ({ className }: IconProps) => {
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
        d="M8 5a2 2 0 002 2h4a2 2 0 002-2M8 5a2 2 0 012-2h4a2 2 0 012 2M8 5a3 3 0 00-3 3v8.2c0 1.68 0 2.52.327 3.162a3 3 0 001.311 1.311C7.28 21 8.12 21 9.8 21H15c.93 0 1.395 0 1.776-.102a3 3 0 002.122-2.122C19 18.395 19 17.93 19 17M16 5a3 3 0 013 3v3"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
      />
      <path
        d="M12 18l-.315-.252c-1.601-1.281-2.402-1.922-2.692-2.696a3 3 0 010-2.104c.29-.774 1.09-1.415 2.692-2.696L12 10M9 14h10"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
