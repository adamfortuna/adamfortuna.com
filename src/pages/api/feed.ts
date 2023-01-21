import { NextApiRequest, NextApiResponse } from 'next'
import nc from 'next-connect'
import { getRecentFeed } from '@/queries/wordpress/getRecentFeed'

const metadata = {
  title: 'AdamFortuna.com',
  description: 'Exploring the intersection of minimalism, mindfulness and technology.',
  link: process.env.NEXT_PUBLIC_URL,
}

const handler = nc()

/**
 * Respond with an rss.xml
 *
 * @param {object} req NextApiRequest
 * @param {object} res NextApiResponse
 */
handler.get(async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const articles = await getRecentFeed({ count: 20, projects: ['adamfortuna'] })

    const postItems = articles
      .map((article) => {
        const url = `${process.env.NEXT_PUBLIC_URL}/${article.slug}`

        return `<item>
      <title>${article.title}</title>
      <link>${url}</link>
      <guid>${url}</guid>
      <pubDate>${article.date}</pubDate>
      ${article.excerpt && `<description>${article.excerpt.replace('&', '&amp;')}</description>`}
      <content:encoded><![CDATA[
        ${article.content}
      ]]></content:encoded>
    </item>`
      })
      .join('')

    // Add urlSet to entire sitemap string
    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0"
  xmlns:content="http://purl.org/rss/1.0/modules/content/"
  xmlns:wfw="http://wellformedweb.org/CommentAPI/"
  xmlns:dc="http://purl.org/dc/elements/1.1/"
  xmlns:atom="http://www.w3.org/2005/Atom"
  xmlns:sy="http://purl.org/rss/1.0/modules/syndication/"
  xmlns:slash="http://purl.org/rss/1.0/modules/slash/"
>
  <channel>
    <title>${metadata.title}</title>
    <description>${metadata.description}</description>
    <link>${metadata.link}</link>
    <lastBuildDate>${articles[0].date}</lastBuildDate>
    ${postItems}
  </channel>
</rss>
`

    // set response content header to xml
    res.setHeader('Content-Type', 'text/xml')

    return res.status(200).send(sitemap)
  } catch (e: unknown) {
    if (!(e instanceof Error)) {
      throw e
    }

    return res.status(500).json({ error: e.message || '' })
  }
})

export default handler
