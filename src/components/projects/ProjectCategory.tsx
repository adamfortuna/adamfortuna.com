export interface ProjectCategoryProps {
  category: string
}

export const ProjectCategory = ({ category }: ProjectCategoryProps) => {
  return <span className="px-1 py-0.5 rounded font-semibold">{category}</span>
}
