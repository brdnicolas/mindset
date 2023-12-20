import * as React from 'react'
import { IconProps } from '@/components/atoms/icons/types'

export const AirplayIcon = ({ className }: IconProps) => {
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
        d="M8.093 17.688l3.292-3.95c.212-.254.317-.38.443-.427a.5.5 0 01.344 0c.126.047.231.173.443.427l3.291 3.95c.35.418.524.628.526.805a.5.5 0 01-.185.396c-.138.111-.41.111-.955.111H8.708c-.545 0-.817 0-.955-.111a.5.5 0 01-.185-.396c.002-.177.177-.387.525-.805z"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6 17a3 3 0 01-3-3V9.8c0-1.68 0-2.52.327-3.162a3 3 0 011.311-1.311C5.28 5 6.12 5 7.8 5h8.4c1.68 0 2.52 0 3.162.327a3 3 0 011.311 1.311C21 7.28 21 8.12 21 9.8V14a3 3 0 01-3 3"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
      />
    </svg>
  )
}
