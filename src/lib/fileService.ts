import glob from 'glob'
import { readFile } from 'fs'
import frontmatter from 'front-matter'

const getDirectories = async (src: string) => {
  return new Promise((resolve, reject) => {
    glob(`${src}/**/*`, (err, results) => {
      if (err) {
        reject(err)
      } else {
        resolve(results.filter((file) => file.endsWith('.md')))
      }
    })
  })
}

export const getProjects = async () => {
  const files = (await getDirectories('content/articles/projects')) as string[]

  const fileLoader = files.map(async (file) => {
    return new Promise((resolve, reject) => {
      readFile(file, (err, data) => {
        if (err) {
          return reject(err)
        }

        const contentsMarkdown = data.toString()
        const content = frontmatter(contentsMarkdown)

        return resolve({
          ...(content.attributes as Object),
          ...{ body: content.body },
        })
      })
    })
  })

  return Promise.all(fileLoader)
}
