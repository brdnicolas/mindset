import * as React from 'react'
import { IconProps } from '@/components/atoms/icons/types'

export const ActivityIcon = ({ className }: IconProps) => {
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
        d="M3 12h2.011c.36 0 .539 0 .697-.055.14-.048.268-.127.374-.23.12-.118.2-.278.36-.6L8.066 7.87c.597-1.195.896-1.793 1.251-1.934a1 1 0 01.93.102c.316.215.478.863.802 2.16l1.399 5.594c.456 1.824.684 2.736 1.046 2.948a1 1 0 001.012 0c.362-.212.59-1.124 1.046-2.948l.145-.58c.108-.432.163-.649.283-.81a1 1 0 01.413-.323c.186-.078.41-.078.856-.078H21"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
