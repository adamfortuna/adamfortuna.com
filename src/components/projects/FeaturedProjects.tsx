import { Container } from '@/components/layout/Container'
import { ProjectCards } from '@/components/projects/ProjectCards'
import { Project } from '@/lib/graphql/output'

export interface ProjectCardProps {
  projects: Project[]
}

export const FeaturedProjects = ({ projects }: ProjectCardProps) => {
  return (
    <Container className="pt-20 pb-16 text-center lg:pt-32">
      <h2 className="text-3xl font-black">Projects</h2>
      <ProjectCards projects={projects} className="space-y-4" />
    </Container>
  )
}
