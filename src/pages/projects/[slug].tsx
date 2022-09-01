import { GetStaticPropsContext, NextPage } from 'next'
import Link from 'next/link'

import { Project, ProjectsQuery, ProjectsDocument, ProjectQuery, ProjectDocument } from '@/lib/graphql/output'

import { initializeApollo } from '@/lib/apolloClient'
import { ProjectIcon } from '@/components/projects/ProjectIcon'
import { Container } from '@/components/layout/Container'

export interface ProjectProps {
  project: Project
}

const Projects: NextPage<ProjectProps> = ({ project }) => {
  return (
    <main className="mt-[100px]">
      <Container>
        <div>
          <p>
            <Link href="/projects">
              <a className="text-gray-500 text-sm tracking-tight hover:underline">← Projects</a>
            </Link>
          </p>
          <h1 className="font-black text-4xl">{project.title}</h1>
          <ProjectIcon icon={project.icon} width={32} height={32} />

          <p>{project.description}</p>
        </div>
      </Container>
    </main>
  )
}

export default Projects

export async function getStaticPaths() {
  const apolloClient = initializeApollo()

  const { data } = await apolloClient.query<ProjectsQuery>({
    query: ProjectsDocument,
  })

  return {
    paths: data.projects?.data.map((p) => ({
      params: {
        slug: p.attributes?.slug,
      },
    })),
    fallback: false,
  }
}

export async function getStaticProps({ params }: GetStaticPropsContext) {
  const apolloClient = initializeApollo()

  const { data } = await apolloClient.query<ProjectQuery>({
    query: ProjectDocument,
    variables: { slug: params?.slug },
  })

  return {
    props: { project: data.projects?.data[0].attributes },
    revalidate: 60 * 60,
  }
}
