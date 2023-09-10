import { fetchClient } from './wordpressClient'

export const hardcoverClient = ({ query, variables = {} }: { query: string; variables?: any }) => {
  return fetchClient({
    url: 'https://hardcover-production.hasura.app/v1/graphql',
    auth: String(process.env.WP_HARDCOVER_AUTH),
    query,
    variables,
  })
}
