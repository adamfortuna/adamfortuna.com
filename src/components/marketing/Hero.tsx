import { Container } from '@/components/layout/Container'
import { InteractiveMountain } from '@/components/fun/InteractiveMountain'

export const Hero = () => {
  return (
    <div className="relative">
      <InteractiveMountain />
      <Container className="relative z-10 pt-20 pb-16 lg:pt-32 text-black">
        <p className="font-display text-3xl font-medium tracking-tight sm:text-7xl relative space-x-4">
          <span>Hey hey!</span>
          <span className="animate-waving-hand inline-block">👋</span>
        </p>
        <p className="mt-6 max-w-xl text-xl">
          Welcome, I'm <span className="font-bold">Adam,</span> a full-stack web developer from Salt Lake City, UT. I
          love <span className="font-bold">enlivening experiences</span>,{' '}
          <span className="font-bold">exploring data</span> and <span className="font-bold">making people smile</span>.
        </p>
      </Container>
    </div>
  )
}
