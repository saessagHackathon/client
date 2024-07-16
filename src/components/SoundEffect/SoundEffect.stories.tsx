import type { Meta, StoryObj } from '@storybook/react'

import { SoundEffect } from './SoundEffect'

const meta = {
  title: 'Component/SoundEffect',
  component: SoundEffect,
  args: {
    size: 'lg',
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div
        style={{
          width: '800px',
          height: '800px',
        }}
      >
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof SoundEffect>

export default meta

type Story = StoryObj<typeof SoundEffect>

export const Playground: Story = {}
