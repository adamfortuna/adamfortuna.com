import { NextPage } from 'next'

import { ProjectsQuery, ProjectsDocument, Project } from '@/lib/graphql/output'
import { initializeApollo } from '@/lib/apolloClient'

import { ActiveProjects } from '@/components/projects/ActiveProjects'
// import { FeaturedProjects } from '@/components/projects/FeaturedProjects'
import { Hero } from '@/components/marketing/Hero'

export interface Props {
  activeProjects: Project[]
  featuredProjects: Project[]
}

const Home: NextPage<Props> = ({ activeProjects }) => {
  return (
    <main>
      <Hero />
      <ActiveProjects projects={activeProjects} />
      {/* <FeaturedProjects projects={featuredProjects} /> */}
    </main>
  )
}

export default Home

export async function getStaticProps() {
  const apolloClient = initializeApollo()

  const { data } = await apolloClient.query<ProjectsQuery>({
    query: ProjectsDocument,
    variables: {
      filters: { active: { eq: true } },
      sort: ['priority:desc'],
    },
  })

  const projects = data.projects?.data.map((projectData) => projectData.attributes) || []

  return {
    props: {
      activeProjects: projects,
      // featuredProjects: projects
    },
    revalidate: 1,
  }
}
