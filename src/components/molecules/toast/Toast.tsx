import { Icon } from '@/components/atoms/icons/Icon'
import clsx from 'clsx'
import { createPortal } from 'react-dom'

export type ToastProps = {
  type: 'error' | 'success'
  message: string
}

export const Toast = ({ type, message }: ToastProps) => {
  const ICON_CLASS_NAME = 'w-6 h-6'
  const MESSAGE_CLASS_NAME = 'text-4 ml-2'

  const toastLabel = () => {
    switch (type) {
      case 'success':
        return (
          <>
            <Icon className={clsx(ICON_CLASS_NAME, 'text-toast-success')} name="check" />
            <p className={clsx(MESSAGE_CLASS_NAME, 'text-toast-success')}>{message}</p>
          </>
        )
      default:
        return (
          <>
            <Icon className={clsx(ICON_CLASS_NAME, 'text-toast-error')} name="close" />
            <p className={clsx(MESSAGE_CLASS_NAME, 'text-toast-error')}>{message}</p>
          </>
        )
    }
  }

  return createPortal(
    <div className="fixed bottom-12 left-1/2 -translate-x-1/2">
      <div
        className={clsx(
          'max-w-[90vw] rounded-3 border-[1px] bg-gray-700',
          type === 'error' && 'border-toast-error',
          type === 'success' && 'border-toast-success'
        )}
      >
        <div className="flex items-center justify-center px-5 py-4">{toastLabel()}</div>
      </div>
    </div>,
    document.body
  )
}
