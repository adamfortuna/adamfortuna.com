'use client'

import { useEffect, useRef } from 'react'
import { select } from 'd3'
import { useElementSize } from 'usehooks-ts'
import genereteHistomap from './run'

const SocialHistoMap = ({ width, height }: { width: number; height: number }) => {
  const wrapperEl = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (width && wrapperEl.current) {
      wrapperEl.current.innerHTML = ''
      const svgEl = select(wrapperEl.current)
      genereteHistomap(svgEl, {
        width: width > 1530 ? 1530 : width,
        height,
      })
    }
  }, [width, height, wrapperEl])

  return <div ref={wrapperEl} />
}

const DynamicSocialHistoMap = () => {
  const [wrapperEl, { width }] = useElementSize()

  return (
    <div ref={wrapperEl}>
      <SocialHistoMap height={3300} width={width} />
    </div>
  )
}

export default DynamicSocialHistoMap
