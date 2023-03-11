import { createClient } from 'urql'

// TODO: Validate this env variable
// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const GRAPHQL_ENDPOINT = process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT!

export const urqlClient = createClient({
  url: GRAPHQL_ENDPOINT,
})
