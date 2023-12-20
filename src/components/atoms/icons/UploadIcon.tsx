import * as React from 'react'
import { IconProps } from '@/components/atoms/icons/types'

export const UploadIcon = ({ className }: IconProps) => {
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
        d="M3 15v.2c0 1.68 0 2.52.327 3.162a3 3 0 001.311 1.311C5.28 20 6.12 20 7.8 20h8.4c1.68 0 2.52 0 3.162-.327a3 3 0 001.311-1.311C21 17.72 21 16.88 21 15.2V15"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
      />
      <path
        d="M12 5v12M18 10l-2.356-2.748c-1.255-1.465-1.883-2.197-2.63-2.466a3 3 0 00-2.028 0c-.747.269-1.375 1.001-2.63 2.466L6 10"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
