import Link from 'next/link'

import { extractPath } from '@/lib/extractPath'
import { Project } from '@/lib/graphql/output'

export interface ProjectCardProps {
  project: Project
  left: boolean
}

export const ProjectCard = ({ project, left }: ProjectCardProps) => {
  return (
    <div>
      <p className={`space-x-2 list-bullet ${left ? '' : 'flex-row-reverse'}`}>
        <Link href={`/projects/${project.slug}`} passHref>
          <a className="underline hover:no-underline">{project.title}</a>
        </Link>
        {project.url && (
          <a href={project.url} className="text-slate-400 text-sm hover:underline">
            {extractPath(project.url)}
          </a>
        )}

        {project.years_active && <span className="text-slate-400 text-sm">{project.years_active}</span>}
      </p>

      <p>{project.description}</p>
    </div>
  )
}
