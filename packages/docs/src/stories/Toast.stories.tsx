import type { StoryObj, Meta } from '@storybook/react'
import { Box, Button, Toast, ToastProps } from '@guipmdev-ignite-ui/react'
import { useEffect, useRef, useState } from 'react'

const ToastDemo = (props: ToastProps) => {
  const [open, setOpen] = useState(false)

  const timerRef = useRef(0)

  useEffect(() => {
    return () => clearTimeout(timerRef.current)
  }, [])

  return (
    <>
      <Button
        onClick={() => {
          setOpen(false)
          window.clearTimeout(timerRef.current)
          timerRef.current = window.setTimeout(() => {
            setOpen(true)
          }, 10)
        }}
      >
        Activate toast
      </Button>
      
      <Toast open={open} onOpenChange={setOpen} {...props} />
    </>
  )
}

export default {
  title: 'Feedback/Toast',
  component: ToastDemo,
  decorators: [
    (Story) => {
      return (
        <Box css={{ display: 'flex' }}>
          {Story()}
        </Box>
      )
    },
  ],
} as Meta<ToastProps>

export const Primary: StoryObj<ToastProps> = {
  args: {
    toastTitle: "Optional toast title",
    toastDescription: "Toast description",
  },
}

export const WithoutTitle: StoryObj<ToastProps> = {
  args: {
    toastDescription: "Toast description",
  },
}