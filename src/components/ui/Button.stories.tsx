import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { fn } from 'storybook/test'
import { Button } from './Button'

const PlusIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path d="M8 3v10M3 8h10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
)

const ArrowIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const meta = {
  title: 'Atoms/Button',
  component: Button,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
Basic button used throughout the application. Supports four visual variants, three sizes, leading and trailing icons, loading state and disabled state.

## Usage
\`\`\`tsx
import Button from '@/components/ui/Button'

<Button variant="primary" size="md">
  Create Pet
</Button>

// With leading icon
<Button variant="primary" iconLeading={<PlusIcon />}>
  Add New Pet
</Button>

// With trailing icon
<Button variant="secondary" iconTrailing={<ArrowIcon />}>
  Next
</Button>

// Loading state
<Button variant="primary" loading>
  Saving...
</Button>
\`\`\`
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'danger', 'ghost'],
      description: 'Visual variant of the button',
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Size of the button',
    },
    loading: {
      control: 'boolean',
      description: 'Shows a spinner and disables the button',
    },
    loadingText: {
      control: 'text',
      description: 'Text shown instead of children while loading (e.g. "Saving...")',
    },
    disabled: {
      control: 'boolean',
      description: 'Visually and functionally disables the button',
    },
    iconOnly: {
      control: 'boolean',
      description: 'Square padding for icon-only buttons - always pair with aria-label',
    },
    href: {
      control: 'text',
      description: 'Renders the button as a Next.js Link instead of a button element',
    },
    children: {
      control: 'text',
      description: 'Button label text',
    },
  },
  args: {
    onClick: fn(),
    children: 'Button',
  },
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Default primary variant in medium size.',
      },
    },
  },
  args: {
    variant: 'primary',
    size: 'md',
    children: 'Create Pet',
  },
}

export const Variants: Story = {
  parameters: {
    docs: {
      description: {
        story: 'All four variants side by side: primary, secondary, danger, ghost.',
      },
    },
  },
  render: (args) => (
    <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
      <Button {...args} variant="primary">Primary</Button>
      <Button {...args} variant="secondary">Secondary</Button>
      <Button {...args} variant="danger">Danger</Button>
      <Button {...args} variant="ghost">Ghost</Button>
    </div>
  ),
}

export const Sizes: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Three available sizes: sm, md, lg.',
      },
    },
  },
  render: (args) => (
    <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
      <Button {...args} size="sm">Small</Button>
      <Button {...args} size="md">Medium</Button>
      <Button {...args} size="lg">Large</Button>
    </div>
  ),
}

export const WithIconLeading: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Icon on the left side of the text (iconLeading). Used e.g. for "Add New Pet" or "Create Pet" buttons.',
      },
    },
  },
  args: {
    variant: 'primary',
    size: 'md',
    iconLeading: <PlusIcon />,
    children: 'Add New Pet',
  },
}

export const WithIconTrailing: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Icon on the right side of the text (iconTrailing). Used e.g. for navigation or action buttons.',
      },
    },
  },
  args: {
    variant: 'secondary',
    size: 'md',
    iconTrailing: <ArrowIcon />,
    children: 'Next',
  },
}

export const WithBothIcons: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Leading and trailing icons used at the same time.',
      },
    },
  },
  args: {
    variant: 'secondary',
    size: 'md',
    iconLeading: <PlusIcon />,
    iconTrailing: <ArrowIcon />,
    children: 'Add and Continue',
  },
}

export const Loading: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Loading state - shows a spinner and automatically disables the button.',
      },
    },
  },
  args: {
    variant: 'primary',
    size: 'md',
    loading: true,
    children: 'Create Pet',
  },
}

export const LoadingWithText: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Loading state with loadingText - replaces button label with a contextual message while loading.',
      },
    },
  },
  args: {
    variant: 'primary',
    size: 'md',
    loading: true,
    loadingText: 'Creating...',
    children: 'Create Pet',
  },
}

export const AsLink: Story = {
  parameters: {
    docs: {
      description: {
        story: 'When href is provided, renders as a Next.js Link instead of a button element.',
      },
    },
  },
  render: (args) => (
    <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
      <Button {...args} variant="primary" href="/pets">Go to Pets</Button>
      <Button {...args} variant="secondary" href="/pets">Back</Button>
      <Button {...args} variant="ghost" href="/pets">Back</Button>
    </div>
  ),
}

export const IconOnly: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Icon-only button - square padding, no text. Always add `aria-label` for screen readers.',
      },
    },
  },
  render: (args) => (
    <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
      <Button {...args} variant="primary" iconOnly iconLeading={<PlusIcon />} aria-label="Add new pet" />
      <Button {...args} variant="secondary" iconOnly iconLeading={<PlusIcon />} aria-label="Add new pet" />
      <Button {...args} variant="ghost" iconOnly iconLeading={<PlusIcon />} aria-label="Add new pet" />
    </div>
  ),
}

export const Disabled: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Disabled state - reduced opacity, not-allowed cursor, does not respond to clicks.',
      },
    },
  },
  render: (args) => (
    <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
      <Button {...args} variant="primary" disabled>Primary</Button>
      <Button {...args} variant="secondary" disabled>Secondary</Button>
      <Button {...args} variant="danger" disabled>Danger</Button>
      <Button {...args} variant="ghost" disabled>Ghost</Button>
    </div>
  ),
}
