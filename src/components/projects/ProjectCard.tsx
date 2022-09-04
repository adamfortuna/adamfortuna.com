import { AnimatePresence, motion } from 'framer-motion'
import clsx from 'clsx'

import { extractPath } from '@/lib/extractPath'
import { Project } from '@/lib/graphql/output'
import { Link } from '@/components/layout/Link'
import { Image } from '@/components/layout/Image'
import { ProjectStateTag } from '@/components/projects/ProjectStateTag'
import { TechnologyTags } from '@/components/technologies/TechnologyTags'
import { ProjectIcon } from '@/components/projects/ProjectIcon'

export interface ProjectCardProps {
  project: Project
  classsName?: string
}

export const ProjectCard = ({ classsName = '', project }: ProjectCardProps) => {
  return (
    <AnimatePresence>
      <div className="flex justify-center">
        <div
          className={clsx(
            classsName,
            'md:max-w-5xl',
            'flex md:flex-row -space-x-48',
            'border border-gray-50',
            // left ? "md:flex-row-reverse" : ""
          )}
        >
          {project.poster?.data?.attributes ? (
            <motion.div className="flex-none" layoutId={`${project.slug}-poster`}>
              <Link href={`/projects/${project.slug}`} variant="none" className="hover:saturate-200">
                <Image
                  width={600}
                  className="rounded"
                  height={
                    ((project.poster.data.attributes.height as Number) * 600) /
                    (project.poster.data.attributes.width as Number)
                  }
                  src={project.poster.data.attributes.hash as string}
                />
              </Link>
            </motion.div>
          ) : (
            <div />
          )}

          <div className="w-[500px] self-end mb-16 flex flex-col justify-start p-4 bg-white rounded z-10 shadow">
            <div className="flex items-center space-x-2">
              <ProjectIcon icon={project.icon} width={32} height={32} />

              <div className="space-x-4">
                <Link href={`/projects/${project.slug}`} size="xl">
                  {project.title}
                </Link>
                <span>
                  {project.years_active && <span className="text-slate-400 text-sm">{project.years_active}</span>}
                </span>
              </div>
            </div>
            <p>{project.description}</p>
            {project.technologies?.data && (
              <p className="mt-4">
                <TechnologyTags technologies={project.technologies.data} size="xs" />
              </p>
            )}
            <p className="mt-4 space-x-2 list-bullet">
              {project.url && (
                <Link href={project.url} variant="info">
                  {extractPath(project.url)}
                </Link>
              )}{' '}
              <ProjectStateTag state={project.state}>{project.state_description}</ProjectStateTag>
            </p>
          </div>
        </div>
      </div>
    </AnimatePresence>
  )
}
