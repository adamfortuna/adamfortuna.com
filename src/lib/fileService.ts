import path from 'path'
import { promises as fs } from 'fs'
import { Project } from '@/types'

export const getProjects = async () => {
  const jsonDirectory = path.join(process.cwd(), 'src', 'data')
  const data = await fs.readFile(`${jsonDirectory}/projects.json`, 'utf8')
  return JSON.parse(data) as Project[]
}
