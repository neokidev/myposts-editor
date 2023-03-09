import { type FC, type ReactNode } from 'react'
import { type Post } from '../types/post'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import { IconDots, IconPencil } from '@tabler/icons-react'

dayjs.extend(relativeTime)

const DraftBadge = () => {
  return (
    <span className="mr-2 rounded-md bg-red-100 px-2 py-0.5 text-xs font-medium text-red-500">
      Draft
    </span>
  )
}

type ButtonProps = {
  children: ReactNode
}

const Button: FC<ButtonProps> = ({ children }) => {
  return (
    <>
      <button className="flex items-center rounded-lg border border-slate-200 bg-white p-2 text-xs font-medium text-slate-500 shadow-sm hover:bg-slate-50 hover:text-sky-600 focus:z-10 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-50 ">
        {children}
      </button>
    </>
  )
}

type PostCardProps = {
  post: Post
}

export const PostCard: FC<PostCardProps> = ({ post }) => {
  return (
    <div className="flex items-center rounded-lg border bg-white px-6 py-4">
      <div className="min-w-0 flex-1 space-y-1 pr-4">
        <div className="flex items-center space-x-1">
          <h5 className="break-words text-xl font-bold text-slate-700 line-clamp-2">
            {post.title}
          </h5>
          <div className="pb-0.5">{!post.published && <DraftBadge />}</div>
        </div>
        <div className="text-sm font-light text-slate-400">
          updated {dayjs(post.updatedAt).fromNow()}
        </div>
      </div>

      <div className="col-span-1 flex items-center justify-center space-x-2">
        <Button>
          <IconPencil className="h-4 w-4" />
        </Button>
        <Button>
          <IconDots className="h-4 w-4" />
        </Button>
      </div>
    </div>
  )
}
