import type { Meta, StoryObj } from '@storybook/react'
import { PostCardSkeleton } from './PostCardSkeleton'

const meta: Meta<typeof PostCardSkeleton> = {
  title: 'Features/Post/PostCardSkeleton',
  component: PostCardSkeleton,
  tags: ['autodocs'],
  argTypes: {},
}

export default meta
type Story = StoryObj<typeof PostCardSkeleton>

export const Default: Story = {
  args: {},
}
