import { CustomFlowbiteTheme } from 'flowbite-react'

export const CUSTOM_DATEPICKER_THEME: CustomFlowbiteTheme['datepicker'] = {
  root: {
    base: 'relative w-fit'
  },
  popup: {
    root: {
      base: 'absolute top-10 z-50 block pt-2',
      inline: 'relative top-0 z-auto w-fit',
      inner: 'inline-block rounded-2 p-4 shadow-lg bg-gray-800 border-[1px] border-gray-600'
    },
    header: {
      base: '',
      title: 'px-2 py-3 text-center font-semibold text-gray-50',
      selectors: {
        base: 'flex justify-between mb-2',
        button: {
          base: 'text-4 rounded-2 text-gray-50 bg-gray-900 font-semibold py-2.5 px-5 hover:bg-gray-600 view-switch',
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
        today: 'bg-gray-800 font-normal text-gray-50 border-[1px] border-gray-600 hover:bg-gray-700',
        clear: 'border font-normal border-gray-300 bg-white text-gray-900 hover:bg-gray-100'
      }
    }
  },
  views: {
    days: {
      header: {
        base: 'grid grid-cols-7 mb-1',
        title: 'h-6 text-center text-4 font-medium leading-6 text-gray-500'
      },
      items: {
        base: 'grid w-full grid-cols-7',
        item: {
          base: 'block flex-1 cursor-pointer rounded-2 border-0 text-center text-4 font-semibold leading-9 text-gray-50 hover:bg-gray-500 ',
          selected: 'bg-gray-600 text-gray-50 hover:bg-gray-600',
          disabled: 'text-gray-300'
        }
      }
    },
    months: {
      items: {
        base: 'grid w-full grid-cols-4',
        item: {
          base: 'block flex-1 cursor-pointer rounded-2 border-0 text-center text-4 font-semibold leading-9 text-gray-100 hover:bg-gray-500 ',
          selected: 'bg-gray-700 text-gray-50 hover:bg-gray-600',
          disabled: 'text-gray-300'
        }
      }
    },
    years: {
      items: {
        base: 'grid w-full grid-cols-4',
        item: {
          base: 'block flex-1 cursor-pointer rounded-2 border-0 text-center text-4 font-semibold leading-9 hover:bg-gray-500 text-gray-50',
          selected: 'bg-gray-700 text-gray-50 hover:bg-gray-600',
          disabled: 'text-gray-300'
        }
      }
    },
    decades: {
      items: {
        base: 'grid w-full grid-cols-4',
        item: {
          base: 'block flex-1 cursor-pointer rounded-2 border-0 text-center text-4 font-semibold leading-9  hover:bg-gray-100 text-gray-50',
          selected: 'bg-gray-700 text-gray-50 hover:bg-gray-600',
          disabled: 'text-gray-300'
        }
      }
    }
  }
}
