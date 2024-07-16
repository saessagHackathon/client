import type { Meta, StoryObj } from '@storybook/react'

import { StorePage } from './StorePage'

const meta = {
  title: 'Pages/StorePage',
  component: StorePage,
  decorators: [(Story) => <Story />],
} satisfies Meta<typeof StorePage>

export default meta

type Story = StoryObj<typeof StorePage>

export const Playground: Story = {}
