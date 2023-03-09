import { type FC } from 'react'
import { type Post } from '../types/post'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'

dayjs.extend(relativeTime)

const DraftBadge = () => {
  return (
    <span className="mr-2 rounded-md bg-red-100 px-2 py-0.5 text-xs font-medium text-red-500">
      Draft
    </span>
  )
}

type PostCardProps = {
  post: Post
}

export const PostCard: FC<PostCardProps> = ({ post }) => {
  return (
    <div className="space-y-1 rounded-lg border px-6 py-4">
      <div className="flex items-center space-x-1">
        <h5 className="text-xl font-bold text-slate-700">{post.title}</h5>
        <div className="pb-0.5">{!post.published && <DraftBadge />}</div>
      </div>
      <div className="text-sm text-slate-400">
        updated {dayjs(post.updatedAt).fromNow()}
      </div>
    </div>
  )
}
