import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { fn } from 'storybook/test'
import { Input } from './Input'

const meta = {
  title: 'Atoms/Input',
  component: Input,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
Text input with label, required indicator, error state, helper text and disabled state. Used in all forms across the application.

## Usage
\`\`\`tsx
import Input from '@/components/ui/Input'

// Basic controlled input
<Input label="Pet name" value={name} onChange={e => setName(e.target.value)} />

// Required field
<Input label="Owner email" type="email" required value={email} onChange={e => setEmail(e.target.value)} />

// With error
<Input label="Pet name" error="Name is required" value="" onChange={fn()} />

// With helper text
<Input label="Username" helperText="Only letters and numbers, 3–20 characters" value={username} onChange={e => setUsername(e.target.value)} />

// Disabled
<Input label="Pet ID" value="PET-001" disabled />
\`\`\`
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: 'text',
      description: 'Label displayed above the input',
    },
    error: {
      control: 'text',
      description: 'Error message shown below the input - also sets red border and aria-invalid',
    },
    helperText: {
      control: 'text',
      description: 'Helper text below the input - hidden when error is present',
    },
    required: {
      control: 'boolean',
      description: 'Shows a red asterisk after the label and sets the native required attribute',
    },
    disabled: {
      control: 'boolean',
      description: 'Visually and functionally disables the input',
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder text inside the input',
    },
    type: {
      control: 'select',
      options: ['text', 'email', 'password', 'number', 'tel', 'url', 'search'],
      description: 'Native input type',
    },
  },
  args: {
    onChange: fn(),
  },
} satisfies Meta<typeof Input>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Basic input with a label.',
      },
    },
  },
  args: {
    label: 'Pet name',
    placeholder: 'e.g. Buddy',
  },
}

export const Required: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Required field - red asterisk after the label, native required attribute set.',
      },
    },
  },
  args: {
    label: 'Owner email',
    type: 'email',
    placeholder: 'owner@example.com',
    required: true,
  },
}

export const WithHelperText: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Helper text provides additional context below the input. Disappears when an error is shown.',
      },
    },
  },
  args: {
    label: 'Username',
    placeholder: 'e.g. john_doe',
    helperText: 'Only letters and numbers, 3-20 characters.',
  },
}

export const WithError: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Error state - red border, error message with role="alert", aria-invalid set to true.',
      },
    },
  },
  args: {
    label: 'Pet name',
    value: '',
    error: 'Pet name is required.',
  },
}

export const ErrorOverridesHelper: Story = {
  parameters: {
    docs: {
      description: {
        story: 'When both error and helperText are provided, only the error is shown.',
      },
    },
  },
  args: {
    label: 'Username',
    placeholder: 'e.g. john_doe',
    helperText: 'Only letters and numbers, 3-20 characters.',
    error: 'Username is already taken.',
  },
}

export const Disabled: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Disabled state - grey background, muted text, not-allowed cursor.',
      },
    },
  },
  args: {
    label: 'Pet ID',
    value: 'PET-001',
    disabled: true,
  },
}

export const NoLabel: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Input without a label - ID is still generated via useId() so aria-describedby works correctly.',
      },
    },
  },
  args: {
    placeholder: 'Search pets…',
    type: 'search',
  },
}

export const Types: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Common input types - each gets appropriate keyboard/autocomplete behaviour from the browser.',
      },
    },
  },
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '300px' }}>
      <Input {...args} label="Text" type="text" placeholder="Plain text" />
      <Input {...args} label="Email" type="email" placeholder="owner@example.com" />
      <Input {...args} label="Password" type="password" placeholder="••••••••" />
      <Input {...args} label="Number" type="number" placeholder="0" />
      <Input {...args} label="Phone" type="tel" placeholder="+420 123 456 789" />
    </div>
  ),
}

export const AllStates: Story = {
  parameters: {
    docs: {
      description: {
        story: 'All states side by side: default, focused (interact to see), error, disabled.',
      },
    },
  },
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '300px' }}>
      <Input {...args} label="Default" placeholder="Type something…" />
      <Input {...args} label="With helper" placeholder="Type something…" helperText="This is a helper text." />
      <Input {...args} label="Required" placeholder="Type something…" required />
      <Input {...args} label="Error" value="" error="This field is required." />
      <Input {...args} label="Disabled" value="Cannot edit" disabled />
    </div>
  ),
}
