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
    <div className="mb-36 flex justify-center">
      <div className="flex w-[7.125rem] justify-end">
        <Story />
      </div>
    </div>
  ),
]
