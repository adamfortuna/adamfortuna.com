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
  left: boolean
  classsName?: string
}

export const ProjectCard = ({ classsName = '', project, left }: ProjectCardProps) => {
  return (
    <AnimatePresence>
      <div className="flex justify-center">
        <div
          className={clsx(
            classsName,
            'md:max-w-5xl',
            'flex flex-col md:flex-row  rounded-lg bg-white shadow-lg',
            'flex md:flex-row space-x-8',
            'border border-gray-50',
            // left ? "md:flex-row-reverse" : ""
          )}
        >
          <motion.div
            className="w-full h-96 md:w-48 md:h-auto rounded-t-lg md:rounded-none md:rounded-l-lg relative overflow-hidden"
            layoutId={`${project.slug}-poster`}
          >
            <Image className="object-cover" layout="fill" src={project.poster?.data?.attributes?.hash as string} />
          </motion.div>

          <div className="flex flex-col justify-start py-4 px-2">
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
              <p>
                <TechnologyTags technologies={project.technologies.data} />
              </p>
            )}
            <p>
              <ProjectStateTag state={project.state}>{project.state_description}</ProjectStateTag>
            </p>
            <p className={`space-x-2 list-bullet ${left ? '' : 'flex-row-reverse'}`}>
              {project.url && (
                <Link href={project.url} variant="info">
                  {extractPath(project.url)}
                </Link>
              )}
            </p>
          </div>
        </div>
      </div>
    </AnimatePresence>
  )
}
