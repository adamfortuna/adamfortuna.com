import { NextPage } from 'next'

import { ProjectsQuery, ProjectsDocument, Project, PostsQuery, PostsDocument, Post } from '@/lib/graphql/output'

import { initializeApollo } from '@/lib/apolloClient'
import getPlaceholders from '@/lib/getPlaceholders'

import { ProjectCards } from '@/components/projects/ProjectCards'
import { PostCards } from '@/components/posts/PostCards'
import { Hero } from '@/components/marketing/Hero'
import { AboutHero, imagePlaceholders } from '@/components/marketing/AboutHero'

export interface Props {
  activeProjects: Project[]
  featuredProjects: Project[]
  recentPosts: Post[]
}

const Home: NextPage<Props> = ({ activeProjects, featuredProjects, recentPosts }) => {
  return (
    <main>
      <Hero />

      <AboutHero />

      <ProjectCards className="min-h-screen bg-white py-24" projects={activeProjects}>
        <div className="mb-8 text-center">
          <h2 className="font-bold text-3xl tracking-tight">What I'm Working On</h2>
          <p>I'm always working on something. Here's what I'm spending most of my time on right now.</p>
        </div>
      </ProjectCards>

      <ProjectCards className="min-h-screen bg-white py-24" projects={featuredProjects}>
        <div className="mb-8 text-center">
          <h2 className="font-bold text-3xl tracking-tight">Featured Projects</h2>
          <p>A few previous projects and places I've worked</p>
        </div>
      </ProjectCards>

      <PostCards posts={recentPosts} className="min-h-screen bg-white py-24">
        <div className="mb-8 text-center">
          <h2 className="font-bold text-3xl tracking-tight">Recent Articles</h2>
          <p>Recent things I've written</p>
        </div>
      </PostCards>
    </main>
  )
}

export default Home

async function indexProps() {
  const apolloClient = initializeApollo()

  // Active Projects
  const { data: activeData } = await apolloClient.query<ProjectsQuery>({
    query: ProjectsDocument,
    variables: {
      filters: { active: { eq: true }, featured: { eq: true } },
      sort: ['priority:desc'],
    },
  })
  const activeProjects = activeData.projects?.data.map((projectData) => projectData.attributes) || []

  // Featured Projects
  const { data: featuredData } = await apolloClient.query<ProjectsQuery>({
    query: ProjectsDocument,
    variables: {
      filters: { active: { eq: false }, featured: { eq: true } },
      sort: ['priority:desc'],
    },
  })
  const featuredProjects = featuredData.projects?.data.map((projectData) => projectData.attributes) || []

  // Recent Posts
  const { data: recentPostsData } = await apolloClient.query<PostsQuery>({
    query: PostsDocument,
    variables: {
      sort: ['date_published:desc'],
    },
  })
  const recentPosts = recentPostsData.posts?.data.map((postData) => postData.attributes)

  return {
    imagePlaceholders: await getPlaceholders(imagePlaceholders),
    activeProjects,
    featuredProjects,
    recentPosts,
  }
}

export async function getStaticProps() {
  return {
    props: await indexProps(),
    revalidate: 60 * 60,
  }
}
