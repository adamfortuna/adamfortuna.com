/* eslint-disable no-nested-ternary, react/jsx-no-useless-fragment */
import clsx from 'clsx'
import { useMemo } from 'react'
import flatten from 'lodash/flatten'
import uniqBy from 'lodash/uniqBy'
import sortBy from 'lodash/sortBy'
import { Project, ComponentSharedLinkInput, Enum_Project_Category, Technology } from '@/lib/graphql/output'
import { ProjectIcon } from '@/components/projects/ProjectIcon'
import { ProjectCategory } from '@/components/projects/ProjectCategory'
import { ProjectStateTag } from '@/components/projects/ProjectStateTag'
import { ProjectLinks } from '@/components/projects/ProjectLinks'

export const ProductTechnoloyIcon = ({ project }: { project: Project }) => {
  return (
    <span
      className={clsx(
        'drop-shadow-xl flex absolute justify-center items-center rounded-full bg-white ring-4',
        project.employed ? 'ring-green-400' : 'ring-blue-400',
        '-left-12 w-8 h-8',
      )}
    >
      <ProjectIcon icon={project.icon} size={32} />
    </span>
  )
}

const ProjectTimeline = ({ project }: { project: Project }) => {
  return (
    <div className="mb-4 relative">
      <ProductTechnoloyIcon project={project} />
      <div className="flex flex-col">
        <p className="leading-7">
          <span
            className={`mr-4 ${project.size === 'lg' ? 'text-2xl' : project.size === 'md' ? 'text-xl' : 'text-lg'}`}
          >
            {project.title}
          </span>
          <ProjectStateTag state={project.state} className="inline-block text-sm">
            {project.state_description}
          </ProjectStateTag>
        </p>
        {project.size === 'lg' ? (
          <>
            <div className="block mt-1 mb-2 text-sm font-normal leading-none text-gray-500">
              <ul className="list-comma leading-5">
                <li>
                  <b>Active:</b> {project.years_active}
                </li>
                <li>
                  <ProjectCategory category={project.category as Enum_Project_Category} />
                </li>
                {project.employed && (
                  <li>
                    <b>Role:</b> {project.role}
                  </li>
                )}
                {project.salary && (
                  <li>
                    <b>Compensation:</b> {project.salary}
                  </li>
                )}
              </ul>
            </div>
            <p className="mb-2 text-base font-normal text-gray-600">{project.description}</p>
            <div className="mt-2">
              <ProjectLinks links={project.links as ComponentSharedLinkInput[]} size="sm" />
            </div>
          </>
        ) : (
          <>
            <p className="mb-2 text-base font-normal text-gray-600">{project.description}</p>
            <div className="mt-2">
              <ProjectLinks links={project.links as ComponentSharedLinkInput[]} size="sm" />
            </div>
          </>
        )}
      </div>
    </div>
  )
}

interface ProjectsTechnologyProps {
  projects: Project[]
  technology: Technology
}
export const ProjectsTechnology = ({ projects, technology }: ProjectsTechnologyProps) => {
  const filteredProjects = sortBy(
    projects.filter((project) => {
      return project.technologies?.data.find(
        (projectsTechnology) => projectsTechnology.attributes?.slug === technology.slug,
      )
    }),
    'title',
  )

  return (
    <div>
      <h3 className="text-2xl font-bold mb-4">{technology.technology}</h3>
      {filteredProjects.map((project) => (
        <ProjectTimeline key={project.slug} project={project} />
      ))}
    </div>
  )
}

interface ProjectsTimelineProps {
  projects: Project[]
}
export const ProjectsTechnologies = ({ projects }: ProjectsTimelineProps) => {
  const technologies = useMemo(() => {
    const a = projects.map((project) => project.technologies?.data.map((technology) => technology.attributes))
    const b = flatten(a)
    const c = uniqBy(b, 'technology')
    return sortBy(c, 'technology')
  }, [projects])

  return (
    <div className="ml-8 md:ml-0 mt-12 relative space-y-16">
      {technologies.map((technology) => (
        <ProjectsTechnology technology={technology as Technology} projects={projects} />
      ))}
    </div>
  )
}
