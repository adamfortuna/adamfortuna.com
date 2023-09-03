/* eslint-disable @typescript-eslint/lines-between-class-members */
/* eslint-disable sonarjs/no-duplicate-string */
import { area, Selection, axisRight, path, select, selectAll, stack, stackOffsetExpand, Series } from 'd3'
import { scaleLinear } from 'd3-scale'
import { extent } from 'd3-array'
import { maxBy } from 'lodash'
import data from './dataArray.json'
import colorsJson from './colors.json'
import plarformOrder from './order.json'

type SelectionType = Selection<any, any, any, any>
const colors: { [key: string]: string } = colorsJson
// const platforms = Object.keys(plarformOrder)

interface HistomapConfig {
  height: number
  width: number
}

const years = data.map((d) => d.year).sort()

export default class SocialHistoMap {
  [x: string]: any
  svg: SelectionType
  config: HistomapConfig
  ref: SelectionType
  yDomain: [Number, Number]
  yScale: any
  mini: boolean
  xScale: any
  yearLabelWidth: number = 60
  stackAreas: any
  stackedSeriesData: Series<{ [key: string]: number }, string>[]

  constructor(ref: SelectionType, config: HistomapConfig) {
    this.ref = ref
    this.config = config
    this.config.height *= years.length
    this.svg = this.ref.append('svg')
    this.mini = this.config.width === 1000

    const platformArea = stack().keys(plarformOrder).offset(stackOffsetExpand)
    this.stackedSeriesData = platformArea(data)
    this.yDomain = extent(years) as [Number, Number]
  }
  run() {
    this.setup()
    this.createSvg()
    this.areaChart()
    this.yAxis()
    this.labels()
  }

  setup() {
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
    this.areaGenerator = area()
      .x0((d) => this.xScale(d[0]))
      .x1((d) => this.xScale(d[1]))
      .y((d, i) => this.yScale(data[i].year))

    this.stackAreas = this.svg
      .append('g')
      .style('transform', `translate(${this.yearLabelWidth}px, 24px)`)
      .attr('width', this.config.width - this.yearLabelWidth - (this.mini ? 0 : this.yearLabelWidth))
      .selectAll('path')
      .data(this.stackedSeriesData)
      .join('path')
      .style('fill', (d) => colors[d.key])
      .attr('d', (d) => {
        return this.areaGenerator(d as [number, number][])
      })
  }

  labels() {
    this.svg
      .append('g')
      .style('transform', `translate(${this.yearLabelWidth}px, 24px)`)
      .attr('class', 'labels')
      .attr('width', this.config.width - this.yearLabelWidth - (this.mini ? 0 : this.yearLabelWidth))
      .selectAll('text')
      .data(this.stackedSeriesData)
      .enter()
      .append('text')
      .attr('x', (d) => {
        // There really should be a better way to do this?
        const totals = d.map((yearData, index) => {
          return { index, x0: yearData[0], x1: yearData[1], total: yearData[1] - yearData[0], year: yearData.data.year }
        })
        const topYear = maxBy(totals, (yearData) => yearData.total)
        return topYear ? this.xScale(topYear.x0 + (topYear.x1 - topYear.x0) / 2) : 0
      })
      .attr('y', (d) => {
        const totals = d.map((yearData) => {
          return { total: yearData[1] - yearData[0], year: yearData.data.year }
        })
        const topYear = maxBy(totals, (yearData) => yearData.total)
        return topYear ? this.yScale(d.key === 'Usenet' ? 1981.5 : topYear.year) : 0
      })
      .attr('font-size', 24)
      .attr('font-weight', 'bold')
      .attr('filter', 'url(#whiteOutlineEffect)')
      .style('text-anchor', 'middle')
      .text(({ key }) => key)
  }
}
