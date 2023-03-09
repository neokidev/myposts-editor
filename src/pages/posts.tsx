import { type NextPage } from 'next'
import { type Post } from '~/features/post/types/post'
import dayjs from 'dayjs'
import { PostCard } from '~/features/post'
import { useCallback } from 'react'

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
    title:
      'Post 3 (long title, long title, long title, long title, long title,long title)',
    content: 'Test content',
    published: true,
    publishedAt: dayjs().subtract(4, 'day').toDate(),
    createdAt: dayjs().subtract(4, 'day').toDate(),
    updatedAt: dayjs().subtract(4, 'day').toDate(),
  },
]

const Posts: NextPage = () => {
  const handleDelete = useCallback(() => {
    alert('delete')
  }, [])

  return (
    <div className="space-y-1">
      {posts.map((post) => (
        <PostCard
          key={post.id}
          post={post}
          editPageHref="/edit"
          onDelete={handleDelete}
        />
      ))}
    </div>
  )
}

export default Posts
