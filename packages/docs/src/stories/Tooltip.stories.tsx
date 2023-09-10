import type { StoryObj, Meta } from '@storybook/react'
import { Button, Tooltip, TooltipProps } from '@guipmdev-ignite-ui/react'

export default {
  title: 'Feedback/Tooltip',
  component: Tooltip,
  args: {
    children: <Button css={{ margin: '$10 0' }}>Send</Button>,
    tooltipText: 'Button tooltip'
  },
  argTypes: {
    children: {
      control: {
        type: null,
      }
    },
  },
} as Meta<TooltipProps>

export const Primary: StoryObj<TooltipProps> = {}