import { Project } from '@/lib/graphql/output'
import { ProjectCard } from './ProjectCard'

export interface ProjectCardsProps {
  projects: Project[]
  className?: string
}

export const ProjectCards = ({ projects, className }: ProjectCardsProps) => {
  return (
    <div className={`${className}`}>
      {projects.map((project) => (
        <ProjectCard project={project} key={`project-cards-${project.slug}`} />
      ))}
    </div>
  )
}
