/* eslint-disable jsx-a11y/label-has-associated-control */
import { NextPage } from 'next'
import { Container } from '@/components/layout/Container'

const Newsletter: NextPage = () => {
  return (
    <Container className="max-w-5xl">
      <h1 className="md:text-center text-3xl md:text-5xl font-hardwriting font-bold text-grey-800 leading-tight">
        Newsletter
      </h1>
      <div>
        <form className="space-y-8" action="https://sendy.minafi.com/subscribe" method="POST" acceptCharset="utf-8">
          <input type="hidden" name="list" value="892UVTIMgB51H8qkY76305YU2A" />
          <input type="hidden" name="subform" value="yes" />
          <div className="hidden">
            <label>
              HP <input type="text" name="hp" id="hp" />
            </label>
          </div>

          <div className="space-y-8 divide-y divide-gray-200 sm:space-y-5">
            <div className="space-y-6 sm:space-y-5 prose">
              <div>
                <p className="mt-1">Joining the newsletter means:</p>
                <ul className="mt-2">
                  <li>I'll keep your email safe and secret, never sharing it with anyone.</li>
                  <li>Emailing you with a link whenever I publish a new blog post</li>
                </ul>
                <p>That's it! My own email is in this same database – and you can believe I make sure it's safe.</p>
              </div>

              <div className="space-y-6 sm:space-y-5">
                <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
                  <label htmlFor="first-name" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                    First name
                  </label>
                  <div className="mt-1 sm:col-span-2 sm:mt-0">
                    <input
                      type="text"
                      name="name"
                      id="name"
                      autoComplete="given-name"
                      className="block w-full max-w-lg rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:max-w-xs sm:text-sm"
                    />
                  </div>
                </div>
              </div>

              <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                  Email address
                </label>
                <div className="mt-1 sm:col-span-2 sm:mt-0">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    className="block w-full max-w-lg rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="pt-5">
            <div className="flex justify-end">
              <button
                type="submit"
                className="ml-3 inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                Subscribe
              </button>
            </div>
          </div>
        </form>
      </div>
    </Container>
  )
}

export default Newsletter
