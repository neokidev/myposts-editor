import { Menu, Transition } from '@headlessui/react'
import { type FC, Fragment, useEffect, useRef, useState } from 'react'

type Props = {
  published?: boolean
  onChangePublished?: (published: boolean) => void
}

export const SubmitButton: FC<Props> = ({ published, onChangePublished }) => {
  const [published_, setPublished] = useState(published ?? true)
  const publishedRef = useRef(published ?? true)

  useEffect(() => {
    published !== undefined && setPublished(published)
  }, [published])

  return (
    <div className="relative inline-flex text-right">
      <button
        type="submit"
        className="inline-flex justify-center rounded-none rounded-l-md border-r border-blue-600 bg-blue-500 px-4 py-2 text-sm font-medium text-white hover:bg-blue-600 focus:outline-none focus-visible:z-10 focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2"
      >
        {published_ ? 'Publish' : 'Draft'}
      </button>

      <Menu>
        <Menu.Button
          type="button"
          className="inline-flex items-center justify-center rounded-none rounded-r-md bg-blue-500 px-3 text-white hover:bg-blue-600 focus:outline-none focus-visible:z-10 focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2"
        >
          <svg
            aria-hidden="true"
            viewBox="0 0 8 6"
            width="8"
            height="6"
            fill="none"
            className="stroke-white"
          >
            <path
              d="M7 1.5l-3 3-3-3"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </svg>
        </Menu.Button>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
          afterLeave={() => (publishedRef.current = published_)}
        >
          <Menu.Items className="absolute right-0 top-9 mt-2 w-80 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg shadow-black/25 ring-1 ring-black ring-opacity-5 focus:outline-none">
            <Menu.Item>
              {({ active }) => (
                <button
                  type="button"
                  className={`${
                    active ? 'bg-blue-500' : ''
                  } group flex w-full rounded-t-md p-3 text-start`}
                  onClick={() => {
                    setPublished(true)
                    onChangePublished && onChangePublished(true)
                  }}
                >
                  <div className="w-5">
                    {publishedRef.current && (
                      <svg
                        className={`${
                          active ? 'stroke-white' : 'stroke-blue-500'
                        } stroke-2`}
                        viewBox="0 0 24 24"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M5 12l5 5l10 -10" />
                      </svg>
                    )}
                  </div>

                  <div className="ml-2 flex-1">
                    <h5
                      className={`${
                        active ? 'bg-blue-500 text-white' : 'text-slate-600'
                      } text-sm font-medium`}
                    >
                      Publish
                    </h5>
                    <div
                      className={`${
                        active ? 'text-blue-200' : 'text-slate-400'
                      } mt-0.5 text-[13px] font-light`}
                    >
                      This post can be viewed by anyone
                    </div>
                  </div>
                </button>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <button
                  type="button"
                  className={`${
                    active ? 'bg-blue-500' : ''
                  } group flex w-full rounded-b-md p-3 text-start`}
                  onClick={() => {
                    setPublished(false)
                    onChangePublished && onChangePublished(false)
                  }}
                >
                  <div className="w-5">
                    {!publishedRef.current && (
                      <svg
                        className={`${
                          active ? 'stroke-white' : 'stroke-blue-500'
                        } stroke-2`}
                        viewBox="0 0 24 24"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M5 12l5 5l10 -10" />
                      </svg>
                    )}
                  </div>

                  <div className="ml-2 flex-1">
                    <h5
                      className={`${
                        active ? 'bg-blue-500 text-white' : 'text-slate-600'
                      } text-sm font-medium`}
                    >
                      Draft
                    </h5>
                    <div
                      className={`${
                        active ? 'text-blue-200' : 'text-slate-400'
                      } mt-0.5 text-[13px] font-light`}
                    >
                      This post will not be publicly accessible
                    </div>
                  </div>
                </button>
              )}
            </Menu.Item>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  )
}
