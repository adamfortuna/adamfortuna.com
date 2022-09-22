/* eslint-disable no-nested-ternary, sonarjs/no-duplicate-string */
import { useState } from 'react'
import { NextPage } from 'next'
import sortBy from 'lodash/sortBy'
import filter from 'lodash/filter'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/pro-regular-svg-icons'

import { initializeApollo } from '@/lib/apolloClient'
import { ProjectsQuery, ProjectsDocument, Project } from '@/lib/graphql/output'

import { Container } from '@/components/layout/Container'
import { ProjectsTimeline } from '@/components/projects/ProjectsTimeline'
import clsx from 'clsx'

export interface ProjectProps {
  projects: Project[]
}

interface Filters {
  name: string
  condition: 'job' | 'app' | 'experience' | 'blog' | null
}

type FilterType = 'job' | 'app' | 'experience' | 'blog' | null
type SortType = 'date_started' | 'date_ended'

const filters = [
  {
    name: 'All',
    condition: null,
  },
  {
    name: 'Blogs',
    condition: 'blog',
  },
  {
    name: 'Apps',
    condition: 'app',
  },
  {
    name: 'Experiences',
    condition: 'experience',
  },
  {
    name: 'Jobs',
    condition: 'job',
  },
] as Filters[]

const Projects: NextPage<ProjectProps> = ({ projects }) => {
  const [sortedProjects, setSortedProjects] = useState(projects)
  const [sortedBy, setSortedBy] = useState<SortType>('date_ended')
  const [filterBy, setFilteredBy] = useState<FilterType>(null)

  const sortProjects = (allProjects: Project[], sortByField: SortType) => {
    return sortBy(allProjects, [sortByField, 'priority']).reverse()
  }

  const updateResults = (filterByField: FilterType, sortByField: SortType) => {
    const filteredProjects = filterByField
      ? filter(projects, (project) => project.category === filterByField)
      : projects
    setSortedProjects(sortProjects(filteredProjects, sortByField))
  }

  const setSortBy = (sortByField: SortType) => {
    setSortedBy(sortByField)
    updateResults(filterBy, sortByField)
  }

  const setFilterBy = (filterByField: FilterType) => {
    setFilteredBy(filterByField)
    updateResults(filterByField, sortedBy)
  }

  const filterByStyle = (currentFilter: FilterType) => {
    return filterBy === currentFilter ? ' bg-white' : 'hover:bg-gray-50 bg-white'
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
            start somewhere! The hope with this list is to be <b>radically honest</b> about my <b>failures</b>, my{' '}
            <b>compensation 💸</b> and how I got here.
          </p>
          <p>
            Icon size indicates how "important" I thought that project is/was in my life at the time and how involved I
            was.
          </p>
        </div>

        <div className="flex items-start md:justify-between md:items-center mt-8 flex-col md:flex-row space-y-4 md:space-y-0">
          <div className="flex flex-col gap-1">
            <span className="text-xs font-semibold">Only show</span>
            <span className="isolate inline-flex rounded-md shadow-sm">
              {filters.map((currentFilter, index) => (
                <button
                  type="button"
                  key={`filter-${currentFilter.name}`}
                  onClick={() => setFilterBy(currentFilter.condition)}
                  className={clsx(
                    'space-x-1 relative inline-flex items-center border border-gray-300 bg-white px-2 py-1 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500',
                    filterByStyle(null),
                    index === 0 ? 'rounded-l-md' : '',
                    index === filters.length - 1 ? 'rounded-r-md' : '',
                  )}
                >
                  {filterBy === currentFilter.condition && (
                    <FontAwesomeIcon icon={faCheck} className="h-4 w-4 text-green-500" />
                  )}
                  <span>{currentFilter.name}</span>
                </button>
              ))}
            </span>
          </div>

          <div className="flex flex-col gap-1">
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
