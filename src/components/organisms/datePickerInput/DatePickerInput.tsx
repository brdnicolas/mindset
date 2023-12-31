import clsx from 'clsx'
import './DatePickerInput.scss'
import { Datepicker } from 'flowbite-react'
import dayjs from 'dayjs'
import { CustomTheme } from './datepicker.custom'
import { Input } from '@/components'
import { FULL_DISPLAY_DATE_FORMAT } from '@/shared/constants'

type DatePickerInputProps = {
  label?: string
  className?: string
  onChange: (date: Date) => void
  value: Date
  show: boolean
  onClick?: () => void
}

export const DatePickerInput = ({ label, className, onChange, value, show, onClick }: DatePickerInputProps) => {
  return (
    <div className={clsx(className)}>
      <Input
        handleOnChange={() => {}}
        onClick={onClick}
        label={label}
        value={dayjs(value).format(FULL_DISPLAY_DATE_FORMAT)}
      />
      <Datepicker
        language="fr-FR"
        labelTodayButton="Aujourd'hui"
        labelClearButton="Effacer"
        theme={CustomTheme}
        inline
        className={clsx(show ? 'block' : 'hidden')}
        onSelectedDateChanged={onChange}
      />
    </div>
  )
}
