import Head from 'next/head'
import { GetStaticPropsContext, NextPage } from 'next'
import {
  Project, 
  ProjectsQuery, 
  ProjectsDocument, 
  ProjectQuery, 
  ProjectDocument
} from "@/lib/graphql/output";

import { initializeApollo } from "@/lib/apolloClient";
import { Footer } from '@/components/tailwind/Footer'
import { Header } from '@/components/tailwind/Header'
import { Container } from "@/components/tailwind/Container";

export interface ProjectProps {
  project: Project
}

const Projects: NextPage<ProjectProps> = ({project}) => {
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
        <Container>
          <div>
            {project.title}
          </div>
        </Container>
      </main>
      <Footer />
    </>
  )
}

export default Projects

export async function getStaticPaths() {
  const apolloClient = initializeApollo();

  const { data } = await apolloClient.query<ProjectsQuery>({
    query: ProjectsDocument
  });

  return {
    paths: data.projects?.data.map((p) => ({
      params: {
        slug: p.attributes?.slug
      }
    })),
    fallback: false
  }
}

export async function getStaticProps({ params }: GetStaticPropsContext) {
  const apolloClient = initializeApollo();

  const { data } = await apolloClient.query<ProjectQuery>({
    query: ProjectDocument,
    variables: { slug: params?.slug }
  });

  return {
    props: { project: data.projects?.data[0].attributes },
    revalidate: 1
  }
}