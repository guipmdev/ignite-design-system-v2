import * as Tooltip from '@radix-ui/react-tooltip'
import { keyframes, styled } from '../../styles'

const slideUpAndFade = keyframes({
  '0%': { opacity: 0, transform: 'translateY(2px)' },
  '100%': { opacity: 1, transform: 'translateY(0)' },
})

const slideRightAndFade = keyframes({
  '0%': { opacity: 0, transform: 'translateX(-2px)' },
  '100%': { opacity: 1, transform: 'translateX(0)' },
})

const slideDownAndFade = keyframes({
  '0%': { opacity: 0, transform: 'translateY(-2px)' },
  '100%': { opacity: 1, transform: 'translateY(0)' },
})

const slideLeftAndFade = keyframes({
  '0%': { opacity: 0, transform: 'translateX(2px)' },
  '100%': { opacity: 1, transform: 'translateX(0)' },
})

export const TooltipContent = styled(Tooltip.Content, {
  backgroundColor: '$gray900',

  padding: '$4 $3',
  borderRadius: '$sm',

  color: '$gray100',
  fontFamily: '$default',
  fontSize: '$sm',
  fontWeight: '$medium',

  boxShadow: '4px 16px 24px 0 rgb(0 0 0 / 25%)',

  userSelect: 'none',

  animation: 'cubic-bezier(0.16, 1, 0.3, 1) 0.4s',

  '&[data-state="delayed-open"]': {
    '&[data-side="top"]': {
      animationName: slideDownAndFade,
    },

    '&[data-side="right"]': {
      animationName: slideLeftAndFade,
    },

    '&[data-side="bottom"]': {
      animationName: slideUpAndFade,
    },

    '&[data-side="left"]': {
      animationName: slideRightAndFade,
    },
  },
})

export const TooltipArrow = styled(Tooltip.Arrow, {
  fill: '$gray900',
})
