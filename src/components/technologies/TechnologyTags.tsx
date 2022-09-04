/* eslint-disable react/jsx-no-useless-fragment */
import { TechnologyEntity } from '@/lib/graphql/output'
import sortBy from 'lodash/sortBy'
import { Link, LinkThemeProps } from '@/components/layout/Link'

export interface TechnologyTagsProps {
  technologies?: TechnologyEntity[]
  size?: LinkThemeProps['size']
}

export const TechnologyTags = ({ technologies, size = 'sm' }: TechnologyTagsProps) => {
  if (!technologies) {
    return <></>
  }

  const sortedTechnologies = sortBy(technologies, (t) => t.attributes?.technology)

  return (
    <ul className="flex flex-wrap font-semibold">
      {sortedTechnologies.map((technology) => (
        <li className="mr-2" key={technology.attributes?.slug}>
          <Link href={`/technologies/${technology.attributes?.slug}`} variant="tag" size={size}>
            {technology.attributes?.technology}
          </Link>
        </li>
      ))}
    </ul>
  )
}
