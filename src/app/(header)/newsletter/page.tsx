/* eslint-disable jsx-a11y/label-has-associated-control */
import { Container } from '@/components/layout/Container'

export const dynamic = 'force-static'
export default async function NewsletterPage() {
  return (
    <Container className="max-w-3xl">
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
                <p className="mt-1">
                  This is a very unofficial, unprofessional newsletter. I'm not trying to start a business, there are no
                  sponsors and I'm just out to have fun with others creating cool stuff online.
                </p>
                <p className="mt-1">Here's what you should expect by joining this newsletter:</p>
                <ul className="mt-2">
                  <li>I'll email you once a month with any new posts & whatever I'm up to.</li>
                  <li>I'll keep your email safe and secret, never sharing it with anyone.</li>
                </ul>
                <p>
                  That's it! My own email is in this same database – and you can believe I make sure it's safe. Behind
                  the scenes it uses a{' '}
                  <a href="https://wp.adamfortuna.com/sendy" target="_blank" rel="noreferrer">
                    Sendy
                  </a>{' '}
                  server that I host myself. Your email won't be stored in any large email provider database (Mailchimp,
                  ConvertKit, etc).
                </p>
                <p className="italic text-sm text-gray-700">
                  Side note: I'm still setting this up, so you might not get emails for a few weeks until I can figure
                  out how to wire up my RSS feed to send out emails. 😅
                </p>
              </div>

              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="form-label">
                    First name
                    <input type="text" name="name" id="name" autoComplete="given-name" className="form-text" />
                  </label>
                </div>

                <div>
                  <label htmlFor="email" className="form-label">
                    Email address
                    <input type="email" name="email" id="email" autoComplete="email" className="form-text" />
                  </label>
                </div>

                <div>
                  <span>
                    <button type="submit" className="button" aria-label="Subscribe">
                      <span>Subscribe</span>
                    </button>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </Container>
  )
}
