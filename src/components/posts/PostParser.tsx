/* eslint-disable react/jsx-props-no-spreading */

import React from 'react'
import HtmlToReact, { Parser as HtmlToReactParser } from 'html-to-react'
import { Link } from '@/components/layout/Link'

type Props = {
  html: string
}

export const PostParser = ({ html }: Props) => {
  const htmlParser = new HtmlToReactParser()
  const processNodeDefinitions = new HtmlToReact.ProcessNodeDefinitions(React)

  const aTagInstruction = {
    replaceChildren: false,
    shouldProcessNode: (node: any) => node.name === 'a',
    processNode: (node: any, children: any) => {
      const { href, ...props } = node.attribs
      return (
        <Link href={href} {...props}>
          {children}
        </Link>
      )
    },
  }

  const defaultInstruction = {
    shouldProcessNode: () => true,
    processNode: processNodeDefinitions.processDefaultNode,
  }

  const processingInstructions = [aTagInstruction, defaultInstruction]

  return htmlParser.parseWithInstructions(html, () => true, processingInstructions)
}
