import glob from 'glob'
import { promises } from 'fs'
import path from 'path'
import frontmatter from 'front-matter'
import { bundleMDX } from 'mdx-bundler'
import { Article, ArticleFrontmatter } from '@/types'
import flatten from 'lodash/flatten'
import isArray from 'lodash/isArray'
import isDate from 'lodash/isDate'
import isString from 'lodash/isString'
import compact from 'lodash/compact'
import uniq from 'lodash/uniq'

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

const extractDateFromFile = (file: string) => {
  const filename = path.basename(file)
  const dateName = filename.match(/\d{4}-\d{2}-\d{2}/)
  return dateName ? dateName[0] : null
}

const parseAllTags = (tags: any): string[] => {
  if (isArray(tags)) {
    return tags
  }
  if (isString(tags)) {
    return tags
      .split(',')
      .map((t) => t.trim())
      .sort()
  }

  return []
}

const parseTags = (fontmatter: ArticleFrontmatter): string[] => {
  return uniq(compact(flatten([parseAllTags(fontmatter.categories), parseAllTags(fontmatter.tags)])))
}

const parseDate = (date: any, filePath: string) => {
  if (isDate(date)) {
    return new Date(date.getTime() - date.getTimezoneOffset() * 60000).toISOString().split('T')[0]
  }
  if (isString(date) && date.length === 10) {
    return date
  }
  return extractDateFromFile(filePath)
}

const extractTitleFromFile = (file: string) => {
  const filename = path.basename(file)
  const f = filename.match(/\d{4}-\d{2}-\d{2}[_|-](.*)\.md/)
  return f ? f[1] : file
}
const parseTitle = (title: any, filePath: string) => {
  if (isString(title) && title.length > 0) {
    return title
  }
  return extractTitleFromFile(filePath)
}

const parseProject = (file: string) => {
  const folder = path.dirname(file).split('/')
  if (folder[folder.length - 1].match(/\d+/)) {
    return folder[folder.length - 2]
  }
  return null
}

const parseSlug = (fontmatter: ArticleFrontmatter, filePath: string) => {
  if (fontmatter.url) {
    return null
  }
  if (fontmatter.href) {
    return null
  }

  const project = parseProject(filePath)
  if (project && ['adamfortuna', 'minafi', 'hardcover', 'codeschool'].indexOf(project) !== -1) {
    const uniqSlug = fontmatter.slug || fontmatter.permalink || fontmatter.id || null
    return uniqSlug || null
  }
  return null
}

const parseHref = (fontmatter: ArticleFrontmatter, filePath: string) => {
  if (fontmatter.url) {
    return fontmatter.url
  }
  if (fontmatter.href) {
    return fontmatter.href
  }

  const slug = parseSlug(fontmatter, filePath)
  return slug ? `/articles/${slug}` : null
}

export const getArticleByPath = async (filePath: string, includeContent: boolean = false): Promise<Article> => {
  try {
    const contentsMarkdown = (await promises.readFile(filePath)).toString()
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

    const contentAttributes = content.attributes as ArticleFrontmatter

    const front = {
      ...contentAttributes,
      ...{
        title: parseTitle(contentAttributes.title, filePath),
        date: parseDate(contentAttributes.date, filePath),
        tags: parseTags(contentAttributes),
        href: parseHref(contentAttributes, filePath),
        project: parseProject(filePath),
        slug: parseSlug(contentAttributes, filePath),
        path: filePath,
      },
    }

    return {
      ...front,
      ...{ content: result },
    } as Article
  } catch (e) {
    throw new Error(`Unable to parse file: ${filePath}. \n\nError: ${e}`)
  }
}

export const getProjects = async () => {
  const filePath = `${process.env.ROOT_PATH}/content/articles/projects/`
  const files = (await getDirectories(filePath)) as string[]
  const fileLoaders = files.map((file) => getArticleByPath(file, false))
  return Promise.all(fileLoaders)
}

export const getArticles = async (includeContent: boolean = false): Promise<Article[]> => {
  const filePath = `${process.env.ROOT_PATH}/content/articles/`
  const files = (await getDirectories(filePath)) as string[]
  const fileLoaders = files.map((file) => getArticleByPath(file, includeContent))
  return Promise.all(fileLoaders)
}

export const getArticleBySlug = async (slug: string) => {
  const articles = await getArticles(false)
  const article = articles.filter((a) => a.slug === slug)[0]
  return getArticleByPath(article.path, true)
}
