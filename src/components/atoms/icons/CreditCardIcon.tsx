import * as React from 'react'
import { IconProps } from '@/components/atoms/icons/types'

export const CreditCardIcon = ({ className }: IconProps) => {
  return (
    <svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path d="M6 15h5" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" />
      <path
        d="M3 9.8c0-1.68 0-2.52.327-3.162a3 3 0 011.311-1.311C5.28 5 6.12 5 7.8 5h8.4c1.68 0 2.52 0 3.162.327a3 3 0 011.311 1.311C21 7.28 21 8.12 21 9.8v4.4c0 1.68 0 2.52-.327 3.162a3 3 0 01-1.311 1.311C18.72 19 17.88 19 16.2 19H7.8c-1.68 0-2.52 0-3.162-.327a3 3 0 01-1.311-1.311C3 16.72 3 15.88 3 14.2V9.8z"
        stroke="currentColor"
        strokeWidth={1.5}
      />
      <path d="M3 10h18" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}
