import { Icon } from '@/components/atoms/icons/Icon'
import clsx from 'clsx'
import { createPortal } from 'react-dom'

type NewApplicationModalProps = {
  show: boolean
  onClose: () => void
  children: React.ReactNode
  title: string
}

export const Modal = ({ show, onClose, children, title }: NewApplicationModalProps) => {
  const rootPortal = document.getElementById('modal-root')
  if (!rootPortal) return <></>
  return createPortal(
    <div
      className={clsx(
        show ? 'fixed' : 'hidden',
        'top-0 left-0 w-full h-full absolute z-first bg-gray-900/50 flex ',
        'laptop:items-center laptop:justify-center'
      )}
    >
      <div
        className={clsx(
          'w-full p-6 bg-gray-700 rounded-6  max-h-[75vh] fixed bottom-0',
          'laptop:w-[666px] laptop:block laptop:bottom-auto laptop:h-fit'
        )}
      >
        <header className="flex justify-between">
          <div className="w-4"></div>
          <p className="text-gray-100 text-3.5 font-medium">{title}</p>
          <div onClick={onClose} className="w-6 h-6">
            <Icon name="close" className="text-gray-100 cursor-pointer" />
          </div>
        </header>
        {children}
      </div>
    </div>,
    rootPortal
  )
}
