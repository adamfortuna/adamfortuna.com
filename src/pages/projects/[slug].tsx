import { GetStaticPropsContext, NextPage } from 'next'
import Link from 'next/link'
import { AnimatePresence, motion } from 'framer-motion'
import { useImagePlaceholder } from '@/hooks/useImagePlaceholder'

import { Project, ProjectsQuery, ProjectsDocument, ProjectQuery, ProjectDocument } from '@/lib/graphql/output'
import { initializeApollo } from '@/lib/apolloClient'
import getPlaceholders from '@/lib/getPlaceholders'
import { ProjectIcon } from '@/components/projects/ProjectIcon'
import { Container } from '@/components/layout/Container'
import { Image } from '@/components/layout/Image'

export interface ProjectProps {
  project: Project
}

const Projects: NextPage<ProjectProps> = ({ project }) => {
  const blurDataURL = useImagePlaceholder(project.poster?.data?.attributes?.hash as string)

  return (
    <AnimatePresence>
      <main>
        {project.poster?.data?.attributes ? (
          <div className="bg-cover" style={{ backgroundImage: `url(${blurDataURL})` }}>
            <Container className="pt-[100px] relative">
              <motion.div
                className={`w-full h-[${project.poster.data.attributes.height}]`}
                layoutId={`${project.slug}-poster`}
              >
                <Image
                  width={project.poster.data.attributes.width as number}
                  height={project.poster.data.attributes.height as number}
                  src={project.poster.data.attributes.hash as string}
                />
              </motion.div>
            </Container>
          </div>
        ) : (
          <div className="mt-[100px]" />
        )}
        <Container className="relative">
          <p>
            <Link href="/projects">
              <a className="text-gray-500 text-sm tracking-tight hover:underline">← Projects</a>
            </Link>
          </p>
          <h1 className="font-black text-4xl">{project.title}</h1>
          <ProjectIcon icon={project.icon} size={32} />

          <p>{project.description}</p>
        </Container>
      </main>
    </AnimatePresence>
  )
}

export default Projects

export async function getStaticPaths() {
  const apolloClient = initializeApollo()

  const { data } = await apolloClient.query<ProjectsQuery>({
    query: ProjectsDocument,
    variables: {
      filters: { has_profile: { eq: true }}
    }
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
    variables: {
      slug: params?.slug
    },
  })

  const project = data.projects?.data[0].attributes
  const imagePlaceholders = [project?.poster?.data?.attributes?.hash].filter((n) => n) as string[]

  return {
    props: {
      project: data.projects?.data[0].attributes,
      imagePlaceholders: await getPlaceholders(imagePlaceholders),
    },
    revalidate: 60 * 60,
  }
}
