'use client'

/* eslint-disable jsx-a11y/anchor-is-valid */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp } from '@fortawesome/pro-solid-svg-icons'
import { useVerticalScrollPosition } from '@/hooks/useVerticalScrollPosition'
import clsx from 'clsx'

const BackToTopMobileButton = ({ visible }: { visible: boolean }) => {
  return (
    <div
      className={clsx(
        'fixed bottom-4 right-4 z-20 duration-300 transition-opacity',
        visible ? 'opacity-100' : 'opacity-0',
      )}
    >
      <a
        href="#"
        className="shadow-lg text-blue-600 font-semibold text-base flex-inline items-center p-2 bg-white rounded active:shadow-2xl"
      >
        <span className="pr-1">Top</span>
        <FontAwesomeIcon icon={faArrowUp} size="sm" className="w-4 h-4 inline" />
      </a>
    </div>
  )
}

export const BackToTopMobile = () => {
  const { scrollPosition } = useVerticalScrollPosition()

  return <BackToTopMobileButton visible={scrollPosition > 500} />
}
