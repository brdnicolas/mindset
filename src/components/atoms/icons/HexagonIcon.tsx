import * as React from 'react'
import { IconProps } from '@/components/atoms/icons/types'

export const HexagonIcon = ({ className }: IconProps) => {
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
        d="M4 9.774c0-.648 0-.971.091-1.264a2 2 0 01.39-.703c.2-.232.474-.404 1.023-.747l4.8-3c.615-.385.923-.577 1.253-.652a2 2 0 01.886 0c.33.075.638.267 1.253.652l4.8 3c.549.343.824.515 1.023.747a2 2 0 01.39.703c.091.293.091.616.091 1.264v4.452c0 .648 0 .971-.091 1.264a2 2 0 01-.39.703c-.2.232-.474.404-1.023.747l-4.8 3c-.615.385-.923.577-1.253.652a2 2 0 01-.886 0c-.33-.075-.638-.267-1.253-.652l-4.8-3c-.549-.343-.823-.515-1.023-.747a2 2 0 01-.39-.703C4 15.197 4 14.874 4 14.226V9.774z"
        stroke="currentColor"
        strokeWidth={1.5}
      />
    </svg>
  )
}
