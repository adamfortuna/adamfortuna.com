/* eslint-disable no-nested-ternary, sonarjs/no-duplicate-string */
import { useState } from 'react'
import clsx from 'clsx'
import { NextPage } from 'next'
import sortBy from 'lodash/sortBy'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/pro-regular-svg-icons'

import { Project } from '@/types'

import { Container } from '@/components/layout/Container'
import { ProjectsTimeline } from '@/components/projects/ProjectsTimeline'
import { ProjectTags } from '@/components/projects/ProjectTags'
import { getProjects } from '@/lib/fileService'

export interface ProjectProps {
  projects: Project[]
}

type SortType = 'date_started' | 'date_ended' | 'technology' | 'project'
interface Sorters {
  name: string
  sortBy: SortType
}

const sortButtons = [
  {
    name: 'End date',
    sortBy: 'date_ended',
  },
  {
    name: 'Start date',
    sortBy: 'date_started',
  },
  {
    name: 'Technology',
    sortBy: 'technology',
  },
] as Sorters[]

const Projects: NextPage<ProjectProps> = ({ projects }) => {
  const sortProjects = (allProjects: Project[], sortByField: SortType) => {
    return sortBy(allProjects, [sortByField, 'priority']).reverse()
  }

  const [sortedBy, setSortedBy] = useState<SortType>('date_ended')
  const [sortedProjects, setSortedProjects] = useState(sortProjects(projects, 'date_ended'))

  const updateResults = (sortByField: SortType) => {
    setSortedProjects(sortProjects(projects, sortByField))
  }

  const setSortBy = (sortByField: SortType) => {
    setSortedBy(sortByField)
    updateResults(sortByField)
  }

  return (
    <main className="mt-[80px] md:mt-[100px]">
      <Container className="my-8 max-w-3xl">
        <h1 className="text-left font-serif font-bold text-4xl mb-4">Projects</h1>
        <div className="prose">
          <p>
            I <b>love</b> building websites. Here are all the noteworthy (and not so noteworthy) things I've worked on.
            Many were <span className="font-bold bg-blue-200 text-blue-900 px-1 py-0.5 rounded">solo projects</span>,
            while a bunch were on a{' '}
            <span className="font-bold bg-green-200 text-green-900 px-1 py-0.5 rounded">team</span> - some employed.
          </p>
          <p>
            Scroll down to the bottom to see the most embarrassing projects I made in high school. 🙈 We all have to
            start somewhere! My aim is to be <b>radically honest</b> about my <b>failures</b>, my <b>compensation 💸</b>{' '}
            and how I got here.
          </p>
          <p>
            Icon size indicates how "important" I thought that project is (or was) in my life at the time and how
            involved I was.
          </p>
        </div>

        <div className="flex items-start md:justify-between md:items-center mt-8 flex-col md:flex-row space-y-4 md:space-y-0">
          <div className="flex flex-col gap-1">
            <span className="text-xs font-semibold">Organize by</span>

            <span className="isolate inline-flex rounded-md shadow-sm">
              {sortButtons.map((sortButton, index) => (
                <button
                  type="button"
                  key={`button-${sortButton.sortBy}`}
                  onClick={() => setSortBy(sortButton.sortBy)}
                  className={clsx(
                    'space-x-1 relative -ml-px inline-flex items-center border border-gray-300 bg-white px-2 py-1 text-sm font-medium text-gray-700  focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500',
                    sortedBy === sortButton.sortBy ? 'bg-white' : 'hover:bg-gray-50 bg-white',
                    index === 0 ? 'rounded-l-md' : '',
                    index === sortButtons.length - 1 ? 'rounded-r-md' : '',
                  )}
                >
                  {sortedBy === sortButton.sortBy && (
                    <FontAwesomeIcon icon={faCheck} className="h-4 w-4 text-green-500" />
                  )}
                  <span>{sortButton.name}</span>
                </button>
              ))}
            </span>
          </div>
        </div>

        {(sortedBy === 'date_started' || sortedBy === 'date_ended') && (
          <ProjectsTimeline projects={sortedProjects} sortField={sortedBy} />
        )}

        {sortedBy === 'technology' && <ProjectTags projects={projects} />}
      </Container>
    </main>
  )
}

export default Projects

export async function getStaticProps() {
  const projects = await getProjects()
  return {
    props: { projects },
  }
}
