import clsx from 'clsx'
import './DatePickerInput.scss'
import { Datepicker } from 'flowbite-react'
import dayjs from 'dayjs'
import { CUSTOM_DATEPICKER_THEME } from './datepicker.custom'
import { Input } from '@/components'
import { FULL_DISPLAY_DATE_FORMAT } from '@/shared/constants'
import { useEffect, useRef, useState } from 'react'

type DatePickerInputProps = {
  label?: string
  className?: string
  onChange: (date: Date) => void
  value: Date
  onClick?: () => void
}

export const DatePickerInput = ({ label, className, onChange, value, onClick }: DatePickerInputProps) => {
  const [isDatePickerDisplayed, setIsDatePickerDisplayed] = useState(false)

  const datePickerRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  const handleOnClick = () => {
    setIsDatePickerDisplayed((prevState) => !prevState)
    if (onClick) {
      onClick()
    }
  }

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      const isOutsideOfDatePicker = datePickerRef.current && !datePickerRef.current.contains(event.target as Node)
      const isOutsideOfInput = inputRef.current && !inputRef.current.contains(event.target as Node)

      if (isOutsideOfDatePicker && isOutsideOfInput) {
        setIsDatePickerDisplayed(false)
      }
    }

    document.addEventListener('mousedown', handleOutsideClick)
  }, [])

  const handleOnDateChangeByDatePicker = (value: Date) => {
    setIsDatePickerDisplayed(false)
    onChange(value)
  }

  return (
    <>
      <Input
        className={clsx(className)}
        ref={inputRef}
        onChange={() => {}}
        onClick={handleOnClick}
        label={label}
        value={dayjs(value).format(FULL_DISPLAY_DATE_FORMAT)}
      />
      <div className="w-fit" ref={datePickerRef}>
        <Datepicker
          language="fr-FR"
          labelTodayButton="Aujourd'hui"
          labelClearButton="Effacer"
          theme={CUSTOM_DATEPICKER_THEME}
          inline
          className={clsx(isDatePickerDisplayed ? 'block' : 'hidden')}
          onSelectedDateChanged={handleOnDateChangeByDatePicker}
        />
      </div>
    </>
  )
}
