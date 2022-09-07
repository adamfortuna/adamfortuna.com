/* eslint-disable no-nested-ternary */
import { NextPage } from 'next'

import { initializeApollo } from '@/lib/apolloClient'
import { ProjectsQuery, ProjectsDocument, Project, ComponentSharedLinkInput } from '@/lib/graphql/output'
import { ProjectIcon } from '@/components/projects/ProjectIcon'
import { ProjectCategory } from '@/components/projects/ProjectCategory'

import { Container } from '@/components/layout/Container'
import { ProjectStateTag } from '@/components/projects/ProjectStateTag'
import { TechnologyTags } from '@/components/technologies/TechnologyTags'
import { ProjectLinks } from '@/components/projects/ProjectLinks'
import clsx from 'clsx'

export interface ProjectProps {
  projects: Project[]
}

const ProductTimelineIcon = ({ project }: { project: Project }) => {
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
    <li className="mb-16 ml-8">
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
          <ul className="list-comma">
            <li><b>Active:</b> {project.years_active}</li>
            <li><ProjectCategory category={project.category || 'app'} /></li>
            {project.employed && (
              <span><b>Role:</b> {project.role}</span>
            )}
          </ul>
          
        </div>
        <p className="mb-2 text-base font-normal text-gray-600">{project.description}</p>
        <TechnologyTags technologies={project.technologies?.data || []} size="xs" />
        <div className="mt-2">
          <ProjectLinks links={project.links as ComponentSharedLinkInput[]} size="sm" />
        </div>
      </div>
    </li>
  )
}
const Projects: NextPage<ProjectProps> = ({ projects }) => {
  return (
    <main className="mt-[80px] md:mt-[100px]">
      <Container className="my-8 max-w-2xl">
        <h1 className="font-black text-3xl text-black">Projects</h1>
        <p>
          Here are all the noteworthy things I've worked on. Many were{' '}
          <span className="font-bold bg-blue-200 text-blue-900 px-1 py-0.5 rounded">solo projects</span>, while a bunch
          were on a <span className="font-bold bg-green-200 text-green-900 px-1 py-0.5 rounded">team</span> - some
          employed.
        </p>

        <ol className="ml-8 md:ml-0 mt-12 relative border-l border-gray-400">
          {projects.map((project, index) => (
            <>
              {index === 0 && (
                <li className="mb-10 relative ml-12 lg:ml-0">
                  <span className="md:ml-0 lg:absolute lg:-left-[150px] w-24 h-24 text-black font-black text-2xl lg:text-right">
                    Now
                    <span className="text-sm font-semibold text-gray-400 block">
                      {Number(new Date().getFullYear()) - 1982} years old
                    </span>
                  </span>
                </li>
              )}

              {index > 0 &&
                project.date_ended &&
                project.date_ended.split('-')[0] !== projects[index - 1]?.date_ended?.split('-')[0] && (
                  <li className="mt-24 lg:mt-0 mb-4 relative ml-12 lg:ml-0">
                    <span className="md:ml-0 lg:absolute lg:-left-[150px] w-24 h-24 text-black font-black text-2xl lg:text-right">
                      {project.date_ended.split('-')[0]}
                      <span className="text-sm font-semibold text-gray-400 block">
                        {Number(project.date_ended.split('-')[0]) - 1982} years old
                      </span>
                    </span>
                  </li>
                )}
              <ProjectTimeline key={project.slug} project={project} />
            </>
          ))}
        </ol>
      </Container>
    </main>
  )
}

export default Projects

export async function getStaticProps() {
  const apolloClient = initializeApollo()

  const { data } = await apolloClient.query<ProjectsQuery>({
    query: ProjectsDocument,
    variables: {
      sort: ['date_ended:desc', 'priority:desc'],
    },
  })

  return {
    props: { projects: data.projects?.data.map((projectData) => projectData.attributes) },
    revalidate: 60 * 60,
  }
}
