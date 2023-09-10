import * as Toast from '@radix-ui/react-toast'
import { keyframes, styled } from '../../styles'

const VIEWPORT_PADDING = '$8'

export const ToastViewport = styled(Toast.Viewport, {
  position: 'fixed',
  bottom: 0,
  right: 0,
  zIndex: Infinity,

  width: '100%',
  maxWidth: 360,

  margin: 0,

  padding: VIEWPORT_PADDING,
})

const hide = keyframes({
  '0%': { opacity: 1 },
  '100%': { opacity: 0 },
})

const slideIn = keyframes({
  from: { transform: `translateX(calc(100% + ${VIEWPORT_PADDING}))` },
  to: { transform: 'translateX(0)' },
})

const swipeOut = keyframes({
  from: { transform: 'translateX(var(--radix-toast-swipe-end-x))' },
  to: { transform: `translateX(calc(100% + ${VIEWPORT_PADDING}))` },
})

export const ToastRoot = styled(Toast.Root, {
  position: 'relative',

  display: 'flex',
  flexDirection: 'column',
  gap: '$1',

  backgroundColor: '$gray800',

  padding: '$3 $5',
  border: '1px solid $gray600',
  borderRadius: '$sm',

  color: '$white',
  fontFamily: '$default',
  lineHeight: '$base',

  '&[data-state="open"]': {
    animation: `${slideIn} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
  },

  '&[data-state="closed"]': {
    animation: `${hide} 100ms ease-in`,
  },

  '&[data-swipe="move"]': {
    transform: 'translateX(var(--radix-toast-swipe-move-x))',
  },

  '&[data-swipe="cancel"]': {
    transform: 'translateX(0)',
    transition: 'transform 200ms ease-out',
  },

  '&[data-swipe="end"]': {
    animation: `${swipeOut} 100ms ease-out`,
  },
})

export const ToastClose = styled(Toast.Close, {
  position: 'absolute',
  right: '$5',

  background: 'none',

  border: 'none',

  color: '$gray200',

  cursor: 'pointer',
})

export const ToastTitle = styled(Toast.Title, {
  width: 'calc(100% - $5 - $1)',

  fontSize: '$xl',
  fontWeight: 'bold',
})

export const ToastDescription = styled(Toast.Description, {
  color: '$gray200',
  fontSize: '$sm',
})
