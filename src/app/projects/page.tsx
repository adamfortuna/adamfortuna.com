import { Container } from '@/components/layout/Container'
import ProjectListing from '@/components/projects/ProjectListing'
import { getProjects } from '@/lib/fileService'

export const revalidate = 60 * 60 // 60 minutes
export default async function Projects() {
  const projects = await getProjects()

  return (
    <Container className="max-w-3xl">
      <div className="prose dark:prose-invert">
        <h1 className="font-handwriting text-6xl text-blue-700 mb-2" style={{ marginTop: '0' }}>
          Projects
        </h1>
        <p>
          I <b>love</b> building websites. Here are all the noteworthy (and not so noteworthy) things I've worked on.
          Many were <span className="font-bold bg-blue-200 text-blue-900 px-1 py-0.5 rounded">solo projects</span>,
          while a bunch were on a{' '}
          <span className="font-bold bg-green-200 text-green-900 px-1 py-0.5 rounded">team</span> - some employed.
        </p>
        <p>
          Scroll down to the bottom to see the most embarrassing projects I made in high school. 🙈 We all have to start
          somewhere! My aim is to be <b>radically honest</b> about my <b>failures</b>, my <b>compensation 💸</b> and how
          I got here.
        </p>
        <p>
          Icon size indicates how "important" I thought that project is (or was) in my life at the time and how involved
          I was.
        </p>
      </div>

      <ProjectListing projects={projects} />
    </Container>
  )
}
