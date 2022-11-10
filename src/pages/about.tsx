import clsx from 'clsx'
import { NextPage } from 'next'

import { ArticleContent } from '@/components/articles/ArticleContent'
import { Image } from '@/components/layout/Image'
import { Container } from '@/components/layout/Container'
import { Link } from '@/components/layout/Link'
import { getArticleByPath } from '@/lib/fileService'
import { Article } from '@/types'

import {
  TwitterIcon,
  HardcoverIcon,
  InstagramIcon,
  GitHubIcon,
  LinkedInIcon,
  MailIcon,
  AllTrailsIcon,
} from '@/components/SocialIcons'

const images = [
  {
    src: 'adam_computer_109c00c795.jpg',
    alt: 'Adam using a Macintosh',
  },
  {
    src: 'bryce_2e7bdf83b0.jpg',
    alt: 'Adam in Bryce Canyon, UT',
  },
  {
    src: 'parks_8abfcf53e3.jpg',
    alt: 'Settlers of Catan',
  },
  {
    src: 'barcamp_45da62a4ee.jpg',
    alt: 'Presenting at Barcamp',
  },
  {
    src: 'angels_landing_jsg0oh.jpg',
    alt: 'Angels Landing',
  },
  {
    src: 'bryce_canyon_s9poaa.jpg',
    alt: 'Bryce Canyon',
  },
  {
    src: 'hiking-big-cottonwood_gzc9ni.jpg',
    alt: 'Hiking in Big Cottonwood Canyon',
  },
  {
    src: 'adam-marilyn-wedding_ouwlmp.jpg',
    alt: 'Adam and Marilyn getting married',
  },
  {
    src: 'adam_boat_vlyo0j.jpg',
    alt: 'Hakone on a boat',
  },
  {
    src: 'disney_qq4qtn.jpg',
    alt: 'Adam & Marilyn at Disney',
  },
  {
    src: 'adam_spookys_canyon_uz9j5f.jpg',
    alt: "Adam at Spooky's Canyon",
  },
]

interface SocialLinkProps {
  icon: any
  className?: string
  href: string
  children: any
}
const SocialLink = ({ className, href, children, icon: Icon }: SocialLinkProps) => {
  return (
    <li className={clsx(className, 'flex my-2')}>
      <Link href={href} variant="info" size="md" className="group flex" target="_blank" showExternal={false}>
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-sky-600" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

export interface AboutProps {
  article: Article
}

const About: NextPage<AboutProps> = ({ article }) => {
  return (
    <Container className="mt-16 sm:mt-32">
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
        <div className="lg:order-first lg:row-span-2 prose mx-auto">
          <h1 className="text-left font-serif font-bold text-4xl mb-4">{article.title}</h1>
          <ArticleContent article={article} />
        </div>
        <div className="lg:pl-20 mx-auto px-2.5 w-full max-w-2xl">
          <div className="mb-20">
            <Image
              src="adam_megacon_432c592c3d.jpg"
              alt="Adam at Megacon in Orlando, FL"
              width="400px"
              height="300px"
              sizes="(min-width: 1024px) 32rem, 20rem"
              className="rounded-2xl bg-zinc-100 object-cover"
            />

            <div className="my-8">
              <ul>
                <SocialLink href="https://hardcover.app/@adam" icon={HardcoverIcon}>
                  Follow on Hardcover
                </SocialLink>
                <SocialLink href="https://twitter.com/adamfortuna" icon={TwitterIcon}>
                  Follow on Twitter
                </SocialLink>
                <SocialLink href="https://www.instagram.com/adamfortuna/" icon={InstagramIcon}>
                  Follow on Instagram
                </SocialLink>
                <SocialLink href="https://github.com/adamfortuna" icon={GitHubIcon}>
                  Follow on GitHub
                </SocialLink>
                <SocialLink href="https://www.linkedin.com/in/adamfortuna/" icon={LinkedInIcon}>
                  Follow on LinkedIn
                </SocialLink>
                <SocialLink href="https://www.alltrails.com/members/adam-fortuna" icon={AllTrailsIcon}>
                  Follow on AllTrails
                </SocialLink>
                <SocialLink href="mailto:contact@adamfortuna.com" icon={MailIcon}>
                  contact@adamfortuna.com
                </SocialLink>
              </ul>
            </div>
          </div>

          {images.map((image) => (
            <div className="my-4" key={image.src}>
              <Image
                src={image.src}
                alt={image.alt}
                width="400px"
                height="300px"
                sizes="(min-width: 1024px) 32rem, 20rem"
                className="md:aspect-square rounded-2xl bg-zinc-100 object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </Container>
  )
}

export default About

export async function getStaticProps() {
  const article = await getArticleByPath('content/articles/adamfortuna/pages/about.md', true)

  return {
    props: { article },
    revalidate: 60 * 60,
  }
}
