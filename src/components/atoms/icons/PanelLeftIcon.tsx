import * as React from 'react'
import { IconProps } from '@/components/atoms/icons/types'

export const PanelLeftIcon = ({ className }: IconProps) => {
  return (
    <svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <rect x={3} y={3} width={18} height={18} rx={3} stroke="currentColor" strokeWidth={1.5} />
      <path d="M10 3v18" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}
