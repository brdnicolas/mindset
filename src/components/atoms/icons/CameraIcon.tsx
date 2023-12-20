import * as React from 'react'
import { IconProps } from '@/components/atoms/icons/types'

export const CameraIcon = ({ className }: IconProps) => {
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
        d="M21 14.2V9.606A2.606 2.606 0 0018.394 7a2.606 2.606 0 01-2.167-1.16L16 5.5c-.106-.16-.16-.24-.214-.312a3 3 0 00-2.21-1.183C13.484 4 13.388 4 13.196 4h-2.394c-.192 0-.288 0-.378.005a3 3 0 00-2.21 1.183c-.055.073-.109.152-.215.312l-.226.34A2.606 2.606 0 015.606 7 2.606 2.606 0 003 9.606V14.2c0 1.68 0 2.52.327 3.162a3 3 0 001.311 1.311C5.28 19 6.12 19 7.8 19h8.4c1.68 0 2.52 0 3.162-.327a3 3 0 001.311-1.311C21 16.72 21 15.88 21 14.2z"
        stroke="currentColor"
        strokeWidth={1.5}
      />
      <path d="M15.5 12.5a3.5 3.5 0 11-7 0 3.5 3.5 0 017 0z" stroke="currentColor" strokeWidth={1.5} />
    </svg>
  )
}
