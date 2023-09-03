/* eslint-disable @typescript-eslint/lines-between-class-members */
/* eslint-disable sonarjs/no-duplicate-string */
import { Selection, axisRight, path, select, selectAll } from 'd3'
import { scaleLinear } from 'd3-scale'
import { extent } from 'd3-array'
import data from './data.json'

type SelectionType = Selection<any, any, any, any>

interface HistomapConfig {
  height: number
  width: number
}

const years = Object.keys(data)
  .map((key) => Number(key))
  .sort()

export default class SocialHistoMap {
  svg: SelectionType
  config: HistomapConfig
  ref: SelectionType
  yDomain: [Number, Number] | undefined
  yScale: any

  constructor(ref: SelectionType, config: HistomapConfig) {
    this.ref = ref
    this.config = config
    this.svg = this.ref.append('svg')
  }

  run() {
    this.setup()
    this.createSvg()
    this.yAxis()
  }

  setup() {
    this.yDomain = extent(years) as [Number, Number]
    this.yScale = scaleLinear().range([0, this.config.height]).domain(this.yDomain)
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

    const yearLabelWidth = 60
    const yearLabelPadding = 8
    this.svg
      .append('g')
      .style('transform', 'translateY(24px)')
      .attr('width', '100%')
      .call(yAxisLeft)
      .call(() => select('.domain').remove())
      .call(() =>
        selectAll('.tick:not(:first-of-type) line').attr('stroke-opacity', 0.5).attr('stroke-dasharray', '2,2'),
      )
      .call(() => selectAll('.tick:last-of-type line').attr('stroke-opacity', 0))
      .call(() => selectAll('.tick:first-of-type line').attr('stroke-width', 3))
      .call(() => selectAll('.domain').style('stroke-width', 3))
      .append('path')
      .style('transform', `translateX(${yearLabelWidth}px)`)
      .attr('stroke', 'currentColor')
      .attr('d', leftPath.toString())
      .style('stroke-width', 3)

    // Right Axis
    const yAxisRight = axisRight(this.yScale)
      .ticks(years.length)
      .tickFormat((d) => String(d))
      .tickSize(0)
    this.svg
      .append('g')
      .style('transform', `translate(${this.config.width - yearLabelWidth}px, 24px)`)
      .call(yAxisRight)
      .call(() =>
        selectAll('.tick text')
          .attr('x', yearLabelPadding)
          .attr('font-size', '18px')
          .attr('font-weight', 'bold')
          .attr('dy', -4),
      )
      .call(() => selectAll('.domain').style('stroke-width', 3))
  }
}
