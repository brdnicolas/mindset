import * as React from 'react'
import { IconProps } from '@/components/atoms/icons/types'

export const DocumentIcon = ({ className }: IconProps) => {
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
        d="M9.8 21h4.4c1.68 0 2.52 0 3.162-.327a3 3 0 001.311-1.311C19 18.72 19 17.88 19 16.2v-5.212c0-.733 0-1.1-.083-1.446a3 3 0 00-.36-.867c-.185-.303-.444-.562-.963-1.08l-3.188-3.19c-.519-.518-.778-.777-1.081-.963a3.001 3.001 0 00-.867-.36C12.112 3 11.745 3 11.012 3H9.8c-1.68 0-2.52 0-3.162.327a3 3 0 00-1.311 1.311C5 5.28 5 6.12 5 7.8v8.4c0 1.68 0 2.52.327 3.162a3 3 0 001.311 1.311C7.28 21 8.12 21 9.8 21z"
        stroke="currentColor"
        strokeWidth={1.5}
      />
    </svg>
  )
}
