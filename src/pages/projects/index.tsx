/* eslint-disable no-nested-ternary */
import { NextPage } from 'next'

import { initializeApollo } from '@/lib/apolloClient'
import { ProjectsQuery, ProjectsDocument, Project } from '@/lib/graphql/output'
import { ProjectIcon } from '@/components/projects/ProjectIcon'
import { ProjectCategory } from '@/components/projects/ProjectCategory'

import { Container } from '@/components/layout/Container'
import { Link } from '@/components/layout/Link'
import { ProjectStateTag } from '@/components/projects/ProjectStateTag'
import { TechnologyTags } from '@/components/technologies/TechnologyTags'
import clsx from 'clsx'

export interface ProjectProps {
  projects: Project[]
}

const ProjectTimeline = ({ project }: { project: Project }) => {
  return (
    <li className="mb-10 ml-6">
      <Link
        href={`/projects/${project.slug}`}
        variant="none"
        className={clsx(
          'hover:invert transition-all drop-shadow-xl flex absolute justify-center items-center bg-blue-200 rounded-full ring-1 ring-white',
          project.size === 'lg' ? '-left-8 w-16 h-16' : '',
          project.size === 'md' ? '-left-6 w-12 h-12' : '',
          project.size === 'sm' ? '-left-4 w-8 h-8' : '',
        )}
      >
        <ProjectIcon icon={project.icon} size={64} />
      </Link>
      <div className="ml-4 flex flex-col">
        <p className="leading-7">
          <Link
            href={`/projects/${project.slug}`}
            variant="header"
            size={project.size === 'lg' ? '2xl' : project.size === 'md' ? 'xl' : 'lg'}
            className="mr-4"
          >
            {project.title}
          </Link>
          <ProjectStateTag state={project.state} className="inline-block text-sm">
            {project.state_description}
          </ProjectStateTag>
        </p>
        <time className="block mt-1 mb-2 text-sm font-normal leading-none text-gray-400 space-x-4">
          <b>Active:</b> {project.years_active}
          <ProjectCategory category={project.category || 'app'} />
        </time>
        <p className="mb-4 text-base font-normal text-gray-600">{project.description}</p>
        <TechnologyTags technologies={project.technologies?.data || []} size="xs" />
      </div>
    </li>
  )
}
const Projects: NextPage<ProjectProps> = ({ projects }) => {
  return (
    <main className="mt-[100px]">
      <Container className="my-8 max-w-2xl">
        <h1 className="font-black text-3xl text-black">Projects</h1>
        <p>Here are all the noteworthy things I've worked on.</p>

        <ol className="mt-12 relative border-l border-gray-400">
          {projects.map((project, index) => (
            <>
              {index === 0 && (
                <li className="mb-10 relative">
                  <span className="absolute -left-32 w-16 h-16 text-black font-black text-2xl">Now</span>
                </li>
              )}

              {index > 0 &&
                project.date_ended &&
                project.date_ended.split('-')[0] !== projects[index - 1]?.date_ended?.split('-')[0] && (
                  <li className="mb-10 relative">
                    <span className="absolute -left-32 w-16 h-16 text-black font-black text-2xl">
                      {project.date_ended.split('-')[0]}
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
