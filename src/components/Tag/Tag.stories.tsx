import type { Meta, StoryObj } from '@storybook/react'

import { Tag } from './Tag'

const meta = {
  title: 'Tag',
  component: Tag,
  tags: ['autodocs'],
  args: {
    children: 'Tag',
    fill: false,
  },
  argTypes: {
    children: { control: 'text', description: '태그 텍스트' },
    fill: {
      control: { type: 'boolean' },
      description: '태그 채움',
    },
  },
} satisfies Meta<typeof Tag>

export default meta

type Story = StoryObj<typeof Tag>

export const Playground: Story = {}
