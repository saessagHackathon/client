import type { Meta, StoryObj } from '@storybook/react'

import { Microphone } from './Microphone'

const meta = {
  title: 'Microphone',
  component: Microphone,
  args: {
    size: 'lg',
  },
  argTypes: {
    size: {
      options: ['lg', 'md'],
      control: { type: 'select' },
      description: '마이크 크기',
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Microphone>

export default meta

type Story = StoryObj<typeof Microphone>

export const Playground: Story = {}
