import type { Meta, StoryObj } from '@storybook/react'

import { MenuPage } from './MenuPage'

const meta = {
  title: 'Pages/MenuPage',
  component: MenuPage,
  decorators: [(Story) => <Story />],
} satisfies Meta<typeof MenuPage>

export default meta

type Story = StoryObj<typeof MenuPage>

export const Playground: Story = {}
