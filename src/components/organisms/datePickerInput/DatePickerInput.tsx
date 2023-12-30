import clsx from 'clsx'
import './DatePickerInput.css'
import { Datepicker } from 'flowbite-react'
import { CustomTheme } from './datepicker.custom'
import { Input } from '@/components'

type DatePickerInputProps = {
  label?: string
  className?: string
  onChange: (date: Date) => void
  value: string
  show: boolean
  onClick?: () => void
}

export const DatePickerInput = ({ label, className, onChange, value, show, onClick }: DatePickerInputProps) => {
  return (
    <div className={clsx(className)}>
      <Input handleOnChange={() => {}} onClick={onClick} label={label} value={dayjs(value).format('DD MMM YYYY')} />
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
