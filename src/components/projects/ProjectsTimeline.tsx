/* eslint-disable no-nested-ternary, react/jsx-no-useless-fragment */
import clsx from 'clsx'

import { Project, ComponentSharedLinkInput, Enum_Project_Category } from '@/lib/graphql/output'
import { ProjectIcon } from '@/components/projects/ProjectIcon'
import { ProjectCategory } from '@/components/projects/ProjectCategory'
import { ProjectStateTag } from '@/components/projects/ProjectStateTag'
import { TechnologyTags } from '@/components/technologies/TechnologyTags'
import { ProjectLinks } from '@/components/projects/ProjectLinks'

export const ProductTimelineIcon = ({ project }: { project: Project }) => {
  return (
    <span
      className={clsx(
        'drop-shadow-xl flex absolute justify-center items-center rounded-full bg-white ring-4',
        project.employed ? 'ring-green-400' : 'ring-blue-400',
        project.size === 'lg' ? '-left-8 w-16 h-16' : '',
        project.size === 'md' ? '-left-6 w-12 h-12' : '',
        project.size === 'sm' ? '-left-4 w-8 h-8' : '',
      )}
    >
      <ProjectIcon icon={project.icon} size={project.size === 'lg' ? 64 : project.size === 'md' ? 48 : 32} />
    </span>
  )
}

const ProjectTimeline = ({ project }: { project: Project }) => {
  return (
    <div className="mb-16 ml-8">
      <ProductTimelineIcon project={project} />
      <div className="ml-4 flex flex-col">
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
        <TechnologyTags technologies={project.technologies?.data || []} />
        <div className="mt-2">
          <ProjectLinks links={project.links as ComponentSharedLinkInput[]} size="sm" />
        </div>
      </div>
    </div>
  )
}

interface ProjectTimelineSeparatorProps {
  currentProject: Project
  previousProject: Project | null
  sortField: 'date_started' | 'date_ended'
}

export const ProjectTimelineSeparator = ({
  currentProject,
  previousProject,
  sortField,
}: ProjectTimelineSeparatorProps) => {
  const currentProjectDate = new Date(currentProject[sortField])
  const currentProjectYear = currentProjectDate.getFullYear()

  const previousProjectDate = previousProject ? new Date(previousProject[sortField]) : null
  const previousProjectYear = previousProjectDate ? previousProjectDate.getFullYear() : null

  if (sortField === 'date_ended' && !previousProject) {
    return (
      <div className="mb-10 relative ml-12 lg:ml-0">
        <span className="md:ml-0 lg:absolute lg:-left-[150px] w-24 h-24 text-black font-black text-2xl lg:text-right">
          Now
          <span className="text-sm font-semibold text-gray-400 block">
            {Number(new Date().getFullYear()) - 1982} years old
          </span>
        </span>
      </div>
    )
  }

  if (currentProjectYear !== previousProjectYear) {
    return (
      <div className="mt-24 lg:mt-0 mb-4 relative ml-12 lg:ml-0">
        <span className="md:ml-0 lg:absolute lg:-left-[150px] w-24 h-24 text-black font-black text-2xl lg:text-right">
          {currentProjectYear}
          <span className="text-sm font-semibold text-gray-400 block">{currentProjectYear - 1982} years old</span>
        </span>
      </div>
    )
  }

  return <></>
}

interface ProjectsTimelineProps {
  projects: Project[]
  sortField: 'date_started' | 'date_ended'
}

export const ProjectsTimeline = ({ projects, sortField }: ProjectsTimelineProps) => {
  return (
    <div className="ml-8 md:ml-0 mt-12 relative border-l border-gray-400">
      {projects.map((project, index) => (
        <div key={`${project.slug}-${sortField}`}>
          <ProjectTimelineSeparator
            currentProject={project}
            previousProject={index > 0 ? projects[index - 1] : null}
            sortField={sortField}
          />
          <ProjectTimeline key={project.slug} project={project} />
        </div>
      ))}
    </div>
  )
}
