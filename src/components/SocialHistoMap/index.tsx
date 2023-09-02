/* eslint-disable react/no-danger */
import jsdom from 'jsdom'
import { select } from 'd3'
import genereteHistomap from './run'

const { JSDOM } = jsdom

const settings = {
  width: 1530,
  height: 3300,
}
const ServerSocialHistoMap = () => {
  const { document } = new JSDOM('').window
  global.document = document
  const virtualBody = select(document).select('body')
  const svg = genereteHistomap(virtualBody, settings)
  return <div dangerouslySetInnerHTML={{ __html: svg.node().innerHTML }} />
}

export default ServerSocialHistoMap
