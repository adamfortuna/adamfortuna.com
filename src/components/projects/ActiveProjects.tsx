import { Container } from '@/components/layout/Container'
import { ProjectCards } from '@/components/projects/ProjectCards'
import { Project } from '@/lib/graphql/output'

export interface ActiveProjectsProps {
  projects: Project[]
  className?: string
}

export const ActiveProjects = ({ projects, className = '' }: ActiveProjectsProps) => {
  return (
    <Container className={`${className}`}>
      <div className="mb-4">
        <h2 className="text-2xl font-bold">Active Projects</h2>
        <p className="text-slate-300 text-sm">Things I'm working on right now.</p>
      </div>
      <ProjectCards projects={projects} className="space-y-4" />
    </Container>
  )
}
