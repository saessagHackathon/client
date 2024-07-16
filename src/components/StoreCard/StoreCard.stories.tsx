import type { Meta, StoryObj } from '@storybook/react'

import { StoreCard } from './StoreCard'

const meta = {
  title: 'Component/StoreCard',
  component: StoreCard,
  args: {
    logo: 'https://logos-world.net/wp-content/uploads/2020/04/McDonalds-Logo.png',
    name: '맥도날드',
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div className="h-[400px] w-[393px]">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof StoreCard>

export default meta

type Story = StoryObj<typeof StoreCard>

export const Playground: Story = {}
