import type { Meta, StoryObj } from '@storybook/react'

import { Chat } from './Chat'

const meta = {
  title: 'Chat',
  component: Chat,
  args: {
    children: '채팅 내용',
    type: 'opposite',
  },
  argTypes: {
    type: {
      options: ['opposite', 'me'],
      control: { type: 'select' },
      description: '채팅 타입',
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Chat>

export default meta

type Story = StoryObj<typeof Chat>

export const Playground: Story = {}
