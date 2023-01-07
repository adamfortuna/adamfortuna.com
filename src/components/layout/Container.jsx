/* eslint-disable react/jsx-props-no-spreading */
import clsx from 'clsx'

export const Container = ({ className = '', ...props }) => {
  return <div className={clsx('mx-auto sm:px-6 lg:px-8', className)} {...props} />
}
