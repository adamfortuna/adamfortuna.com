import Head from 'next/head'
import { GetStaticPropsContext, NextPage } from 'next'

import { ProjectsQuery, ProjectsDocument, Project } from "@/lib/graphql/output";
import { initializeApollo } from "@/lib/apolloClient";
import { Container } from "@/components/tailwind/Container";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { Footer } from '@/components/tailwind/Footer'
import { Header } from '@/components/tailwind/Header'


export interface ProjectProps {
  projects: Project[]
}

const Projects: NextPage<ProjectProps> = ({projects}) => {
  return (
    <>
      <Head>
        <title>👋 Hey hey! I'm Adam.</title>
        <meta
          name="description"
          content="Hey hey! I'm a Adam Fortuna. I create stuff online for fun."
        />
      </Head>
      <Header />
      <main>
        <Container className="my-8">
          <h1 className="font-black text-3xl">Projects</h1>
          { projects.map((project) =>
            <ProjectCard project={project} />
          )}
        </Container>
      </main>
      <Footer />
    </>
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