import { type NextPage } from 'next'
import { type Post } from '~/features/post/types/post'
import dayjs from 'dayjs'
import { PostCard } from '~/features/post'
import { useCallback } from 'react'
import { MainLayout } from '~/components/Layout'
import { useGetPostsQuery } from '~/generated/graphql'

const Posts: NextPage = () => {
  const [queryResult] = useGetPostsQuery()
  const { data } = queryResult

  const handleDelete = useCallback(() => {
    alert('delete')
  }, [])

  return (
    <MainLayout>
      <div className="h-full overflow-hidden rounded-md border bg-white p-8 shadow-lg">
        <div className="mb-8 flex items-center justify-center">
          <h5 className="text-3xl font-bold text-slate-700">Posts</h5>
        </div>
        <div className="space-y-2">
          {data?.posts.map((post) => (
            <PostCard
              key={post.id}
              post={post}
              editPageHref="/edit"
              onDelete={handleDelete}
            />
          ))}
        </div>
      </div>
    </MainLayout>
  )
}

export default Posts
