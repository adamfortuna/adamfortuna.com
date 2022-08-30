import { NextPage } from 'next'

import { ProjectsQuery, ProjectsDocument, Project } from '@/lib/graphql/output'
import { initializeApollo } from '@/lib/apolloClient'

import { FeaturedProjects } from '@/components/projects/FeaturedProjects'

export interface Props {
  projects: Project[]
}

const Home: NextPage<Props> = ({ projects }) => {
  return (
    <main>
      <FeaturedProjects projects={projects} />
    </main>
  )
}

export default Home

export async function getStaticProps() {
  const apolloClient = initializeApollo()

  const { data } = await apolloClient.query<ProjectsQuery>({
    query: ProjectsDocument,
  })

  const projects = data.projects?.data.map((projectData) => projectData.attributes)

  return {
    props: { projects: projects || [] },
    revalidate: 1,
  }
}
