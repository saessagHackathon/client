import type { Meta, StoryObj } from '@storybook/react'

import { ChatPage } from './ChatPage'

const meta = {
  title: 'Pages/ChatPage',
  component: ChatPage,
  decorators: [(Story) => <Story />],
} satisfies Meta<typeof ChatPage>

export default meta

type Story = StoryObj<typeof ChatPage>

export const Playground: Story = {}
