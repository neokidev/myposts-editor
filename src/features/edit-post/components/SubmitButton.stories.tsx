import type { Meta, StoryObj } from '@storybook/react'
import { SubmitButton } from './SubmitButton'

const meta: Meta<typeof SubmitButton> = {
  title: 'Features/EditPost/SubmitButton',
  component: SubmitButton,
  tags: ['autodocs'],
  argTypes: {},
}

export default meta
type Story = StoryObj<typeof SubmitButton>

export const Default: Story = {
  args: {},
}

Default.decorators = [
  (Story) => (
    <div className="mb-36 text-center">
      <Story />
    </div>
  ),
]
