import clsx from 'clsx'
import './DatePickerInput.css'
import { Input } from '../../atoms/input/Input'
import { Datepicker } from 'flowbite-react'
import dayjs from 'dayjs'
import { CustomTheme } from './datepicker.custom'

type DatePickerInputProps = {
  label?: string
  className?: string
  onChange?: any
  value: string
  show: boolean
  onClick?: any
}

export const DatePickerInput = ({ label, className, onChange, value, show, onClick }: DatePickerInputProps) => {
  return (
    <div className={clsx(className)}>
      <Input onClick={onClick} label={label} value={dayjs(value).format('DD MMM YYYY')} />
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
