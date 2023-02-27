import { type NextPage } from 'next'
import {
  type SubmitErrorHandler,
  type SubmitHandler,
  useForm,
} from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { Menu, Transition } from '@headlessui/react'
import { Fragment, useRef, useState } from 'react'
import toast, { Toaster } from 'react-hot-toast'
import Split from 'react-split'

type FormValues = {
  title: string
  content: string
}

const schema = z.object({
  title: z.string().min(1, { message: "Title can't be blank." }),
  content: z.string(),
})

const notify = () => toast.error("Title can't be blank")

const Edit: NextPage = () => {
  const [isDraft, setIsDraft] = useState(false)
  const isDraftRef = useRef(false)

  const { register, handleSubmit } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      title: '',
      content: '',
    },
  })
  const onSubmit: SubmitHandler<FormValues> = (data) => {
    alert(JSON.stringify(data))
  }

  const onError: SubmitErrorHandler<FormValues> = () => notify()

  return (
    <div>
      {/* eslint-disable-next-line @typescript-eslint/no-misused-promises */}
      <form onSubmit={handleSubmit(onSubmit, onError)}>
        <div className="flex h-screen flex-col bg-blue-50">
          <header className="h-16 border-b bg-white shadow-md shadow-slate-200/50">
            <div className="mx-auto grid h-full w-full max-w-7xl grid-cols-3 items-center px-8">
              <div className="flex items-center justify-start">
                <a
                  className="group flex text-sm font-medium leading-6 text-slate-500 hover:text-slate-600"
                  href="#"
                >
                  <svg
                    viewBox="0 -9 3 24"
                    className="mr-3 h-6 w-auto overflow-visible text-slate-400 group-hover:text-slate-500"
                  >
                    <path
                      d="M3 0L0 3L3 6"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                  Go back
                </a>
              </div>
              <div className="flex items-center justify-center"></div>
              <div className="flex items-center justify-end">
                <div className="flex rounded-md shadow-sm">
                  <div className="relative flex text-right">
                    <button
                      type="submit"
                      className="inline-flex justify-center rounded-none rounded-l-md border-r border-blue-600 bg-blue-500 px-4 py-2 text-sm font-medium text-white hover:bg-blue-600 focus:outline-none focus-visible:z-10 focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2"
                    >
                      {isDraft ? 'Draft' : 'Publish'}
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
                        afterLeave={() => (isDraftRef.current = isDraft)}
                      >
                        <Menu.Items className="absolute right-0 top-9 mt-2 w-80 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg shadow-black/25 ring-1 ring-black ring-opacity-5 focus:outline-none">
                          <Menu.Item>
                            {({ active }) => (
                              <button
                                type="button"
                                className={`${
                                  active ? 'bg-blue-500' : ''
                                } group flex w-full rounded-t-md p-3 text-start`}
                                onClick={() => setIsDraft(false)}
                              >
                                <div className="w-5">
                                  {!isDraftRef.current && (
                                    <svg
                                      className={`${
                                        active
                                          ? 'stroke-white'
                                          : 'stroke-blue-500'
                                      } stroke-2`}
                                      viewBox="0 0 24 24"
                                      fill="none"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    >
                                      <path
                                        stroke="none"
                                        d="M0 0h24v24H0z"
                                        fill="none"
                                      />
                                      <path d="M5 12l5 5l10 -10" />
                                    </svg>
                                  )}
                                </div>

                                <div className="ml-2 flex-1">
                                  <h5
                                    className={`${
                                      active
                                        ? 'bg-blue-500 text-white'
                                        : 'text-slate-600'
                                    } text-sm font-medium`}
                                  >
                                    Publish
                                  </h5>
                                  <div
                                    className={`${
                                      active
                                        ? 'text-blue-200'
                                        : 'text-slate-400'
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
                                onClick={() => setIsDraft(true)}
                              >
                                <div className="w-5">
                                  {isDraftRef.current && (
                                    <svg
                                      className={`${
                                        active
                                          ? 'stroke-white'
                                          : 'stroke-blue-500'
                                      } stroke-2`}
                                      viewBox="0 0 24 24"
                                      fill="none"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    >
                                      <path
                                        stroke="none"
                                        d="M0 0h24v24H0z"
                                        fill="none"
                                      />
                                      <path d="M5 12l5 5l10 -10" />
                                    </svg>
                                  )}
                                </div>

                                <div className="ml-2 flex-1">
                                  <h5
                                    className={`${
                                      active
                                        ? 'bg-blue-500 text-white'
                                        : 'text-slate-600'
                                    } text-sm font-medium`}
                                  >
                                    Draft
                                  </h5>
                                  <div
                                    className={`${
                                      active
                                        ? 'text-blue-200'
                                        : 'text-slate-400'
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
                </div>
              </div>
            </div>
          </header>
          <div className="flex-1">
            <div className="mx-auto h-full max-w-7xl p-8">
              <div className="h-full overflow-hidden rounded-md border shadow-lg">
                <div className="flex h-full flex-col space-y-6 bg-white p-6">
                  <div>
                    <label
                      htmlFor="title"
                      className="block font-medium text-slate-600"
                    >
                      Title
                    </label>
                    <div className="mt-1">
                      <input
                        className="block w-full flex-1 rounded-md border border-slate-300 px-4 py-2.5 outline-2 outline-blue-500 ring-0 focus:border-blue-500 focus:ring-blue-500"
                        placeholder="Post title here..."
                        {...register('title')}
                      />
                    </div>
                  </div>

                  <div className="flex flex-1 flex-col">
                    <label
                      htmlFor="content"
                      className="block font-medium text-slate-600"
                    >
                      Content
                    </label>
                    <Split
                      className="relative mt-1 flex flex-1 overflow-hidden rounded-md border border-slate-300"
                      gutterSize={1}
                      gutter={() => {
                        const gutter = document.createElement('div')
                        gutter.className =
                          'relative bg-slate-300 after:absolute after:-left-1 after:z-10 after:block after:h-full after:w-[9px] hover:cursor-col-resize hover:bg-blue-300 hover:ring-2 active:bg-blue-300 active:ring-2'
                        return gutter
                      }}
                    >
                      <textarea
                        className="block w-full resize-none rounded-l-md p-4 outline-none ring-0"
                        placeholder="Post content here..."
                        {...register('content')}
                      />
                      {/*<div className="border border-red-500" />*/}
                      <div className="w-full p-4">Markdown Preview</div>
                    </Split>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>

      <Toaster />
    </div>
  )
}

export default Edit
