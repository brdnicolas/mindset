import { Icon } from '@/components/atoms/icons/Icon'
import clsx from 'clsx'
import { createPortal } from 'react-dom'

type ToastProps = {
  type: 'error' | 'success'
}

export const Toast = ({ type }: ToastProps) => {
  const rootPortal = document.getElementById('toast-root')

  const toastLabel = () => {
    switch (type) {
      case 'success':
        return (
          <div className="flex items-center justify-center px-5 py-4">
            <Icon className="w-6 h-6 text-toast-success" name="check" />
            <p className="text-4 text-toast-success ml-2">Success !</p>
          </div>
        )
      default:
        return (
          <div className="flex items-center justify-center px-5 py-4">
            <Icon className="w-6 h-6 text-toast-error" name="close" />
            <p className="text-4 text-toast-error ml-2">Erreur...</p>
          </div>
        )
    }
  }
  if (!rootPortal) return <></>
  return createPortal(
    <div className="absolute bottom-12 left-[40vw]">
      <div
        className={clsx(
          'w-[340px] rounded-3 border-[1px] bg-gray-700',
          type === 'error' && 'border-toast-error',
          type === 'success' && 'border-toast-success'
        )}
      >
        {toastLabel()}
      </div>
    </div>,
    rootPortal
  )
}
