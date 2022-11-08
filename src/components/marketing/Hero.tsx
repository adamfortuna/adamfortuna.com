import { Container } from '@/components/layout/Container'
import { InteractiveMountain } from '@/components/fun/InteractiveMountain'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { Link } from '@/components/layout/Link'

export const Hero = () => {
  return (
    <div className="relative h-screen">
      <InteractiveMountain />
      <Container className="relative pt-20 pb-16 lg:pt-48 text-black">
        <p className="font-display text-3xl font-medium tracking-tight sm:text-7xl relative space-x-4">
          <span className="font-handwriting">Hey hey!</span>
          <span className="animate-waving-hand inline-block">👋</span>
        </p>
        <p className="mt-10 max-w-xl text-2xl leading-10 font-header">
          I'm <span className="font-bold">Adam Fortuna,</span> a full-stack product developer living in Salt Lake City,
          UT.
        </p>
        <p className="mt-4 max-w-xl text-2xl leading-10 font-header">
          I love <span className="font-bold">enlivening experiences</span>,{' '}
          <span className="font-bold">quantifying data</span> and{' '}
          <span className="font-bold">making playful websites</span>.
          <span className="ml-4 space-x-2">
            <Link href="https://twitter.com/adamfortuna" className="group" showExternal={false}>
              <FontAwesomeIcon icon={faTwitter} className="h-6 w-6 text-sky-800 group-hover:text-black" />
            </Link>
            <Link href="https://github.com/adamfortuna" className="group" showExternal={false}>
              <FontAwesomeIcon icon={faGithub} className="h-6 w-6 text-sky-800 group-hover:text-black" />
            </Link>
          </span>
        </p>
      </Container>
    </div>
  )
}
