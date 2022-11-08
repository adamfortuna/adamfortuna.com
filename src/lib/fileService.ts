import glob from 'glob'
import { promises } from 'fs'
import frontmatter from 'front-matter'
import { bundleMDX } from 'mdx-bundler'

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

export const getArticleByPath = async (path: string, includeContent: boolean = true) => {
  const contentsMarkdown = (await promises.readFile(path)).toString()
  const content = frontmatter(contentsMarkdown)

  let result = null
  const body = content.body.trim()
  if (includeContent && body.length > 0) {
    result = (
      await bundleMDX({
        cwd: `${__dirname}/../../../src/`,
        source: body,
      })
    ).code
  }

  return {
    ...(content.attributes as Object),
    ...{ content: result },
  }
}

export const getProjects = async () => {
  const path = `${__dirname}/../../../content/articles/projects/`
  const files = (await getDirectories(path)) as string[]
  const fileLoaders = files.map((file) => getArticleByPath(file, false))
  return Promise.all(fileLoaders)
}
