import type { Preview } from '@storybook/react'
import { Layout } from '../src/components/Layout'

import '../src/index.css'
import { BrowserRouter } from 'react-router-dom'

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story) => (
      <BrowserRouter>
        <div
          style={{
            height: '852px',
            width: '393px',
            overflow: 'hidden',
            marginInline: 'auto',
          }}
        >
          <Story />
        </div>
      </BrowserRouter>
    ),
  ],
}

export default preview
