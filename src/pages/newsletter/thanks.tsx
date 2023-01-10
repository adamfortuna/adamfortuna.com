import { NextPage } from 'next'
import { Container } from '@/components/layout/Container'

const ThanksYou: NextPage = () => {
  return (
    <Container className="max-w-5xl">
      <h1 className="md:text-center text-3xl md:text-5xl font-hardwriting font-bold text-grey-800 leading-tight">
        Thank You!
      </h1>

      <p className="text-center">Thanks for joining! We'll send you an email whenever a new post is published.</p>
    </Container>
  )
}

export default ThanksYou
