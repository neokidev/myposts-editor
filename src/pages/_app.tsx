import { type AppType } from 'next/app'
import { type Session } from 'next-auth'
import { SessionProvider } from 'next-auth/react'
import { Provider as UrqlProvider } from 'urql'

import { api } from '~/utils/api'

import '~/styles/globals.css'
import '~/styles/github-markdown-light.css'
import { urqlClient } from '~/lib/urql'

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <SessionProvider session={session}>
      <UrqlProvider value={urqlClient}>
        <Component {...pageProps} />
      </UrqlProvider>
    </SessionProvider>
  )
}

export default api.withTRPC(MyApp)
