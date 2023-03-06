import { type AppType } from 'next/app'
import { type Session } from 'next-auth'
import { SessionProvider } from 'next-auth/react'
import {
  createClient as createUrqlClient,
  Provider as UrqlProvider,
} from 'urql'

import { api } from '~/utils/api'

import '~/styles/globals.css'
import '~/styles/github-markdown-light.css'

// TODO: Validate this env variable
// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const GRAPHQL_ENDPOINT = process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT!

const urqlClient = createUrqlClient({
  url: GRAPHQL_ENDPOINT,
})

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
