import { Selection, axisRight, select, selectAll } from 'd3'
import { scaleLinear } from 'd3-scale'
import { extent } from 'd3-array'
import data from './data.json'

// const parsedData = Object.keys(data).map((key) => {
//   const yearlyData = data[key]

//   const total = Object.keys(yearlyData).reduce((acc, cur) => {
//     return acc + yearlyData[cur]
//   }, 0)

//   Object.keys(yearlyData).forEach((key) => {
//     yearlyData[key] = yearlyData[key] / total
//   })

//   return yearlyData
// })

const years = Object.keys(data)
  .map((key) => Number(key))
  .sort()

interface HistomapConfig {
  height: number
  width: number
}

type SelectionType = Selection<any, any, any, any>
export default function genereteHistomap(refEl: SelectionType, config: HistomapConfig) {
  const svg = refEl.append('svg').attr('width', config.width).attr('height', config.height)

  // Y-Axis
  const yDomain = extent(years) as [Number, Number]
  const yScale = scaleLinear().range([0, config.height]).domain(yDomain)
  const yAxis = axisRight(yScale)
    .ticks(years.length)
    .tickFormat((d) => String(d))
    .tickSize(config.width)
  svg
    .append('g')
    .attr('width', '100%')
    .call(yAxis)
    .call(() => select('.domain').remove())
    .call(() => selectAll('.tick:not(:first-of-type) line').attr('stroke-opacity', 0.5).attr('stroke-dasharray', '2,2'))
    .call(() => selectAll('.tick text').attr('x', 4).attr('dy', -4))

  return refEl
}
