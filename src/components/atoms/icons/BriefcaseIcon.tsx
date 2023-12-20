import * as React from 'react'
import { IconProps } from '@/components/atoms/icons/types'

export const BriefcaseIcon = ({ className }: IconProps) => {
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
        d="M15 21V6a3 3 0 10-6 0v15m12-8.5v3.7c0 1.68 0 2.52-.327 3.162a3 3 0 01-1.311 1.311C18.72 21 17.88 21 16.2 21H7.8c-1.68 0-2.52 0-3.162-.327a3 3 0 01-1.311-1.311C3 18.72 3 17.88 3 16.2v-3.7c0-1.398 0-2.097.228-2.648a3 3 0 011.624-1.624C5.403 8 6.102 8 7.5 8h9c1.398 0 2.097 0 2.648.228a3 3 0 011.624 1.624c.228.551.228 1.25.228 2.648z"
        stroke="currentColor"
        strokeWidth={1.5}
      />
    </svg>
  )
}
