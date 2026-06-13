import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { InfoCard } from './InfoCard'

const meta = {
  title: 'Molecules/InfoCard',
  component: InfoCard,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
Small info card linking to the Swagger Petstore API docs. Used at the bottom of the sidebar.

## Usage
\`\`\`tsx
import { InfoCard } from '@/components/ui/InfoCard/InfoCard'

<InfoCard />
\`\`\`
        `,
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof InfoCard>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Default appearance - label and link to Swagger Petstore API.',
      },
    },
  },
}

export const InSidebarContext: Story = {
  parameters: {
    docs: {
      description: {
        story: 'As it appears at the bottom of a 280px wide sidebar.',
      },
    },
  },
  render: () => (
    <div style={{ width: 280, padding: '12px', background: '#fff', border: '1px solid #e2e8f0', borderRadius: 8 }}>
      <InfoCard />
    </div>
  ),
}
