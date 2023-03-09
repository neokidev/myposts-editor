import type { Meta, StoryObj } from '@storybook/react'
import { PostCardList } from './PostCardList'
import { type Post } from '../types/post'
import dayjs from 'dayjs'

const posts: Post[] = [
  {
    id: '1',
    title: 'Post 1',
    content: 'Test content',
    published: true,
    publishedAt: dayjs().subtract(1, 'day').toDate(),
    createdAt: dayjs().subtract(3, 'day').toDate(),
    updatedAt: dayjs().subtract(2, 'day').toDate(),
  },
  {
    id: '2',
    title: 'Post 2',
    content: 'Test content',
    published: false,
    createdAt: dayjs().subtract(3, 'day').toDate(),
    updatedAt: dayjs().subtract(3, 'day').toDate(),
  },
  {
    id: '3',
    title: 'Post 3',
    content: 'Test content',
    published: true,
    publishedAt: dayjs().subtract(4, 'day').toDate(),
    createdAt: dayjs().subtract(4, 'day').toDate(),
    updatedAt: dayjs().subtract(4, 'day').toDate(),
  },
]

const meta: Meta<typeof PostCardList> = {
  title: 'Features/Post/PostCardList',
  component: PostCardList,
  tags: ['autodocs'],
  argTypes: {},
}

export default meta
type Story = StoryObj<typeof PostCardList>

export const Default: Story = {
  args: { posts },
}
