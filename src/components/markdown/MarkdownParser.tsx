/* eslint-disable react/jsx-props-no-spreading */
import { useMemo } from 'react'
import { getMDXComponent } from 'mdx-bundler/client'

type Props = {
  content: string
}

export const MarkdownParser = ({ content }: Props) => {
  const Component = useMemo(() => {
    return getMDXComponent(content), [content]
  }, [content])

  if(Component) {
    return <Component/>
  } else {
    return <></>
  }
}
