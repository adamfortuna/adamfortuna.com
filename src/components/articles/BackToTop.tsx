/* eslint-disable jsx-a11y/anchor-is-valid */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp } from '@fortawesome/pro-solid-svg-icons'
import { BackToTopMobile } from './BackToTopMobile'

export const BackToTop = () => (
  <>
    <div className="mx-auto max-w-3xl hidden md:block mt-8">
      <p className="text-right">
        <a href="#" className="link--blue text-sm flex-inline items-center">
          <span className="pr-1">Back to Top</span>
          <FontAwesomeIcon icon={faArrowUp} size="sm" className="w-4 h-4 inline" />
        </a>
      </p>
    </div>
    <div className="md:hidden">
      <BackToTopMobile />
    </div>
  </>
)
