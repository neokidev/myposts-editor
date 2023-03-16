import { type NextPage } from 'next'
import { PostCard, PostCardSkeleton } from '~/features/post'
import { useCallback } from 'react'
import { MainLayout } from '~/components/Layout'
import {
  type Post,
  useGetPostsQuery,
  useRemovePostMutation,
} from '~/generated/graphql'
import { type CombinedError } from 'urql'
import { range } from 'lodash'

const Posts: NextPage = () => {
  const [queryResult] = useGetPostsQuery()
  const [, removePost] = useRemovePostMutation()
  const { data, fetching } = queryResult

  const handleDelete = useCallback(
    (post: Post) => {
      const variables = { id: post.id }
      removePost(variables).catch((e: CombinedError) => {
        throw new Error(e.message)
      })
    },
    [removePost]
  )

  return (
    <MainLayout>
      <div className="h-full overflow-hidden rounded-md border bg-white p-8 shadow-lg">
        <div className="mb-8 flex items-center justify-center">
          <h5 className="text-3xl font-bold text-slate-700">Posts</h5>
        </div>
        <div className="space-y-2">
          {fetching ? (
            <>
              {range(5).map((index) => (
                <PostCardSkeleton key={index} />
              ))}
            </>
          ) : (
            <>
              {data?.posts.map((post) => (
                <PostCard
                  key={post.id}
                  post={post}
                  editUrl={`/${post.id}/edit`}
                  onDelete={handleDelete}
                />
              ))}
            </>
          )}
        </div>
      </div>
    </MainLayout>
  )
}

export default Posts
