import clsx from 'clsx'
import { Datepicker } from 'flowbite-react'
import './DatePickerInput.css'

type DatePickerInputProps = {
  label?: string
  className?: string
}

export const DatePickerInput = ({ label, className }: DatePickerInputProps) => {
  return (
    <div className={clsx(className)}>
      <p className="text-gray-500 text-3.5 mb-3">{label}</p>
      <Datepicker className="date-picker-input" />
    </div>
  )
}
