import * as React from 'react'
import { IconProps } from '@/components/atoms/icons/types'

export const BookmarkIcon = ({ className }: IconProps) => {
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
        d="M13.2 3h-2.4c-1.68 0-2.52 0-3.162.327a3 3 0 00-1.311 1.311C6 5.28 6 6.12 6 7.8v10c0 1.03 0 1.545.213 1.816a1 1 0 00.766.384c.345.007.757-.302 1.581-.92l.56-.42c1.033-.775 1.55-1.162 2.116-1.311a3.002 3.002 0 011.528 0c.567.15 1.083.536 2.116 1.311l.56.42c.824.618 1.236.927 1.58.92a1 1 0 00.767-.384C18 19.345 18 18.83 18 17.8v-10c0-1.68 0-2.52-.327-3.162a3 3 0 00-1.311-1.311C15.72 3 14.88 3 13.2 3z"
        stroke="currentColor"
        strokeWidth={1.5}
      />
    </svg>
  )
}
