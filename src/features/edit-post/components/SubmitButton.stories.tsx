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

export const Left: Story = {
  args: {},
}

export const Right: Story = {
  args: {},
}

Right.decorators = [
  (Story) => (
    <div className="text-right">
      <Story />
    </div>
  ),
]
