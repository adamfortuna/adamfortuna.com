import ProjectListing from '@/components/projects/ProjectListing'
import { getProjects } from '@/lib/fileService'

export const revalidate = 60 * 60 // 60 minutes
export default async function Projects() {
  const projects = await getProjects()

  return <ProjectListing projects={projects} />
}
