import { NextPage } from 'next'
import Link from 'next/link'
import { Container } from '@/components/layout/Container'

const Credits: NextPage = () => {
  return (
    <main>
      <Container>
        <ul>
          <li>
            The interactive visualization on the
            <Link href="/">
              <a>homepage</a>
            </Link>
            is inspired by{' '}
            <a href="https://www.cassie.codes/" target="_blank" rel="noreferrer">
              Cassie Evans
            </a>
            .
          </li>
          <li>
            The mountain SVG graphic on the homepage is from{' '}
            <a
              href="https://www.freepik.com/free-vector/spring-landscape_12339026.htm"
              target="_blank"
              rel="noreferrer"
            >
              FreePik
            </a>
            .
          </li>
          <li>
            The theme for this site is inspired by the Code School course{' '}
            <a
              href="https://www.pluralsight.com/courses/code-school-javascript-road-trip-part-1"
              target="_blank"
              rel="noreferrer"
            >
              JavaScript Road Trip
            </a>
            .
          </li>
        </ul>
      </Container>
    </main>
  )
}

export default Credits
