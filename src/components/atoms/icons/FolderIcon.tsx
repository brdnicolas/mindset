import * as React from 'react'
import { IconProps } from '@/components/atoms/icons/types'

export const FolderIcon = ({ className }: IconProps) => {
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
        d="M3 9.8v4.4c0 1.68 0 2.52.327 3.162a3 3 0 001.311 1.311C5.28 19 6.12 19 7.8 19h8.4c1.68 0 2.52 0 3.162-.327a3 3 0 001.311-1.311C21 16.72 21 15.88 21 14.2v-1.4c0-1.68 0-2.52-.327-3.162a3 3 0 00-1.311-1.311C18.72 8 17.88 8 16.2 8h-1.397c-.192 0-.288 0-.378-.005a3 3 0 01-2.21-1.183c-.055-.073-.109-.152-.215-.312s-.16-.24-.214-.312a3 3 0 00-2.21-1.183C9.484 5 9.388 5 9.196 5H7.8c-1.68 0-2.52 0-3.162.327a3 3 0 00-1.311 1.311C3 7.28 3 8.12 3 9.8z"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
      />
    </svg>
  )
}
