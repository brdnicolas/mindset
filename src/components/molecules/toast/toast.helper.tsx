import { Toast, ToastProps } from '@/components/molecules/toast/Toast'
import { render, unmountComponentAtNode } from 'react-dom'

export const alert = ({ type, message }: ToastProps) => {
  const toastRoot = document.getElementById('toast-root')
  if (toastRoot) {
    const toastComponent = <Toast type={type} message={message} />

    render(toastComponent, toastRoot)

    setTimeout(() => {
      unmountComponentAtNode(toastRoot)
    }, 3000)
  }
}
