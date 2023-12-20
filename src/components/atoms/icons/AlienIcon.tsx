import * as React from 'react'
import { IconProps } from '@/components/atoms/icons/types'

export const AlienIcon = ({ className }: IconProps) => {
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
        d="M20 10.615C20 14.821 14.91 21 12 21s-8-6.179-8-10.385c0-2.02.843-3.956 2.343-5.385C7.843 3.802 9.878 3 12 3s4.157.802 5.657 2.23C19.157 6.66 20 8.596 20 10.615z"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.2 14a3.37 3.37 0 01-2.263-.852C7.337 12.602 7 11.862 7 11.09v-.364c0-.193.084-.378.234-.514A.842.842 0 017.8 10a3.37 3.37 0 012.263.852c.6.546.937 1.286.937 2.057v.364a.696.696 0 01-.234.514.842.842 0 01-.566.213zM16.2 10c.212 0 .416.077.566.213.15.136.234.321.234.514v.364c0 .771-.337 1.511-.937 2.057A3.37 3.37 0 0113.8 14a.842.842 0 01-.566-.213.696.696 0 01-.234-.514v-.364c0-.771.337-1.511.937-2.057A3.37 3.37 0 0116.2 10zM10 17h4"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
