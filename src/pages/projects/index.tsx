import { NextPage } from 'next'
import Link from 'next/link'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/pro-solid-svg-icons'

import { initializeApollo } from '@/lib/apolloClient'
import { ProjectsQuery, ProjectsDocument, Project } from '@/lib/graphql/output'
import { ProjectIcon } from '@/components/projects/ProjectIcon'

import { Container } from '@/components/layout/Container'
import { ProjectStateTag } from '@/components/projects/ProjectStateTag'
import { TechnologyTags } from '@/components/technologies/TechnologyTags'

export interface ProjectProps {
  projects: Project[]
}

const Projects: NextPage<ProjectProps> = ({ projects }) => {
  return (
    <main>
      <Container className="my-8">
        <h1 className="font-black text-3xl">Projects</h1>
        <p>Here are all the noteworthy things I've worked on.</p>

        <table className="bg-white">
          <thead>
            <tr>
              <th />
              <th>Year</th>
              <th>Project</th>
              <th>Made At</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody className="gap-4">
            {projects.map((project) => (
              <tr key={`project-${project.slug}`}>
                <td>{project.featured && <FontAwesomeIcon icon={faStar} className="text-yellow-400" />}</td>
                <td>{project.years_active}</td>
                <td className="flex items-center">
                  <div>
                    <ProjectIcon icon={project.icon} />
                  </div>
                  <div>
                    <Link href={`/projects/${project.slug}`} passHref>
                      <a className="underline hover:no-underline font-bold">{project.title}</a>
                    </Link>

                    <p>{project.description}</p>

                    <TechnologyTags technologies={project.technologies?.data || []} />
                  </div>
                </td>
                <td>
                  {project.parent_project?.data?.attributes?.title && (
                    <Link href={`/projects/${project.parent_project.data.attributes.slug}`} passHref>
                      <a className="underline hover:no-underline">{project.parent_project.data.attributes.title}</a>
                    </Link>
                  )}
                </td>
                <td>
                  <ProjectStateTag state={project.state}>{project.state_description}</ProjectStateTag>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
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
    revalidate: 1,
  }
}
