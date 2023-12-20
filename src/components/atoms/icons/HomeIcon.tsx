import * as React from 'react'
import { IconProps } from '@/components/atoms/icons/types'

export const HomeIcon = ({ className }: IconProps) => {
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
        d="M3 11.569c0-.94 0-1.409.13-1.835A3 3 0 013.681 8.7c.283-.345.674-.605 1.455-1.126l4.2-2.8c.963-.642 1.444-.962 1.964-1.087a3 3 0 011.398 0c.52.125 1.001.445 1.964 1.087l4.2 2.8c.781.521 1.172.781 1.455 1.126.25.304.438.655.552 1.033.13.426.13.896.13 1.835V16.2c0 1.68 0 2.52-.327 3.162a3 3 0 01-1.311 1.311C18.72 21 17.88 21 16.2 21H7.8c-1.68 0-2.52 0-3.162-.327a3 3 0 01-1.311-1.311C3 18.72 3 17.88 3 16.2v-4.631z"
        stroke="currentColor"
        strokeWidth={1.5}
      />
      <path d="M9 15a3 3 0 116 0v6H9v-6z" stroke="currentColor" strokeWidth={1.5} />
    </svg>
  )
}
