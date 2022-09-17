/* eslint-disable no-nested-ternary */
import { useState } from 'react'
import { NextPage } from 'next'
import sortBy from 'lodash/sortBy'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/pro-regular-svg-icons'

import { initializeApollo } from '@/lib/apolloClient'
import { ProjectsQuery, ProjectsDocument, Project } from '@/lib/graphql/output'

import { Container } from '@/components/layout/Container'
import { ProjectsTimeline } from '@/components/projects/ProjectsTimeline'

export interface ProjectProps {
  projects: Project[]
}

const Projects: NextPage<ProjectProps> = ({ projects }) => {
  const [sortedProjects, setSortedProjects] = useState(projects)
  const [sortedBy, setSortedBy] = useState<'date_started' | 'date_ended'>('date_ended')

  const setSortBy = (sortByField: 'date_started' | 'date_ended') => {
    setSortedBy(sortByField)
    setSortedProjects(sortBy(projects, [sortByField, 'priority']).reverse())
  }

  return (
    <main className="mt-[80px] md:mt-[100px]">
      <Container className="my-8 max-w-3xl">
        <div className="prose">
          <h1>Projects</h1>
          <p>
            Here are all the noteworthy things I've worked on. Many were{' '}
            <span className="font-bold bg-blue-200 text-blue-900 px-1 py-0.5 rounded">solo projects</span>, while a
            bunch were on a <span className="font-bold bg-green-200 text-green-900 px-1 py-0.5 rounded">team</span> -
            some employed.
          </p>
          <p>
            Scroll down to the bottom to see the most embaressing projects I made in high school. 🙈 We all have to
            start somewhere!
          </p>
          <p>
            Icon size indicates how "important" I thought that project is/was in my life at the time and how involved I
            was.
          </p>
        </div>

        <div className="flex justify-end items-center space-x-2 mt-8">
          <span className="text-xs font-semibold">Sort reverse by</span>

          <span className="isolate inline-flex rounded-md shadow-sm">
            <button
              type="button"
              onClick={() => setSortBy('date_started')}
              className={`space-x-1 relative inline-flex items-center rounded-l-md border border-gray-300 bg-white px-2 py-1 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 ${
                sortedBy === 'date_started' ? ' bg-white' : 'hover:bg-gray-50 bg-white'
              }`}
            >
              {sortedBy === 'date_started' && <FontAwesomeIcon icon={faCheck} className="h-4 w-4 text-green-500" />}
              <span>Project start date</span>
            </button>
            <button
              type="button"
              onClick={() => setSortBy('date_ended')}
              className={`space-x-1 relative -ml-px inline-flex items-center rounded-r-md border border-gray-300 bg-white px-2 py-1 text-sm font-medium text-gray-700  focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 ${
                sortedBy === 'date_ended' ? ' bg-white' : 'hover:bg-gray-50 bg-white'
              }`}
            >
              {sortedBy === 'date_ended' && <FontAwesomeIcon icon={faCheck} className="h-4 w-4 text-green-500" />}
              <span>Project end date</span>
            </button>
          </span>
        </div>
        <ProjectsTimeline projects={sortedProjects} sortField={sortedBy} />
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
