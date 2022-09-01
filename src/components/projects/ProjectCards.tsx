import { Project } from '@/lib/graphql/output'
import { Container } from '@/components/layout/Container'
import { ProjectCard } from './ProjectCard'

export interface ProjectCardsProps {
  projects: Project[]
  className?: string
  children: any
}

export const ProjectCards = ({ projects, className, children }: ProjectCardsProps) => {
  return (
    <Container className={`${className}`}>
      {children}
      {projects.map((project, index) => (
        <ProjectCard project={project} key={`project-cards-${project.slug}`} left={index % 2 === 0} />
      ))}
    </Container>
  )
}
