import * as React from 'react'
import { IconProps } from '@/components/atoms/icons/types'

export const Camera2Icon = ({ className }: IconProps) => {
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
        d="M3 10.8c0-1.68 0-2.52.327-3.162a3 3 0 011.311-1.311C5.28 6 6.12 6 7.8 6h2.4c1.68 0 2.52 0 3.162.327a3 3 0 011.311 1.311C15 8.28 15 9.12 15 10.8v2.4c0 1.68 0 2.52-.327 3.162a3 3 0 01-1.311 1.311C12.72 18 11.88 18 10.2 18H7.8c-1.68 0-2.52 0-3.162-.327a3 3 0 01-1.311-1.311C3 15.72 3 14.88 3 13.2v-2.4zM15 12.146v-.292c0-.598 0-.896.076-1.164a2 2 0 01.575-.93c.205-.188.473-.322 1.007-.59 1.275-.637 1.913-.955 2.432-.932a2 2 0 011.657 1.024C21 9.716 21 10.43 21 11.854v.292c0 1.425 0 2.138-.253 2.592a2 2 0 01-1.657 1.024c-.52.023-1.157-.295-2.432-.933-.534-.267-.802-.4-1.007-.589a2 2 0 01-.575-.93C15 13.042 15 12.744 15 12.146z"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
      />
    </svg>
  )
}
