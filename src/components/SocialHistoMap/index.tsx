/* eslint-disable react/no-danger */
import jsdom from 'jsdom'
import { select } from 'd3'
import SocialHistoMap from './SocialHistoMap'

const { JSDOM } = jsdom

const settings = {
  width: 1530,
  height: 3300,
}
const ServerSocialHistoMap = () => {
  const { document } = new JSDOM('').window
  global.document = document
  const virtualBody = select(document).select('body')
  const histomap = new SocialHistoMap(virtualBody, settings)
  histomap.run()

  const content = virtualBody.node() as HTMLElement
  return <div dangerouslySetInnerHTML={{ __html: content.innerHTML }} />
}

export default ServerSocialHistoMap
