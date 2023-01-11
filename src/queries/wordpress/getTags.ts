import { getClientForProject, parseTags } from '@/lib/wordpressClient'
import { gql } from '@apollo/client'
import { Tag, WordpressClientIdentifier } from '@/types'
import { flatten } from 'lodash'

export const findWordPressTags = gql`
  query GetTags {
    tags(first: 100) {
      nodes {
        name
        slug
        count
      }
    }
  }
`

export const getTagsByProject = async (project: WordpressClientIdentifier) => {
  return getClientForProject(project)
    .query({ query: findWordPressTags })
    .then((result) => parseTags(result.data.tags.nodes))
}

export const getTags = async () => {
  const projects: WordpressClientIdentifier[] = ['adamfortuna', 'minafi', 'hardcover']

  const finders = projects.map((p) => getTagsByProject(p))
  const results = await Promise.all(finders)

  const allTags = flatten(results)

  const tagHash = {} as any
  allTags.forEach((tag) => {
    if (!tag.count || tag.count === 0) {
      return
    }

    if (tagHash[tag.slug]) {
      tagHash[tag.slug].count += tag.count
    } else {
      tagHash[tag.slug] = {
        count: 0,
        ...tag,
      } as Tag
    }
  })
  const unsortedTags: Tag[] = Object.entries(tagHash).map(([_key, val]) => val as Tag)
  return unsortedTags.sort((a, b) => (a.name.toLocaleUpperCase() > b.name.toLocaleUpperCase() ? 1 : -1))
}
