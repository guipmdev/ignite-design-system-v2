import * as RadixToast from '@radix-ui/react-toast'
import { ComponentProps } from 'react'
import {
  ToastClose,
  ToastRoot,
  ToastTitle,
  ToastDescription,
  ToastViewport,
} from './styles'
import { X } from 'phosphor-react'

export interface ToastProps extends ComponentProps<typeof ToastRoot> {
  toastTitle?: string
  toastDescription: string
}

export function Toast({ toastTitle, toastDescription, ...props }: ToastProps) {
  return (
    <RadixToast.Provider swipeDirection="right">
      <ToastRoot {...props}>
        {!!toastTitle && <ToastTitle>{toastTitle}</ToastTitle>}
        <ToastDescription>{toastDescription}</ToastDescription>

        <ToastClose>
          <X size={20} />
        </ToastClose>
      </ToastRoot>

      <ToastViewport />
    </RadixToast.Provider>
  )
}
