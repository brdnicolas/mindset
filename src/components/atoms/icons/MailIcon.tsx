import * as React from 'react'
import { IconProps } from '@/components/atoms/icons/types'

export const MailIcon = ({ className }: IconProps) => {
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
        d="M20.971 8l-6.024 4.708c-1.054.82-1.581 1.23-2.163 1.387-.513.14-1.055.14-1.568 0-.582-.157-1.109-.567-2.163-1.387L3.03 8M7.8 19h8.4c1.68 0 2.52 0 3.162-.327a3 3 0 001.311-1.311C21 16.72 21 15.88 21 14.2V9.8c0-1.68 0-2.52-.327-3.162a3 3 0 00-1.311-1.311C18.72 5 17.88 5 16.2 5H7.8c-1.68 0-2.52 0-3.162.327a3 3 0 00-1.311 1.311C3 7.28 3 8.12 3 9.8v4.4c0 1.68 0 2.52.327 3.162a3 3 0 001.311 1.311C5.28 19 6.12 19 7.8 19z"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinejoin="round"
      />
    </svg>
  )
}
