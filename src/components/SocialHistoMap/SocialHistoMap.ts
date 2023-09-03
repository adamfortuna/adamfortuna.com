/* eslint-disable @typescript-eslint/lines-between-class-members */
/* eslint-disable sonarjs/no-duplicate-string */
import { area, Selection, axisRight, path, select, selectAll, stack, stackOffsetExpand } from 'd3'
import { scaleLinear } from 'd3-scale'
import { extent } from 'd3-array'
import data from './dataArray.json'
import colorsJson from './colors.json'
import plarformOrder from './order.json'

type SelectionType = Selection<any, any, any, any>
const colors: { [key: string]: string } = colorsJson

interface HistomapConfig {
  height: number
  width: number
}

const years = data.map((d) => d.year).sort()

export default class SocialHistoMap {
  svg: SelectionType
  config: HistomapConfig
  ref: SelectionType
  yDomain: [Number, Number] | undefined
  yScale: any
  mini: boolean
  xScale: any
  yearLabelWidth: number = 60

  constructor(ref: SelectionType, config: HistomapConfig) {
    this.ref = ref
    this.config = config
    this.config.height *= years.length
    this.svg = this.ref.append('svg')
    this.mini = this.config.width === 1000
  }

  run() {
    this.setup()
    this.createSvg()
    this.areaChart()
    this.yAxis()
  }

  setup() {
    this.yDomain = extent(years) as [Number, Number]
    this.yScale = scaleLinear().range([0, this.config.height]).domain(this.yDomain)
    this.xScale = scaleLinear()
      .range([0, this.config.width - this.yearLabelWidth - (this.mini ? 0 : this.yearLabelWidth)])
      .domain([0, 1])
  }

  createSvg() {
    this.svg.attr('width', this.config.width).attr('height', this.config.height)
  }

  yAxis() {
    // Left Axis
    const yAxisLeft = axisRight(this.yScale)
      .ticks(years.length)
      .tickFormat((d) => String(d))
      .tickSize(this.config.width)

    const leftPath = path()
    leftPath.moveTo(0, 0)
    leftPath.lineTo(0, this.yScale(years[years.length - 1]))
    leftPath.closePath()

    const yearLabelPadding = 8
    this.svg
      .append('g')
      .style('transform', 'translateY(24px)')
      .attr('width', '100%')
      .call(yAxisLeft)
      .call(() => select('.domain').remove())
      .append('path')
      .style('transform', `translateX(${this.yearLabelWidth}px)`)
      .attr('stroke', 'currentColor')
      .attr('d', leftPath.toString())
      .style('stroke-width', 3)

    // Right Axis
    if (!this.mini) {
      const yAxisRight = axisRight(this.yScale)
        .ticks(years.length)
        .tickFormat((d) => String(d))
        .tickSize(0)
      this.svg
        .append('g')
        .style('transform', `translate(${this.config.width - this.yearLabelWidth}px, 24px)`)
        .call(yAxisRight)
    }

    this.svg
      .call(() =>
        selectAll('.tick text')
          .attr('x', yearLabelPadding)
          .attr('font-size', '18px')
          .attr('font-weight', 'bold')
          .attr('dy', -4),
      )
      .call(() =>
        selectAll('.tick:not(:first-of-type) line').attr('stroke-opacity', 0.5).attr('stroke-dasharray', '2,2'),
      )
      .call(() => selectAll('.tick:last-of-type line').attr('stroke-opacity', 0))
      .call(() => selectAll('.tick:first-of-type line').attr('stroke-width', 3))
      .call(() => selectAll('.domain').style('stroke-width', 3))
  }

  areaChart() {
    const areaGenerator = area()
      .x0((d) => {
        return this.xScale(d[0])
      })
      .x1((d) => {
        return this.xScale(d[1])
      })
      .y((d, i) => {
        return this.yScale(data[i].year)
      })

    const platformArea = stack().keys(plarformOrder).offset(stackOffsetExpand)
    const stackedSeries = platformArea(data)

    this.svg
      .append('g')
      .style('transform', `translate(${this.yearLabelWidth}px, 24px)`)
      .attr('width', this.config.width - this.yearLabelWidth - (this.mini ? 0 : this.yearLabelWidth))
      .selectAll('path')
      .data(stackedSeries)
      .join('path')
      .style('fill', (d) => colors[d.key])
      .attr('d', (d) => {
        return areaGenerator(d as [number, number][])
      })
  }
}
