// import { ArrowLongLeftIcon, ArrowLongRightIcon } from '@heroicons/react/20/solid'
import { faChevronLeft, faChevronRight } from '@fortawesome/pro-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import clsx from 'clsx'
import compact from 'lodash/compact'
import uniq from 'lodash/uniq'
import Link from 'next/link'

interface Params {
  page: number
  totalPages: number
  url: string
}

const Pagination = ({ page, totalPages, url }: Params) => {
  const pages: Number[] =
    totalPages < 6
      ? Array.from({ length: totalPages }, (_, i) => i + 1)
      : uniq(compact([1, 2, 3, page, totalPages - 2, totalPages - 1, totalPages])).sort((a, b) => (a > b ? 1 : -1))

  if (totalPages === 1) {
    return <></>
  }

  return (
    <nav className="mt-8 flex items-center justify-between border-t border-yellow-200 px-4 sm:px-0">
      <div className="-mt-px flex w-0 flex-1">
        {page > 1 && (
          <Link
            href={page - 1 <= 1 ? url : `${url}/${page - 1}`}
            className="inline-flex items-center border-t-2 border-transparent pt-4 pr-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
          >
            <FontAwesomeIcon icon={faChevronLeft} size="1x" className="w-3 h-3 max-w-[24px] mr-1" />
            Previous
          </Link>
        )}
      </div>
      <div className="hidden md:-mt-px md:flex">
        {pages.map((pageNumber) => (
          <Link
            key={`pagination-${pageNumber}`}
            href={`${url}/${pageNumber}`}
            className={clsx(
              'inline-flex items-center border-t-2 border-transparent px-4 pt-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700',
              pageNumber === page
                ? 'border-indigo-500 text-indigo-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300',
            )}
          >
            {String(pageNumber)}
          </Link>
        ))}
      </div>
      <div className="-mt-px flex w-0 flex-1 justify-end">
        {totalPages > page && (
          <Link
            href={`${url}/${page + 1}`}
            className="inline-flex items-center border-t-2 border-transparent pt-4 pl-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
          >
            Next
            <FontAwesomeIcon icon={faChevronRight} size="1x" className="w-3 h-3 max-w-[24px] ml-1" />
          </Link>
        )}
      </div>
    </nav>
  )
}
export default Pagination
