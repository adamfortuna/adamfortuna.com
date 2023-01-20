import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/pro-regular-svg-icons'

export const ReplyViaEmail = () => (
  <a
    className="max-w-4xl mx-auto my-8 card flex flex-row justify-center items-center space-x-6 link--blue hover:bg-blue-50"
    href="mailto:contact@adamfortuna.com"
  >
    <FontAwesomeIcon icon={faEnvelope} size="2x" className="w-12 h-12 text-blue-600" />
    <span className="link--blue">Want to reply to this? I welcome comments via email.</span>
  </a>
)
