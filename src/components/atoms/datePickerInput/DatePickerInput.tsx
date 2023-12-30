import clsx from 'clsx'
import { Datepicker } from 'flowbite-react'
import './DatePickerInput.css'

type DatePickerInputProps = {
  label?: string
  className?: string
  onChange?: (date: Date) => void
}

export const DatePickerInput = ({ label, className, onChange }: DatePickerInputProps) => {
  return (
    <div className={clsx(className)}>
      <p className="text-gray-500 text-3.5 mb-3">{label}</p>
      <Datepicker datepicker-format="yyyy-mm-dd" onSelectedDateChanged={onChange} className="date-picker-input" />
    </div>
  )
}
