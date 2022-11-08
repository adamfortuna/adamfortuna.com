import { Container } from '@/components/layout/Container'
import { Link } from '@/components/layout/Link'
import { Project } from '@/types'
import { ProjectCard } from './ProjectCard'

export interface ProjectCardsProps {
  projects: Project[]
  className?: string
  children: any
}

export const ProjectCards = ({ projects, className, children }: ProjectCardsProps) => {
  return (
    <div className={`${className}`}>
      <Container className="">
        {children}

        <div className="mx-auto space-y-24">
          {projects.map((project) => (
            <ProjectCard key={`project-cards-${project.slug}`} project={project} />
          ))}
        </div>

        <p className="mt-8 border-t border-sky-200 text-center py-12">
          <Link href="/projects">See all Projects</Link>
        </p>
      </Container>
    </div>
  )
}
