import { type FC, type ReactNode } from 'react'
import Link from 'next/link'
import Image from 'next/image'

type MainLayoutProps = {
  children: ReactNode
}

export const MainLayout: FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="flex min-h-screen flex-col bg-blue-50">
      <header className="h-16 border-b bg-white shadow-md shadow-slate-200/50">
        <div className="mx-auto grid h-full w-full max-w-7xl grid-cols-3 items-center px-8">
          <div className="relative flex items-center justify-start">
            <Image src="/logo.svg" alt="logo" width={96} height={0} />
          </div>
          <div className="flex items-center justify-center"></div>
          <div className="flex items-center justify-end">
            <Link
              href="/new"
              className="rounded-lg bg-blue-500 px-4 py-2 text-sm font-medium text-white hover:bg-blue-600"
            >
              Create post
            </Link>
          </div>
        </div>
      </header>
      <div className="flex flex-1 overflow-hidden">
        <div className="flex-1">
          <div className="mx-auto h-full max-w-7xl p-8">{children}</div>
        </div>
      </div>
    </div>
  )
}
