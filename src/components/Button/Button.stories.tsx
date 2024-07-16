import type { Meta, StoryObj } from '@storybook/react'

import { Button } from './Button'

const meta = {
  title: 'Component/Button',
  component: Button,
  tags: ['autodocs'],
  args: {
    children: 'Button',
    full: false,
    size: 'sm',
  },
  argTypes: {
    children: { control: 'text', description: '버튼 텍스트' },
    size: {
      options: ['lg', 'md', 'sm'],
      control: { type: 'select' },
      description: '버튼 크기',
    },
    full: {
      control: { type: 'boolean' },
      description: '버튼 너비',
    },
  },
} satisfies Meta<typeof Button>

export default meta

type Story = StoryObj<typeof Button>

export const Playground: Story = {}
