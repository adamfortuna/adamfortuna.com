import { Container } from '@/components/layout/Container'
import PageLayout from './pageLayout'

export default async function Loading() {
  return (
    <PageLayout>
      <Container className="max-w-5xl">
        <h1 className="md:text-center text-3xl md:text-5xl font-hardwriting font-bold text-grey-800 leading-tight">
          Loading...
        </h1>

        <p className="text-center">Just a sec, we gotta load stuff.</p>
      </Container>
    </PageLayout>
  )
}
