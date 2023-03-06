import { initUrqlClient } from 'next-urql'
import { type Client } from 'urql'

// TODO: Validate this env variable
// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const GRAPHQL_ENDPOINT = process.env.GRAPHQL_ENDPOINT!

export function urqlClient(): Promise<Client> {
  return new Promise((resolve, reject) => {
    const client = initUrqlClient(
      {
        url: GRAPHQL_ENDPOINT,
      },
      false
    )
    if (!client) {
      reject(Error('Failed to init initUrqlClient.'))
    } else {
      resolve(client)
    }
  })
}
