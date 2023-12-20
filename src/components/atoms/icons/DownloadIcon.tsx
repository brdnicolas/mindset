import * as React from 'react'
import { IconProps } from '@/components/atoms/icons/types'

export const DownloadIcon = ({ className }: IconProps) => {
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
        d="M12 4v12.5M18 12l-2.606 2.606c-1.188 1.188-1.782 1.782-2.467 2.004a3 3 0 01-1.854 0c-.685-.222-1.28-.816-2.467-2.004L6 12"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3 15v.2c0 1.68 0 2.52.327 3.162a3 3 0 001.311 1.311C5.28 20 6.12 20 7.8 20h8.4c1.68 0 2.52 0 3.162-.327a3 3 0 001.311-1.311C21 17.72 21 16.88 21 15.2V15"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
      />
    </svg>
  )
}
