import { Container } from '@/components/layout/Container'
import { InteractiveMountain } from '@/components/fun/InteractiveMountain'

export const Hero = () => {
  return (
    <div className="relative h-screen">
      <InteractiveMountain />
      <Container className="relative z-10 pt-20 pb-16 lg:pt-32 text-black">
        <p className="font-display text-3xl font-medium tracking-tight sm:text-7xl relative space-x-4">
          <span className="font-handwriting">Hey hey!</span>
          <span className="animate-waving-hand inline-block">👋</span>
        </p>
        <p className="mt-10 max-w-xl text-2xl leading-10 ">
          Welcome! I'm <span className="font-bold">Adam Fortuna,</span> a product-focused, full-stack web developer
          living in Salt Lake City, UT.
        </p>
        <p className="mt-4 max-w-xl text-2xl leading-10 ">
          I love <span className="font-bold">enlivening experiences</span>,{' '}
          <span className="font-bold">elevating data</span> and{' '}
          <span className="font-bold">making playful websites</span>.
        </p>
      </Container>
    </div>
  )
}
