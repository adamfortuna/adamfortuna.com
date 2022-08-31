/* eslint-disable react/jsx-no-useless-fragment */
import { TechnologyEntity } from '@/lib/graphql/output'
import sortBy from 'lodash/sortBy'

export interface TechnologyTagsProps {
  technologies: TechnologyEntity[]
}

export const TechnologyTags = ({ technologies }: TechnologyTagsProps) => {
  if (technologies.length === 0) {
    return <></>
  }

  const sortedTechnologies = sortBy(technologies, (t) => t.attributes?.technology)

  return (
    <ul className="inline text-xs font-semibold space-x-1">
      {sortedTechnologies.map((technology) => (
        <li className="inline bg-gray-200 px-1 py-0.5 rounded-sm">{technology.attributes?.technology}</li>
      ))}
    </ul>
  )
}
