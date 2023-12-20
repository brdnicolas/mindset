import * as React from 'react'
import { IconProps } from '@/components/atoms/icons/types'

export const MailOpenIcon = ({ className }: IconProps) => {
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
        d="M20.988 9l-5.8 5.165c-1.127 1.003-1.692 1.505-2.328 1.695a3 3 0 01-1.72 0c-.636-.19-1.2-.692-2.329-1.695L3.011 9m7.04-5.134l-4.2 1.867c-1.032.459-1.548.688-1.926 1.05a3 3 0 00-.747 1.15C3 8.426 3 8.99 3 10.119V16.2c0 1.68 0 2.52.327 3.162a3 3 0 001.311 1.311C5.28 21 6.12 21 7.8 21h8.4c1.68 0 2.52 0 3.162-.327a3 3 0 001.311-1.311C21 18.72 21 17.88 21 16.2v-6.08c0-1.13 0-1.694-.178-2.187a3 3 0 00-.747-1.15c-.378-.362-.894-.591-1.925-1.05l-4.2-1.867c-.718-.319-1.077-.478-1.45-.541a3 3 0 00-1 0c-.373.063-.732.222-1.45.541z"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
