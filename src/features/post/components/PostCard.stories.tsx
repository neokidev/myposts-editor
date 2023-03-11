import type { Meta, StoryObj } from '@storybook/react'
import { PostCard } from './PostCard'
import { type Post } from '../types/post'
import dayjs from 'dayjs'
import { userEvent, within } from '@storybook/testing-library'

const post: Post = {
  id: '1',
  title: 'Test title',
  content: 'Test content',
  published: true,
  publishedAt: dayjs().subtract(1, 'day').toDate(),
  createdAt: dayjs().subtract(3, 'day').toDate(),
  updatedAt: dayjs().subtract(2, 'day').toDate(),
}

const meta: Meta<typeof PostCard> = {
  title: 'Features/Post/PostCard',
  component: PostCard,
  tags: ['autodocs'],
  argTypes: {},
}

export default meta
type Story = StoryObj<typeof PostCard>

export const PublishedPost: Story = {
  args: { post, editPageHref: '#', onDelete: () => null },
}

export const DraftPost: Story = {
  args: {
    post: {
      ...post,
      published: false,
    },
    editPageHref: '#',
    onDelete: () => null,
  },
}

export const OpenDetailMenu: Story = {
  args: { post, editPageHref: '#', onDelete: () => null },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const detailButton = canvas.getByRole('button', { name: 'detail' })
    await Promise.resolve(userEvent.click(detailButton))
  },
}
