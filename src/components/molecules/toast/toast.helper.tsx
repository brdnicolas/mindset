import { Toast, ToastProps } from '@/components/molecules/toast/Toast'
import { render } from 'react-dom'

export const alert = ({ type, message }: ToastProps) => {
  const toastRoot = document.getElementById('toast-root')
  render(<Toast type={type} message={message} />, toastRoot)
}
