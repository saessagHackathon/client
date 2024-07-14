import type { Meta, StoryObj } from '@storybook/react'

import { LoadingDots } from './LoadingDots'

const meta = {
  title: 'LoadingDots',
  component: LoadingDots,
  args: {
    size: 'lg',
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof LoadingDots>

export default meta

type Story = StoryObj<typeof LoadingDots>

export const Playground: Story = {}
