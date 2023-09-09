import type { StoryObj, Meta } from '@storybook/react'
import { Button, Tooltip, TooltipProps } from '@guipmdev-ignite-ui/react'

export default {
  title: 'Form/Tooltip',
  component: Tooltip,
  args: {
    children: <Button>Send</Button>,
    tooltipText: 'Button tooltip'
  },
  argTypes: {
    children: {
      control: {
        type: null,
      }
    },
    tooltipText: {
      control: {
        type: 'text',
      }
    }
  },
} as Meta<TooltipProps>

export const Primary: StoryObj<TooltipProps> = {}