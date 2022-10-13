import ArticleType from "@/types/ArticleType";
import { Client } from "@notionhq/client";
import { promises } from 'fs'
import { bundleMDX } from 'mdx-bundler'

const notion = new Client({
  auth: process.env.NOTION_TOKEN,
});

export const getProjects = async () => {
  const projects = await notion.databases.query({
    database_id: String(process.env.NOTION_PROJECTS_DB)
  })

  return projects.results.map((project) => {
    const props = project.properties
    return {
      ...props,
      title: props.title.title[0]?.plain_text || null,
      date_ended: props.date_ended?.date?.start || null,
      date_started: props.date_started?.date?.start || null,
      category: props.category?.select?.name,
      priority: props.priority?.number,
      role: props.role.rich_text[0]?.plain_text || null,
      salary: props.salary.rich_text[0]?.plain_text || null,
      size: props.size?.select?.name,
      slug: props.slug.rich_text[0]?.plain_text || null,
      state: props.state?.select?.name,
      state_description: props.state_description.rich_text[0].plain_text,
      years_active: props.years_active.rich_text[0].plain_text || null,
    }  
  })
};

type MultiSelectType = {
  name: string
}

const parseArticle = (article:any) => {
  const props = article.properties,
        tags = props.tags.multi_select.map((tag:MultiSelectType) => tag.name),
        slug = props.slug.title[0]?.plain_text,
        link = props.link.rich_text[0]?.plain_text || null

  return {
    slug,
    tags,
    title: props.title.rich_text[0]?.plain_text || null,
    date_published: props.date_published?.date?.start || null,
    visible: props.visible.checkbox || false,
    state: props.state.select.name,
    href: props.visible.checkbox ? `/articles/${slug}` : link,
    content_path: props.content_path.rich_text[0]?.plain_text || null,
  }
} 

export const getArticles = async () => {
  const articles = await notion.databases.query({
    database_id: String(process.env.NOTION_ARTICLES_DB)
  })
  return articles.results.map((article) => parseArticle(article))
};

export const getArticleBySlug = async (slug:string) => {
  const articles = await notion.databases.query({
    database_id: String(process.env.NOTION_ARTICLES_DB),
    filter: {
      property: 'slug',
      title: {
        equals: slug
      }
    }
  })

  const article = parseArticle(articles.results[0])

  let content = {} as ArticleType
  if(article.content_path) {
    content.contentMarkdown = (await promises.readFile(`content/${article.content_path}`)).toString()
    const result = await bundleMDX({
      source: content.contentMarkdown,
      cwd: '/Users/adamfortuna/code/adamfortuna/adamfortuna.com/src',
    })
    content.content = result.code
  }

  return {
    ...article,
    ...content
  }
}
