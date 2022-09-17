import clsx from 'clsx'

import { Project, ComponentSharedLinkInput } from '@/lib/graphql/output'
import { Link } from '@/components/layout/Link'
import { Image } from '@/components/layout/Image'
import { ProjectStateTag } from '@/components/projects/ProjectStateTag'
import { TechnologyTags } from '@/components/technologies/TechnologyTags'
import { ProjectIcon } from '@/components/projects/ProjectIcon'
import { ProjectLinks } from '@/components/projects/ProjectLinks'

export interface ProjectCardProps {
  project: Project
  classsName?: string
}

export const ProjectCard = ({ classsName = '', project }: ProjectCardProps) => {
  return (
    <div className="group flex justify-center">
      <div className={clsx(classsName, 'md:max-w-5xl', 'flex md:flex-row -space-x-48', 'border border-gray-50')}>
        {project.poster?.data?.attributes ? (
          <div className="flex-none shadow-lg">
            <Link href={`/projects/${project.slug}`} variant="none" className="group-hover:saturate-200">
              <Image
                width={600}
                className="rounded "
                height={
                  ((project.poster.data.attributes.height as number) * 600) /
                  (project.poster.data.attributes.width as number)
                }
                src={project.poster.data.attributes.hash as string}
              />
            </Link>
          </div>
        ) : (
          <div />
        )}

        <div className="w-[500px] self-end mb-16 flex flex-col justify-start p-4 bg-white group-hover:bg-sky-50 rounded z-10 shadow">
          <div className="flex items-center space-x-2">
            <ProjectIcon icon={project.icon} size={32} />

            <div className="space-x-4">
              <span>{project.title}</span>
              <span>
                {project.years_active && <span className="text-slate-400 text-sm">{project.years_active}</span>}
              </span>
              <ProjectStateTag state={project.state}>{project.state_description}</ProjectStateTag>
            </div>
          </div>
          <p>{project.description}</p>
          {project.technologies?.data && (
            <p className="mt-4">
              <TechnologyTags technologies={project.technologies.data} />
            </p>
          )}
          <div className="mt-2">
            <ProjectLinks links={project.links as ComponentSharedLinkInput[]} size="sm" />
          </div>
        </div>
      </div>
    </div>
  )
}
