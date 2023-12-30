import clsx from 'clsx'
import './DatePickerInput.css'
import { Input } from '../input/Input'
import { CustomFlowbiteTheme, Datepicker } from 'flowbite-react'
import dayjs from 'dayjs'

type DatePickerInputProps = {
  label?: string
  className?: string
  onChange?: any
  value: string
  show: boolean
  onClick?: any
}

const CustomTheme: CustomFlowbiteTheme['datepicker'] = {
  root: {
    base: 'relative'
  },
  popup: {
    root: {
      base: 'absolute top-10 z-50 block pt-2',
      inline: 'relative top-0 z-auto',
      inner: 'inline-block rounded-2 p-4 shadow-lg bg-gray-900'
    },
    header: {
      base: '',
      title: 'px-2 py-3 text-center font-semibold text-white',
      selectors: {
        base: 'flex justify-between mb-2',
        button: {
          base: 'text-4 rounded-2 text-white bg-gray-900 font-semibold py-2.5 px-5 hover:bg-gray-600 view-switch',
          prev: '',
          next: '',
          view: ''
        }
      }
    },
    view: {
      base: 'p-1'
    },
    footer: {
      base: 'flex mt-2 space-x-2',
      button: {
        base: 'w-full rounded-2 px-5 py-2 text-center text-4 font-medium',
        today: 'bg-gray-700 text-white hover:bg-gray-600',
        clear: 'border border-gray-300 bg-white text-gray-900 hover:bg-gray-100'
      }
    }
  },
  views: {
    days: {
      header: {
        base: 'grid grid-cols-7 mb-1',
        title: 'dow h-6 text-center text-4 font-medium leading-6 text-gray-500'
      },
      items: {
        base: 'grid w-full grid-cols-7',
        item: {
          base: 'block flex-1 cursor-pointer rounded-2 border-0 text-center text-4 font-semibold leading-9 text-white hover:bg-gray-500 ',
          selected: 'bg-gray-700 text-white hover:bg-gray-600',
          disabled: 'text-gray-500'
        }
      }
    },
    months: {
      items: {
        base: 'grid w-full grid-cols-4',
        item: {
          base: 'block flex-1 cursor-pointer rounded-2 border-0 text-center text-4 font-semibold leading-9 text-white hover:bg-gray-500 ',
          selected: 'bg-gray-700 text-white hover:bg-gray-600',
          disabled: 'text-gray-500'
        }
      }
    },
    years: {
      items: {
        base: 'grid w-full grid-cols-4',
        item: {
          base: 'block flex-1 cursor-pointer rounded-2 border-0 text-center text-4 font-semibold leading-9 hover:bg-gray-500 text-white',
          selected: 'bg-gray-700 text-white hover:bg-gray-600',
          disabled: 'text-gray-500'
        }
      }
    },
    decades: {
      items: {
        base: 'grid w-full grid-cols-4',
        item: {
          base: 'block flex-1 cursor-pointer rounded-2 border-0 text-center text-4 font-semibold leading-9  hover:bg-gray-100 text-white',
          selected: 'bg-gray-700 text-white hover:bg-gray-600',
          disabled: 'text-gray-700'
        }
      }
    }
  }
}

export const DatePickerInput = ({ label, className, onChange, value, show, onClick }: DatePickerInputProps) => {
  return (
    <div className={clsx(className)}>
      <Input onClick={onClick} label={label} value={dayjs(value).format('DD MMM YYYY')} />
      <Datepicker
        labelTodayButton="Aujourd'hui"
        labelClearButton="Effacer"
        theme={CustomTheme}
        inline
        className={clsx(show ? 'block' : 'hidden')}
        autoHide={show}
        onSelectedDateChanged={onChange}
      />
    </div>
  )
}
