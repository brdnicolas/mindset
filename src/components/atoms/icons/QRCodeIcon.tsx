import * as React from 'react'
import { IconProps } from '@/components/atoms/icons/types'

export const QRCodeIcon = ({ className }: IconProps) => {
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
        d="M3 6.75c0-.697 0-1.045.058-1.335a3 3 0 012.357-2.357C5.705 3 6.053 3 6.75 3s1.045 0 1.335.058a3 3 0 012.357 2.357c.058.29.058.638.058 1.335s0 1.045-.058 1.335a3 3 0 01-2.357 2.357c-.29.058-.638.058-1.335.058s-1.045 0-1.335-.058a3 3 0 01-2.357-2.357C3 7.795 3 7.447 3 6.75zM3 17.25c0-.697 0-1.046.058-1.335a3 3 0 012.357-2.357c.29-.058.638-.058 1.335-.058s1.045 0 1.335.058a3 3 0 012.357 2.357c.058.29.058.638.058 1.335s0 1.046-.058 1.335a3 3 0 01-2.357 2.357C7.795 21 7.447 21 6.75 21s-1.045 0-1.335-.058a3 3 0 01-2.357-2.357C3 18.295 3 17.947 3 17.25zM13.5 6.75c0-.697 0-1.045.058-1.335a3 3 0 012.357-2.357C16.205 3 16.553 3 17.25 3s1.046 0 1.335.058a3 3 0 012.357 2.357c.058.29.058.638.058 1.335s0 1.045-.058 1.335a3 3 0 01-2.357 2.357c-.29.058-.638.058-1.335.058s-1.046 0-1.335-.058a3 3 0 01-2.357-2.357c-.058-.29-.058-.638-.058-1.335z"
        stroke="currentColor"
        strokeWidth={1.5}
      />
      <path
        d="M13.5 17.5h2m5.5 0h-2m0 0v-4m0 4h-3.5m0 0V21m1-6h-2m3.5 5h2"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
