import * as React from 'react'
import { IconProps } from '@/components/atoms/icons/types'

export const GearIcon = ({ className }: IconProps) => {
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
        d="M12 21a2.234 2.234 0 01-2.22-1.988l-.093-.825c-.046-.421-.322-.778-.689-.99-.367-.213-.81-.271-1.2-.1l-.76.332a2.234 2.234 0 01-2.221-3.846l.67-.493C5.827 12.84 6 12.424 6 12c0-.424-.172-.839-.514-1.09l-.67-.493a2.235 2.235 0 012.222-3.846l.76.333c.39.17.833.112 1.2-.1.367-.213.643-.57.69-.991l.091-.825a2.235 2.235 0 014.442 0l.092.825c.046.421.322.778.689.99.367.213.81.271 1.2.1l.76-.332a2.235 2.235 0 012.221 3.846l-.67.493c-.34.251-.513.666-.513 1.09 0 .424.172.839.514 1.09l.67.493a2.234 2.234 0 01-2.222 3.846l-.76-.333c-.39-.17-.833-.112-1.2.1-.367.213-.643.57-.69.991l-.091.825A2.235 2.235 0 0112 21z"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinejoin="round"
      />
      <path d="M14 12a2 2 0 11-4 0 2 2 0 014 0z" stroke="currentColor" strokeWidth={1.5} />
    </svg>
  )
}
