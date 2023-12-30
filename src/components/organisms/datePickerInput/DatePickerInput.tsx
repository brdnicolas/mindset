import clsx from 'clsx'
import './DatePickerInput.scss'
import { Input } from '../../atoms/input/Input'
import { Datepicker } from 'flowbite-react'
import { CustomTheme } from './datepicker.custom'

type DatePickerInputProps = {
  label?: string
  className?: string
  onChange?: any
  value: string
  show: boolean
  onClick?: () => void
}

export const DatePickerInput = ({ label, className, onChange, value, show, onClick }: DatePickerInputProps) => {
  return (
    <div className={clsx(className)}>
      <Input onClick={onClick} label={label} value={value} />
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
