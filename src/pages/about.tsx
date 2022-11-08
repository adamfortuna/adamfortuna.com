import { Image } from '@/components/layout/Image'
import { Container } from '@/components/layout/Container'
import { Link } from '@/components/layout/Link'
import clsx from 'clsx'

import { TwitterIcon, HardcoverIcon, InstagramIcon, GitHubIcon, LinkedInIcon, MailIcon } from '@/components/SocialIcons'

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

const About = () => {
  return (
    <Container className="mt-16 sm:mt-32">
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
        <div className="lg:pl-20">
          <div className="max-w-xs px-2.5 lg:max-w-none">
            <div className="mb-20">
              <Image
                src="adam_megacon_432c592c3d.jpg"
                alt="Adam at Megacon in Orlando, FL"
                width="400px"
                height="300px"
                sizes="(min-width: 1024px) 32rem, 20rem"
                className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover"
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
                  <SocialLink href="mailto:contact@adamfortuna.com" icon={MailIcon}>
                    contact@adamfortuna.com
                  </SocialLink>
                </ul>
              </div>
            </div>

            {images.map((image, index) => (
              <div className="my-4" key={image.src}>
                <Image
                  src={image.src}
                  alt={image.alt}
                  width="400px"
                  height="300px"
                  sizes="(min-width: 1024px) 32rem, 20rem"
                  className={`aspect-square ${index % 2 === 0 ? '-' : ''}rotate-3 rounded-2xl bg-zinc-100 object-cover`}
                />
              </div>
            ))}
          </div>
        </div>
        <div className="lg:order-first lg:row-span-2">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl">
            I'm Adam. I love making fun stuff on the web.
          </h1>
          <div className="mt-6 space-y-7 text-base text-zinc-600 ">
            <p>
              When I was a kid my dad would bring home his Macintosh computer from work. I don't remember the first time
              I used it, but I do remember feeling it was just another tool like a VCR or a TV.
            </p>
            <p>
              My earliest memory is using a computer to draw. I'm guessing this might’ve been a precursor to Photoshop
              back in the 80s – something with minimal options. I never worried about "messing things up" on the system
              — it wasn’t a concern. Instead, I focused on important things like how to change the icon for a folder.
              Later on learning how to format and reset a system was like learning a superpower. It guaranteed that my
              playground would be working.
            </p>
            <p>I'm 40 now and computers-and the web-are still my playground.</p>

            <h2 className="text-2xl font-bold tracking-tight text-zinc-800 sm:text-3xl">Life</h2>
            <p>
              I live with my wife of 16 years in Salt Lake City, UT. We both grew up in Florida, but moved out here in
              2018 after Pluralsight acquired Code School. It's been an amazing decision and we absolutely love it here.
            </p>
            <p>
              At the moment I'm recovering from a torn ACL that underwent surgery in July '22. When I'm back to 100%
              I'll be backpacking, camping and exploring the mountains of Utah.
            </p>
            <p>
              I love just about any beer and cocktails, but have a special place for sours, belgians, saisons, gin and
              chartreuse.
            </p>

            <p>
              As far as other non-computer topics go, you'll find me thinking about minimalism, stoicism, mindfulness,
              financial independence.
            </p>

            <p>Here are a few very-specific blog posts if you'd like to learn more.</p>
            <ul>
              <li>
                <Link href="/now">What I'm focusing on right now</Link>
              </li>
              <li>
                <Link href="https://minafi.com/beliefs">My 52 Beliefs</Link>
              </li>
              <li>
                <Link href="https://minafi.com/goals">
                  101 Things I Want to Know, Have, Do or Be – My Bucket, Goals and Vision List
                </Link>
              </li>
            </ul>

            <h2 className="text-2xl font-bold tracking-tight text-zinc-800 sm:text-3xl">Work</h2>
            <p>
              Usually this is where you'd expect to see how I'm making money to actually, you know, live. My answer is a
              little more complicated than that.
            </p>
            <p>
              Back in 2012 I joined this startup called Code School. We all worked really hard, and eventually the
              company was sold to Pluralsight. I got some money from the deal (~$400k), but it was no where near enough
              to retire to an island.
            </p>
            <p>
              By 2018 Pluralsight had grown. They IPO'd and suddenly my stock was worth something! After 6 months I
              cashed it all in (~$800k) and decided to take some time off.
            </p>
            <p>
              And that where I'm at today: still taking time off traditional work. In the 4 years since then I've had a
              blast building stuff online for fun - mostly on <Link href="https://minafi.com">Minafi.com</Link> and{' '}
              <Link href="https://minafi.com">Hardcover.app</Link>.
            </p>
            <p>
              How long will it last? Who knows. That depends on the stock market, our spending and if anything I make
              becomes profitable. In the meantime I've having a blast building things that I want to exist in the world
              rather than for a job. It's a chance I'm thankful for everyday.
            </p>
            <p>I'm an open book, feel free to reach out at anytime.</p>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default About
