import { GetStaticPropsContext, NextPage } from 'next'

import { initializeApollo } from '@/lib/apolloClient'
import { ProjectsQuery, ProjectsDocument, Project } from '@/lib/graphql/output'

import { ProjectCard } from '@/components/projects/ProjectCard'
import { Container } from '@/components/tailwind/Container'


export interface ProjectProps {
  projects: Project[]
}

const Projects: NextPage<ProjectProps> = ({projects}) => {
  return (
    <main>
      <Container className="my-8">
        <h1 className="font-black text-3xl">Projects</h1>
        { projects.map((project) =>
          <ProjectCard project={project} />
        )}
      </Container>
    </main>
  )
}

export default Projects

export async function getStaticProps({ params }: GetStaticPropsContext) {
  const apolloClient = initializeApollo();

  const { data } = await apolloClient.query<ProjectsQuery>({
    query: ProjectsDocument,
  });

  return {
    props: { projects: data?.projects?.data.map(projectData => projectData.attributes) },
    revalidate: 1
  }
}