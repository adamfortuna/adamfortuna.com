/* eslint-disable react/jsx-no-useless-fragment */
import { Enum_Project_Category } from '@/lib/graphql/output'

export interface ProjectCategoryProps {
  category?: Enum_Project_Category
}

function capitalizeFirstLetter(string: string) {
  return string.charAt(0).toUpperCase() + string.slice(1)
}

export const ProjectCategory = ({ category }: ProjectCategoryProps) => {
  if (!category) {
    return <></>
  }

  return (
    <span>
      <b>Category:</b> {capitalizeFirstLetter(category)}
    </span>
  )
}
