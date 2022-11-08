import glob from 'glob'
import { promises } from 'fs'
import frontmatter from 'front-matter'
import {bundleMDX} from 'mdx-bundler'

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
  const fileLoaders = files.map((file) => getArticleByPath(file))
  return Promise.all(fileLoaders)
}

export const getArticleByPath = async(path:string) => {
  const contentsMarkdown = (await promises.readFile(path)).toString()
  const content = frontmatter(contentsMarkdown)

  const result = await bundleMDX({  source: content.body })

  return {
    ...(content.attributes as Object),
    ...{ content: result.code },
  }
}