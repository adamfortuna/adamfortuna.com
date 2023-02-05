import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/pro-regular-svg-icons'

export const ReplyViaEmail = () => (
  <a
    className="bg-white relative md:max-w-6xl mx-auto shadow-lg lg:rounded-lg py-2 px-2 my-2 md:my-2 md:p-2 md:pb-4 flex flex-row justify-center items-center space-x-6 link--blue hover:bg-blue-50"
    href="mailto:contact@adamfortuna.com"
  >
    <FontAwesomeIcon icon={faEnvelope} size="2x" className="w-12 h-12 text-blue-600" />
    <span className="link--blue">Want to reply to this? I welcome comments via email.</span>
  </a>
)
