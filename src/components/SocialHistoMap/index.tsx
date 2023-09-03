'use client'

import { useEffect, useRef } from 'react'
import { select } from 'd3'
import { useElementSize } from 'usehooks-ts'
import SocialHistoMap from './SocialHistoMap'

const SocialHistoMapEl = ({ width, height }: { width: number; height: number }) => {
  const wrapperEl = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (width && wrapperEl.current) {
      wrapperEl.current.innerHTML = ''
      const svgEl = select(wrapperEl.current)
      const histomap = new SocialHistoMap(svgEl, {
        width,
        height,
      })
      histomap.run()
    }
  }, [width, height, wrapperEl])

  return <div ref={wrapperEl} />
}

const DynamicSocialHistoMap = () => {
  const [wrapperEl, { width }] = useElementSize()

  return (
    <div ref={wrapperEl}>
      <SocialHistoMapEl height={200} width={width} />
    </div>
  )
}

export default DynamicSocialHistoMap
