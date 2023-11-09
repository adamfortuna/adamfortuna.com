import { Container } from '@/components/layout/Container'

export default async function Loading() {
  return (
    <Container className="max-w-3xl">
      <p className="font-bold text-xl pb4">Loading...</p>
      <p>This page wasn't cached, but now it will be.</p>
    </Container>
  )
}
