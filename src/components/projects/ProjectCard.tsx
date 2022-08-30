import Link from 'next/link'

import { Project } from '@/lib/graphql/output'

export interface ProjectCardProps {
  project: Project
}

export const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <div>
      <Link href={`/projects/${project.slug}`} passHref>
        <a className="underline hover:no-underline">{project.slug}</a>
      </Link>
    </div>
  )
}
