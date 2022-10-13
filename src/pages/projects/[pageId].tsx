/* eslint-disable no-nested-ternary, sonarjs/no-duplicate-string */
import { GetStaticPropsContext, NextPage } from 'next'

import { ExtendedRecordMap } from 'notion-types'
import notion from '@/lib/notionClient'
import { NotionRenderer } from 'react-notion-x'

import { Container } from '@/components/layout/Container'

export interface ProjectPageProps {
  project: ExtendedRecordMap
  pageId: string
}

const ProjectPage: NextPage<ProjectPageProps> = ({ project, pageId }) => {
  return (
    <main className="mt-[80px] md:mt-[100px]">
      <Container className="my-8 max-w-3xl">
        <NotionRenderer
          recordMap={project}
          fullPage={true}
          darkMode={false}
          rootPageId={pageId}
        />
      </Container>
    </main>
  )
}

export default ProjectPage

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: true,
  }
}

export async function getStaticProps({ params }: GetStaticPropsContext) {
  const pageId = (params?.pageId as string) || "root"
  const recordMap = await notion.getPage(pageId)

  return {
    props: { project: recordMap },
    revalidate: 60 * 60,
  }
}
