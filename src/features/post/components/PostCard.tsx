import { type FC, type ReactNode, useCallback } from 'react'
import { type Post } from '../types/post'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import { IconAlertCircle, IconDots, IconPencil } from '@tabler/icons-react'
import { Menu } from '@headlessui/react'
import Link from 'next/link'

dayjs.extend(relativeTime)

const buttonClassName =
  'flex items-center rounded-lg border border-slate-200 bg-white p-2 text-xs font-medium text-slate-400 shadow-sm hover:bg-slate-50 hover:text-slate-500 focus:z-10 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-50 '

const DraftBadge = () => {
  return (
    <span className="mr-2 rounded-md bg-red-100 px-2 py-0.5 text-xs font-medium text-red-500">
      Draft
    </span>
  )
}

type DetailButtonProps = {
  children: ReactNode
  deletePost: () => void
}

const DetailButton: FC<DetailButtonProps> = ({ children, deletePost }) => {
  return (
    <Menu as="div" className="relative">
      <Menu.Button className={buttonClassName} aria-label="detail">
        {children}
      </Menu.Button>
      <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
        <div className="p-1">
          <Menu.Item>
            {({ active }) => (
              <button
                onClick={deletePost}
                className={`${
                  active ? 'bg-red-50' : ''
                } group flex w-full items-center rounded-md p-2 text-sm font-medium text-red-500`}
              >
                <IconAlertCircle
                  className="mr-1.5 h-5 w-5"
                  aria-hidden="true"
                />
                Delete this post
              </button>
            )}
          </Menu.Item>
        </div>
      </Menu.Items>
    </Menu>
  )
}

type PostCardProps = {
  post: Post
  editUrl: string
  onDelete: (post: Post) => void
}

export const PostCard: FC<PostCardProps> = ({
  post,
  editUrl,
  onDelete,
}) => {
  const deletePost = useCallback(() => onDelete(post), [post, onDelete])

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
        <Link href={editUrl} className={buttonClassName}>
          <IconPencil className="h-4 w-4" />
        </Link>
        <DetailButton deletePost={deletePost}>
          <IconDots className="h-4 w-4" />
        </DetailButton>
      </div>
    </div>
  )
}
