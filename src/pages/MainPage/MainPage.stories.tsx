import type { Meta, StoryObj } from '@storybook/react'

import { MainPage } from './MainPage'

const meta = {
  title: 'Pages/MainPage',
  component: MainPage,
  decorators: [(Story) => <Story />],
} satisfies Meta<typeof MainPage>

export default meta

type Story = StoryObj<typeof MainPage>

export const Playground: Story = {}
