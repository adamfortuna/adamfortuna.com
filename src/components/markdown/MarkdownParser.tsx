/* eslint-disable react/jsx-props-no-spreading */
import { useMemo } from 'react'
import { getMDXComponent } from 'mdx-bundler/client'

type Props = {
  content: string
}

export const MarkdownParser = ({ content }: Props) => {
  const Component = useMemo(() => getMDXComponent(content), [content])
  return <Component />
}
