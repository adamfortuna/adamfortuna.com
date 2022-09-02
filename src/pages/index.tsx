import { NextPage } from 'next'

import { ProjectsQuery, ProjectsDocument, Project } from '@/lib/graphql/output'
import { initializeApollo } from '@/lib/apolloClient'
import getPlaceholders from '@/lib/getPlaceholders'

import { ProjectCards } from '@/components/projects/ProjectCards'
import { Hero } from '@/components/marketing/Hero'
import { AboutHero, imagePlaceholders } from '@/components/marketing/AboutHero'

export interface Props {
  activeProjects: Project[]
  featuredProjects: Project[]
}

const Home: NextPage<Props> = ({ activeProjects, featuredProjects }) => {
  return (
    <main>
      <Hero />

      <AboutHero />

      <ProjectCards className="max-w-3xl" projects={activeProjects}>
        <h2>Active Projects</h2>
      </ProjectCards>

      <ProjectCards projects={featuredProjects}>
        <h2>Featured Projects</h2>
      </ProjectCards>
    </main>
  )
}

export default Home

export async function getStaticProps() {
  const apolloClient = initializeApollo()

  const { data: activeData } = await apolloClient.query<ProjectsQuery>({
    query: ProjectsDocument,
    variables: {
      filters: { active: { eq: true } },
      sort: ['priority:desc'],
    },
  })
  const activeProjects = activeData.projects?.data.map((projectData) => projectData.attributes) || []

  const { data: featuredData } = await apolloClient.query<ProjectsQuery>({
    query: ProjectsDocument,
    variables: {
      filters: { active: { eq: false }, featured: { eq: true } },
      sort: ['priority:desc'],
    },
  })
  const featuredProjects = featuredData.projects?.data.map((projectData) => projectData.attributes) || []

  return {
    props: {
      imagePlaceholders: await getPlaceholders(imagePlaceholders),
      activeProjects,
      featuredProjects,
    },
    revalidate: 60 * 60,
  }
}
