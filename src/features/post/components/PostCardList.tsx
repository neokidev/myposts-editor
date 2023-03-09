import { type FC } from 'react'
import { type Post } from '../types/post'
import { PostCard } from './PostCard'

type PostCardListProps = {
  posts: Post[]
}

export const PostCardList: FC<PostCardListProps> = ({ posts }) => {
  return (
    <div className="space-y-1">
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  )
}
