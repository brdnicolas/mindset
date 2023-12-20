import * as React from 'react'
import { IconProps } from '@/components/atoms/icons/types'

export const InboxIcon = ({ className }: IconProps) => {
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
        d="M4.165 7.759c.298-1.341.447-2.012.807-2.513a3 3 0 011.25-1.003C6.79 4 7.478 4 8.85 4h6.3c1.373 0 2.06 0 2.627.243a3 3 0 011.25 1.003c.361.501.51 1.172.808 2.513l1.05 4.727c.043.192.065.289.08.386.013.086.023.173.029.26.006.099.006.198.006.395V15.2c0 1.68 0 2.52-.327 3.162a3 3 0 01-1.311 1.311C18.72 20 17.88 20 16.2 20H7.8c-1.68 0-2.52 0-3.162-.327a3 3 0 01-1.311-1.311C3 17.72 3 16.88 3 15.2v-1.673c0-.197 0-.296.006-.394.006-.088.016-.175.03-.261.014-.097.035-.194.078-.386l1.05-4.727z"
        stroke="currentColor"
        strokeWidth={1.5}
      />
      <path
        d="M3 13h4.586a1 1 0 01.707.293l1.414 1.414a1 1 0 00.707.293h3.172a1 1 0 00.707-.293l1.414-1.414a1 1 0 01.707-.293H21"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinejoin="round"
      />
    </svg>
  )
}
