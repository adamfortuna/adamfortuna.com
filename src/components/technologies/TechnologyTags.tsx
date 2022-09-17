/* eslint-disable react/jsx-no-useless-fragment */
import { TechnologyEntity } from '@/lib/graphql/output'
import sortBy from 'lodash/sortBy'

export interface TechnologyTagsProps {
  technologies?: TechnologyEntity[]
}

export const TechnologyTags = ({ technologies }: TechnologyTagsProps) => {
  if (!technologies) {
    return <></>
  }

  const sortedTechnologies = sortBy(technologies, (t) => t.attributes?.technology)

  return (
    <ul className="flex flex-wrap font-semibold gap-2 text-xs">
      {sortedTechnologies.map((technology) => (
        <li className="" key={technology.attributes?.slug}>
          <span className="bg-sky-100 rounded-sm px-1 py-0.5">{technology.attributes?.technology}</span>
        </li>
      ))}
    </ul>
  )
}
